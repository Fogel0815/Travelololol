import { TripInput, Itinerary, DayPlan, POI } from "./types";
import { selectRoute } from "@/data/routes";
import { getDrivingSegment, getRegion } from "@/data/regions";
import { getPoisByInterests, pois } from "@/data/pois";
import { getAccommodationSuggestion, getAccommodationDetails } from "@/data/accommodations";
import { generateId } from "./storage";

const PACE_MULTIPLIER: Record<string, number> = {
  relaxed: 0.75,
  balanced: 1.0,
  active: 1.25,
};

export function generateItinerary(input: TripInput): Itinerary {
  const route = selectRoute(input.duration);
  const month = new Date(input.startDate).getMonth() + 1;

  // Build the day-by-day plan
  const days = buildDayPlan(input, route.regionSequence, month);

  // Calculate totals
  const totalDrivingHours = days.reduce((sum, d) => sum + d.drivingHours, 0);
  const totalDistanceKm = days.reduce((sum, d) => sum + d.distanceKm, 0);

  // Generate rationale
  const rationale = buildRationale(input, route, totalDrivingHours, month);

  // Generate adjustment suggestions
  const adjustmentSuggestions = buildSuggestions(input, route, days);

  return {
    id: generateId(),
    input,
    routeType: route.name,
    totalDrivingHours: Math.round(totalDrivingHours * 10) / 10,
    totalDistanceKm: Math.round(totalDistanceKm),
    rationale,
    days,
    adjustmentSuggestions,
    createdAt: new Date().toISOString(),
  };
}

function buildDayPlan(
  input: TripInput,
  regionSequence: string[],
  month: number
): DayPlan[] {
  const days: DayPlan[] = [];
  const paceMultiplier = PACE_MULTIPLIER[input.pace] ?? 1;
  const maxDriving = input.maxDrivingHours;

  // Distribute regions across days
  const regionDays = distributeRegions(
    regionSequence,
    input.duration,
    maxDriving,
    paceMultiplier
  );

  for (let i = 0; i < input.duration; i++) {
    const dayRegions = regionDays[i] || [regionSequence[regionSequence.length - 1]];
    const fromRegion = dayRegions[0];
    const toRegion = dayRegions[dayRegions.length - 1];

    // Calculate driving for this day
    let drivingHours = 0;
    let distanceKm = 0;
    for (let j = 0; j < dayRegions.length - 1; j++) {
      const segment = getDrivingSegment(dayRegions[j], dayRegions[j + 1]);
      if (segment) {
        drivingHours += segment.drivingHours;
        distanceKm += segment.distanceKm;
      }
    }

    // Get POIs for regions visited today
    const visitedRegionIds = [...new Set(dayRegions)];
    const stops = selectStops(
      visitedRegionIds,
      input.interests,
      month,
      drivingHours,
      paceMultiplier
    );

    // Calculate date
    const date = new Date(input.startDate);
    date.setDate(date.getDate() + i);

    const overnightRegion = getRegion(toRegion)?.name ?? toRegion;
    const accommodationSuggestion = getAccommodationSuggestion(
      toRegion,
      input.accommodationType
    );
    const accommodationDetails = getAccommodationDetails(
      toRegion,
      input.accommodationType
    );

    const practicalNotes = buildDayNotes(
      dayRegions,
      month,
      i,
      input.duration,
      drivingHours
    );

    days.push({
      dayNumber: i + 1,
      date: date.toISOString().split("T")[0],
      fromRegion: getRegion(fromRegion)?.name ?? fromRegion,
      toRegion: overnightRegion,
      drivingHours: Math.round(drivingHours * 10) / 10,
      distanceKm: Math.round(distanceKm),
      stops,
      overnightRegion,
      accommodationSuggestion,
      accommodationBookingUrl: accommodationDetails?.bookingUrl,
      accommodationPriceRange: accommodationDetails?.priceRange,
      practicalNotes,
    });
  }

  return days;
}

function distributeRegions(
  sequence: string[],
  totalDays: number,
  maxDrivingHours: number,
  paceMultiplier: number
): string[][] {
  // We need to visit all regions in the sequence over totalDays
  // Group them such that no day exceeds maxDrivingHours
  const result: string[][] = [];

  if (totalDays <= 0 || sequence.length === 0) return result;

  // Calculate total driving for the whole route
  const segments: { from: string; to: string; hours: number }[] = [];
  for (let i = 0; i < sequence.length - 1; i++) {
    const seg = getDrivingSegment(sequence[i], sequence[i + 1]);
    segments.push({
      from: sequence[i],
      to: sequence[i + 1],
      hours: seg?.drivingHours ?? 1.5,
    });
  }

  // Simple greedy distribution: assign segments to days
  let currentDay: string[] = [sequence[0]];
  let currentDriving = 0;
  let dayIndex = 0;
  const effectiveMax = maxDrivingHours * paceMultiplier;

  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i];
    const remainingSegments = segments.length - i;
    const remainingDays = totalDays - dayIndex;

    // If we have more days than segments left, we can spend extra time here
    if (remainingDays > remainingSegments && currentDriving + seg.hours > effectiveMax * 0.6) {
      // End this day here (spend more time in this region)
      result.push(currentDay);
      dayIndex++;
      currentDay = [seg.from];
      currentDriving = 0;
    }

    if (currentDriving + seg.hours <= effectiveMax || currentDay.length === 1) {
      currentDriving += seg.hours;
      currentDay.push(seg.to);
    } else {
      // Start a new day
      result.push(currentDay);
      dayIndex++;
      currentDay = [seg.from, seg.to];
      currentDriving = seg.hours;
    }
  }

  // Push the last day
  if (currentDay.length > 0) {
    result.push(currentDay);
    dayIndex++;
  }

  // If we have extra days, duplicate days in interesting regions
  while (result.length < totalDays) {
    // Find the best region to add an extra day (prefer regions with many POIs)
    let bestIdx = 0;
    let bestScore = 0;
    for (let i = 0; i < result.length; i++) {
      const lastRegion = result[i][result[i].length - 1];
      const poiCount = pois.filter((p) => p.regionId === lastRegion).length;
      const driving = calculateDayDriving(result[i]);
      const score = poiCount + (driving > 2 ? 2 : 0);
      if (score > bestScore) {
        bestScore = score;
        bestIdx = i;
      }
    }
    // Insert an extra day at that region (stay put)
    const stayRegion = result[bestIdx][result[bestIdx].length - 1];
    result.splice(bestIdx + 1, 0, [stayRegion]);
  }

  // If we have too many days, merge short days
  while (result.length > totalDays && result.length > 1) {
    // Find two adjacent days with least combined driving
    let bestMergeIdx = 0;
    let leastDriving = Infinity;
    for (let i = 0; i < result.length - 1; i++) {
      const combined = calculateDayDriving(result[i]) + calculateDayDriving(result[i + 1]);
      if (combined < leastDriving) {
        leastDriving = combined;
        bestMergeIdx = i;
      }
    }
    const merged = [...result[bestMergeIdx]];
    for (const r of result[bestMergeIdx + 1]) {
      if (r !== merged[merged.length - 1]) {
        merged.push(r);
      }
    }
    result.splice(bestMergeIdx, 2, merged);
  }

  return result;
}

function calculateDayDriving(regions: string[]): number {
  let total = 0;
  for (let i = 0; i < regions.length - 1; i++) {
    const seg = getDrivingSegment(regions[i], regions[i + 1]);
    total += seg?.drivingHours ?? 1.5;
  }
  return total;
}

function selectStops(
  regionIds: string[],
  interests: string[],
  month: number,
  drivingHours: number,
  paceMultiplier: number
): POI[] {
  const allPois: POI[] = [];

  for (const regionId of regionIds) {
    const matched = getPoisByInterests(regionId, interests, month);
    allPois.push(...matched);
  }

  // If no interest-matched POIs, get all available POIs for the regions
  if (allPois.length === 0) {
    for (const regionId of regionIds) {
      const regionPois = pois.filter(
        (p) => p.regionId === regionId && p.seasonalAvailability.includes(month)
      );
      allPois.push(...regionPois);
    }
  }

  // Deduplicate
  const seen = new Set<string>();
  const unique = allPois.filter((p) => {
    if (seen.has(p.id)) return false;
    seen.add(p.id);
    return true;
  });

  // Budget: ~8-10 hours in a day minus driving, scaled by pace
  const availableHours = Math.max(1, (10 - drivingHours) * paceMultiplier);
  let totalTime = 0;
  const selected: POI[] = [];

  // Sort by interest tag overlap (more matches = higher priority)
  const scored = unique.map((p) => ({
    poi: p,
    score: p.interestTags.filter((t) => interests.includes(t)).length,
  }));
  scored.sort((a, b) => b.score - a.score);

  for (const { poi } of scored) {
    if (totalTime + poi.estimatedDurationHours <= availableHours) {
      selected.push(poi);
      totalTime += poi.estimatedDurationHours;
    }
    if (selected.length >= 5) break; // Max 5 stops per day
  }

  return selected;
}

function buildDayNotes(
  dayRegions: string[],
  month: number,
  dayIndex: number,
  totalDays: number,
  drivingHours: number
): string {
  const notes: string[] = [];

  if (dayIndex === 0) {
    notes.push("Arrival day — pick up your rental car and settle in.");
  }
  if (dayIndex === totalDays - 1) {
    notes.push("Final day — allow time for return and car drop-off.");
  }

  if (month === 4) {
    if (dayRegions.includes("eastfjords")) {
      notes.push("Check road conditions for mountain passes in the Eastfjords — spring snow is possible.");
    }
    if (dayRegions.includes("north-iceland") || dayRegions.includes("myvatn")) {
      notes.push("April daylight: ~14 hours. Still cool (2-8°C) — dress in layers.");
    }
  }

  if (drivingHours > 4) {
    notes.push("Longer driving day — pack snacks and start early.");
  }

  if (drivingHours === 0) {
    notes.push("No driving today — explore at your leisure.");
  }

  return notes.join(" ");
}

function buildRationale(
  input: TripInput,
  route: ReturnType<typeof selectRoute>,
  totalDrivingHours: number,
  month: number
): string {
  const parts: string[] = [];

  parts.push(
    `With ${input.duration} days, the ${route.name} route gives you the ideal balance of coverage and depth.`
  );

  if (input.pace === "relaxed") {
    parts.push("Your relaxed pace means fewer kilometers each day, with more time to linger at each stop.");
  } else if (input.pace === "active") {
    parts.push("Your active pace allows covering more ground, fitting in additional sights and detours.");
  }

  parts.push(
    `Total estimated driving is ~${Math.round(totalDrivingHours)} hours spread across ${input.duration} days, averaging ${(totalDrivingHours / input.duration).toFixed(1)} hours per day — well within your ${input.maxDrivingHours}-hour tolerance.`
  );

  if (month === 4) {
    parts.push(
      "April is shoulder season: expect around 14 hours of daylight, fewer crowds, and occasionally unpredictable weather. Some highland roads may still be closed, but the Ring Road and all main attractions are accessible. Pack layers and be flexible."
    );
  }

  if (input.interests.includes("nature")) {
    parts.push("The route prioritizes Iceland's most spectacular natural scenery — waterfalls, glaciers, and volcanic landscapes.");
  }
  if (input.interests.includes("hot-springs")) {
    parts.push("We've included geothermal baths along the route for relaxation between driving days.");
  }

  return parts.join(" ");
}

function buildSuggestions(
  input: TripInput,
  route: ReturnType<typeof selectRoute>,
  days: DayPlan[]
): string[] {
  const suggestions: string[] = [];

  if (input.duration >= 10 && !route.regionSequence.includes("snaefellsnes")) {
    suggestions.push(
      "Consider adding a day trip to the Snæfellsnes Peninsula — often called 'Iceland in Miniature' with its glacier, lava fields, and Kirkjufell mountain."
    );
  }

  if (input.interests.includes("hot-springs")) {
    suggestions.push(
      "Book the Blue Lagoon and Mývatn Nature Baths well in advance — especially during shoulder season when some time slots sell out."
    );
  }

  const longDays = days.filter((d) => d.drivingHours > input.maxDrivingHours);
  if (longDays.length > 0) {
    suggestions.push(
      `Days ${longDays.map((d) => d.dayNumber).join(", ")} exceed your preferred ${input.maxDrivingHours}-hour driving limit. Consider adding an extra night to split these drives.`
    );
  }

  if (input.transportMode === "campervan") {
    suggestions.push(
      "Campervan tip: Many campgrounds in Iceland open by late April. Check availability for N1 campsites and use the Campcard for discounts."
    );
  }

  suggestions.push(
    "Always carry cash for unmanned toll roads and small countryside shops. Cell coverage is good on the Ring Road but patchy in the Eastfjords and highlands."
  );

  if (input.constraints.includes("weather-flexibility")) {
    suggestions.push(
      "Keep one or two days flexible in your itinerary. Icelandic weather can change quickly — having buffer days lets you revisit spots or wait for better conditions."
    );
  }

  return suggestions;
}
