import { Itinerary, TripInput } from "@/lib/types";
import { generateItinerary } from "@/lib/generate-itinerary";

const sampleInput: TripInput = {
  startDate: "2026-04-01",
  endDate: "2026-04-14",
  duration: 14,
  travelers: 2,
  travelerType: "couple",
  transportMode: "rental-car",
  pace: "balanced",
  maxDrivingHours: 5,
  interests: ["nature", "photography", "hot-springs", "hiking"],
  accommodationType: "mid-range",
  constraints: ["iconic-sights", "weather-flexibility"],
};

let _cached: Itinerary | null = null;

export function getSampleItinerary(): Itinerary {
  if (!_cached) {
    _cached = generateItinerary(sampleInput);
    _cached.id = "sample";
  }
  return _cached;
}
