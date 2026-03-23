import { Region, DrivingSegment } from "@/lib/types";

export const regions: Region[] = [
  {
    id: "reykjavik",
    name: "Reykjavík",
    description: "Iceland's vibrant capital, a compact city of colorful houses, world-class restaurants, and a thriving arts scene nestled between mountains and sea.",
    lat: 64.1466,
    lng: -21.9426,
    seasonalNotes: {
      april: "Spring is arriving — longer days (~14h daylight), still chilly (2-7°C). Good restaurant and museum season.",
      summer: "Busy tourist season with midnight sun. Book ahead.",
      winter: "Short days, Northern Lights possible. Cozy café culture.",
    },
    accommodationOptions: [
      { type: "budget", name: "KEX Hostel / Bus Hostel", priceRange: "€30–60/night", description: "Social hostels in the city center", bookingUrl: "https://www.hostel.is/" },
      { type: "mid-range", name: "Center Hotels / Fosshotel", priceRange: "€120–200/night", description: "Well-located hotels with Icelandic character", bookingUrl: "https://www.centerhotels.com/" },
      { type: "premium", name: "The Reykjavik EDITION / Konsúlat", priceRange: "€300–500/night", description: "Luxury boutique hotels", bookingUrl: "https://www.marriott.com/hotels/travel/rekeb-the-reykjavik-edition/" },
    ],
  },
  {
    id: "reykjanes",
    name: "Reykjanes Peninsula",
    description: "A UNESCO Global Geopark of volcanic landscapes, hot springs, and the famous Blue Lagoon, right next to Keflavík airport.",
    lat: 63.8748,
    lng: -22.4493,
    seasonalNotes: {
      april: "Recent lava fields may still be warm. All main attractions open. Wind can be strong.",
      summer: "Busy due to airport proximity. Book Blue Lagoon well ahead.",
      winter: "Dramatic storms and Northern Lights over lava fields.",
    },
    accommodationOptions: [
      { type: "budget", name: "Base Hotel / Guesthouses", priceRange: "€40–80/night", description: "Simple stays near Keflavík", bookingUrl: "https://www.basehotel.is/" },
      { type: "mid-range", name: "Northern Light Inn", priceRange: "€140–220/night", description: "Comfortable hotel near Blue Lagoon", bookingUrl: "https://www.northernlightinn.is/" },
      { type: "premium", name: "The Retreat at Blue Lagoon", priceRange: "€500–1000/night", description: "World-class spa hotel", bookingUrl: "https://www.bluelagoon.com/accommodation/the-retreat-hotel" },
    ],
  },
  {
    id: "golden-circle",
    name: "Golden Circle",
    description: "Iceland's most famous route: the rift valley of Þingvellir, the erupting Geysir, and the thundering Gullfoss waterfall — all within a few hours of Reykjavík.",
    lat: 64.3271,
    lng: -20.2727,
    seasonalNotes: {
      april: "All sites accessible. Can be icy mornings. Fewer crowds than summer.",
      summer: "Peak crowds at all stops. Go early or late.",
      winter: "Accessible but icy paths. Stunning frozen Gullfoss.",
    },
    accommodationOptions: [
      { type: "budget", name: "Golden Circle Apartments / Hostels", priceRange: "€40–70/night", description: "Self-catering near Selfoss", bookingUrl: "https://www.hostel.is/" },
      { type: "mid-range", name: "Hotel Geysir / Úthlíð Cottages", priceRange: "€130–200/night", description: "Scenic guesthouses near the sights", bookingUrl: "https://www.geysircenter.com/" },
      { type: "premium", name: "ION Adventure Hotel", priceRange: "€300–450/night", description: "Design hotel by Þingvellir", bookingUrl: "https://www.ioniceland.is/" },
    ],
  },
  {
    id: "south-coast",
    name: "South Coast",
    description: "A dramatic stretch of black sand beaches, iconic waterfalls, glacier tongues, and the charming village of Vík — the heart of Icelandic scenery.",
    lat: 63.4186,
    lng: -19.006,
    seasonalNotes: {
      april: "Waterfalls at full flow from snowmelt. Reynisfjara can have dangerous sneaker waves — stay far from water.",
      summer: "Puffins at Dyrhólaey (May–Aug). Long days for exploring.",
      winter: "Moody atmosphere. Ice caves nearby (Nov–Mar).",
    },
    accommodationOptions: [
      { type: "budget", name: "Vík HI Hostel / Puffin Hotel", priceRange: "€35–75/night", description: "Budget stays in Vík", bookingUrl: "https://www.hostel.is/hostels/vik" },
      { type: "mid-range", name: "Hotel Vík í Mýrdal / Guesthouse Carina", priceRange: "€120–200/night", description: "Comfortable options in and around Vík", bookingUrl: "https://www.hotelvik.is/" },
      { type: "premium", name: "Hotel Katla / Black Beach Suites", priceRange: "€250–400/night", description: "Premium stays with views", bookingUrl: "https://www.hotelkatla.is/" },
    ],
  },
  {
    id: "skaftafell",
    name: "Skaftafell / Vatnajökull",
    description: "Gateway to Europe's largest glacier, featuring the basalt column waterfall Svartifoss and stunning glacier hiking opportunities.",
    lat: 64.0729,
    lng: -16.9753,
    seasonalNotes: {
      april: "Glacier hikes running. Svartifoss trail may have snow patches. Layered clothing essential.",
      summer: "Best hiking conditions. Long days for glacier walks.",
      winter: "Ice cave season. Limited daylight for hikes.",
    },
    accommodationOptions: [
      { type: "budget", name: "Skaftafell Campground / Hótel Skaftafell (basic)", priceRange: "€25–70/night", description: "Basic accommodation near the park", bookingUrl: "https://www.vatnajokulsthjodgardur.is/en/plan-your-visit/accommodation" },
      { type: "mid-range", name: "Hótel Skaftafell / Fosshotel Glacier Lagoon", priceRange: "€140–220/night", description: "Best options near the national park", bookingUrl: "https://www.fosshotel.is/hotels/fosshotel-glacier-lagoon" },
      { type: "premium", name: "Fosshotel Glacier Lagoon (premium)", priceRange: "€280–400/night", description: "Premium rooms with glacier views", bookingUrl: "https://www.fosshotel.is/hotels/fosshotel-glacier-lagoon" },
    ],
  },
  {
    id: "jokulsarlon",
    name: "Jökulsárlón",
    description: "The awe-inspiring glacier lagoon where icebergs calve and float to sea, and the Diamond Beach where ice chunks wash ashore on black sand.",
    lat: 64.0784,
    lng: -16.2297,
    seasonalNotes: {
      april: "Icebergs present year-round. Boat tours start mid-April (zodiac) or May (amphibian). Diamond Beach always accessible.",
      summer: "Peak iceberg activity. Seal spotting. All boat tours running.",
      winter: "Fewer icebergs but magical light. No boat tours.",
    },
    accommodationOptions: [
      { type: "budget", name: "Skyrhúsið Guesthouse", priceRange: "€50–90/night", description: "Simple accommodation nearby", bookingUrl: "https://www.south.is/en/place/skyrhusid-guesthouse" },
      { type: "mid-range", name: "Fosshotel Glacier Lagoon / Hali Country Hotel", priceRange: "€150–250/night", description: "Well-located hotels between lagoon and Höfn", bookingUrl: "https://www.fosshotel.is/hotels/fosshotel-glacier-lagoon" },
      { type: "premium", name: "Fosshotel Glacier Lagoon (suites)", priceRange: "€300–450/night", description: "Premium rooms overlooking Vatnajökull", bookingUrl: "https://www.fosshotel.is/hotels/fosshotel-glacier-lagoon" },
    ],
  },
  {
    id: "hofn",
    name: "Höfn",
    description: "A small fishing town famous for its langoustine, with stunning views of Vatnajökull glacier and the dramatic Vestrahorn/Stokksnes mountains.",
    lat: 64.2539,
    lng: -15.2082,
    seasonalNotes: {
      april: "Langoustine festival vibes year-round. Stokksnes accessible. Quiet shoulder season.",
      summer: "Midnight sun illuminating Vestrahorn. Busy but beautiful.",
      winter: "Northern Lights over Vestrahorn. Some restaurants closed.",
    },
    accommodationOptions: [
      { type: "budget", name: "Höfn HI Hostel / Old Airline Guesthouse", priceRange: "€40–80/night", description: "Budget options in town", bookingUrl: "https://www.hostel.is/hostels/hofn" },
      { type: "mid-range", name: "Hotel Höfn / Milk Factory", priceRange: "€130–200/night", description: "Comfortable hotels in Höfn", bookingUrl: "https://www.hotelhofn.is/" },
      { type: "premium", name: "Hotel Höfn (premium) / Nýpugarðar", priceRange: "€220–350/night", description: "Best rooms with glacier views", bookingUrl: "https://www.hotelhofn.is/" },
    ],
  },
  {
    id: "eastfjords",
    name: "East Fjords",
    description: "Winding roads through dramatic fjords, colorful fishing villages, reindeer sightings, and the artistic town of Seyðisfjörður — Iceland's quieter side.",
    lat: 64.9138,
    lng: -13.6867,
    seasonalNotes: {
      april: "Roads generally open but check conditions. Fewer tourists. Some facilities seasonal.",
      summer: "Ferry arrives in Seyðisfjörður. Full services. Wildflowers.",
      winter: "Roads can close. Very remote feeling. Northern Lights.",
    },
    accommodationOptions: [
      { type: "budget", name: "Seyðisfjörður Hostel / Berunes HI", priceRange: "€35–75/night", description: "Charming hostels in fjord villages", bookingUrl: "https://www.hostel.is/" },
      { type: "mid-range", name: "Hotel & Restaurant Aldan / Fosshotel Eastfjords", priceRange: "€120–200/night", description: "Character hotels in scenic villages", bookingUrl: "https://www.hotelaldan.is/" },
      { type: "premium", name: "Hotel & Restaurant Aldan (suites)", priceRange: "€200–320/night", description: "Best the Eastfjords have to offer", bookingUrl: "https://www.hotelaldan.is/" },
    ],
  },
  {
    id: "myvatn",
    name: "Mývatn",
    description: "A geothermal wonderland of bubbling mud pots, lava formations, volcanic craters, hot springs, and one of Iceland's best nature baths.",
    lat: 65.6035,
    lng: -16.9964,
    seasonalNotes: {
      april: "Nature Baths open year-round. Midges not yet active (they peak June–Aug). Some trails may be muddy.",
      summer: "Full access but infamous midges. Bring head nets.",
      winter: "Magical frozen landscapes. Nature Baths still open.",
    },
    accommodationOptions: [
      { type: "budget", name: "Hlíð Campground / Dimmuborgir Guesthouse", priceRange: "€30–70/night", description: "Simple stays near the lake", bookingUrl: "https://www.myvatnnaturebaths.is/" },
      { type: "mid-range", name: "Fosshotel Mývatn / Sel Hotel", priceRange: "€130–210/night", description: "Comfortable lakeside hotels", bookingUrl: "https://www.fosshotel.is/hotels/fosshotel-myvatn" },
      { type: "premium", name: "Fosshotel Mývatn (premium) / Vogafjós", priceRange: "€250–380/night", description: "Premium rooms and farm-to-table dining", bookingUrl: "https://www.vogafjos.is/" },
    ],
  },
  {
    id: "north-iceland",
    name: "North Iceland",
    description: "Húsavík for whale watching, the mighty Dettifoss waterfall, the horseshoe canyon of Ásbyrgi, and the beautiful Goðafoss — raw and powerful.",
    lat: 65.9547,
    lng: -17.3385,
    seasonalNotes: {
      april: "Whale watching season begins. Dettifoss road (862) may still be closed — use west road (842). Ásbyrgi accessible.",
      summer: "Peak whale watching. All roads open. Puffins at Lundey.",
      winter: "Limited access to some falls. Húsavík quieter.",
    },
    accommodationOptions: [
      { type: "budget", name: "Húsavík Hostel / Campground", priceRange: "€30–65/night", description: "Budget stays in Húsavík", bookingUrl: "https://www.hostel.is/" },
      { type: "mid-range", name: "Fosshotel Húsavík / Cape Hotel", priceRange: "€120–200/night", description: "Harbor-view hotels in Húsavík", bookingUrl: "https://www.fosshotel.is/hotels/fosshotel-husavik" },
      { type: "premium", name: "Húsavík Cape Hotel (suites)", priceRange: "€220–350/night", description: "Premium rooms with bay views", bookingUrl: "https://www.husavikcapehotel.is/" },
    ],
  },
  {
    id: "akureyri",
    name: "Akureyri",
    description: "The 'Capital of the North' — a charming town with botanical gardens, a lively food scene, excellent skiing nearby, and gateway to Eyjafjörður.",
    lat: 65.6835,
    lng: -18.0878,
    seasonalNotes: {
      april: "Spring skiing possible. Town fully alive. Good base for North Iceland exploration.",
      summer: "Midnight sun cruise on Eyjafjörður. Botanical garden in bloom.",
      winter: "Skiing at Hlíðarfjall. Christmas decorations famous.",
    },
    accommodationOptions: [
      { type: "budget", name: "Akureyri Backpackers / City Campsite", priceRange: "€30–65/night", description: "Budget stays in town center", bookingUrl: "https://www.akureyribackpackers.com/" },
      { type: "mid-range", name: "Hótel Akureyri / Icelandair Hotel", priceRange: "€120–200/night", description: "Central hotels with character", bookingUrl: "https://www.hotelakureyri.is/" },
      { type: "premium", name: "Hótel Kea / Icelandair (premium)", priceRange: "€230–380/night", description: "Best hotels in the North", bookingUrl: "https://www.keahotels.is/en/hotel-kea" },
    ],
  },
  {
    id: "west-iceland",
    name: "West Iceland",
    description: "Borgarfjörður's lava waterfalls, Europe's most powerful hot spring, historic Reykholt, and Víðgelmir lava cave — often overlooked and wonderfully uncrowded.",
    lat: 64.7567,
    lng: -21.3,
    seasonalNotes: {
      april: "Hraunfossar at full flow. Cave tours running. Deildartunguhver steaming. Good transitional stop.",
      summer: "Green valleys. Full services. Whale watching from Grundarfjörður.",
      winter: "Accessible year-round. Fewer visitors.",
    },
    accommodationOptions: [
      { type: "budget", name: "Guesthouses in Borgarnes", priceRange: "€40–70/night", description: "Simple family-run stays", bookingUrl: "https://www.west.is/en/accommodation" },
      { type: "mid-range", name: "Hotel Húsafell / Hotel Borgarnes", priceRange: "€120–200/night", description: "Comfortable countryside hotels", bookingUrl: "https://www.hotelhusafell.com/" },
      { type: "premium", name: "Hotel Húsafell (premium)", priceRange: "€250–380/night", description: "Highland-adjacent luxury", bookingUrl: "https://www.hotelhusafell.com/" },
    ],
  },
  {
    id: "snaefellsnes",
    name: "Snæfellsnes Peninsula",
    description: "Called 'Iceland in Miniature' — glacier-capped volcano, dramatic sea cliffs, lava fields, charming fishing villages, and the iconic Kirkjufell mountain.",
    lat: 64.792,
    lng: -23.7811,
    seasonalNotes: {
      april: "Roads open. Kirkjufell accessible. Some wind exposure. Snæfellsjökull may be clouded but dramatic.",
      summer: "Puffins at Búðir. Whale watching from Ólafsvík. Long golden light.",
      winter: "Northern Lights over Kirkjufell — iconic shot. Some roads tricky.",
    },
    accommodationOptions: [
      { type: "budget", name: "Grundarfjörður Hostel / Campgrounds", priceRange: "€35–70/night", description: "Budget stays near Kirkjufell", bookingUrl: "https://www.hostel.is/" },
      { type: "mid-range", name: "Hotel & Restaurant Búðir / Fosshotel Hellnar", priceRange: "€140–230/night", description: "Atmospheric peninsula hotels", bookingUrl: "https://www.fosshotel.is/hotels/fosshotel-hellnar" },
      { type: "premium", name: "Hótel Búðir", priceRange: "€280–450/night", description: "One of Iceland's most romantic hotels", bookingUrl: "https://www.hotelbudir.is/" },
    ],
  },
];

export const drivingSegments: DrivingSegment[] = [
  { fromRegionId: "reykjavik", toRegionId: "reykjanes", distanceKm: 50, drivingHours: 0.75, roadNotes: "Easy highway drive" },
  { fromRegionId: "reykjavik", toRegionId: "golden-circle", distanceKm: 75, drivingHours: 1.25, roadNotes: "Well-maintained Route 1 and 35" },
  { fromRegionId: "reykjavik", toRegionId: "west-iceland", distanceKm: 75, drivingHours: 1, roadNotes: "Route 1 north through Hvalfjörður tunnel" },
  { fromRegionId: "golden-circle", toRegionId: "south-coast", distanceKm: 185, drivingHours: 2.5, roadNotes: "Route 1 south, scenic but straightforward" },
  { fromRegionId: "south-coast", toRegionId: "skaftafell", distanceKm: 145, drivingHours: 2, roadNotes: "Route 1 east, flat desert landscapes" },
  { fromRegionId: "skaftafell", toRegionId: "jokulsarlon", distanceKm: 60, drivingHours: 0.75, roadNotes: "Short stretch along Route 1" },
  { fromRegionId: "jokulsarlon", toRegionId: "hofn", distanceKm: 80, drivingHours: 1, roadNotes: "Scenic coastal drive" },
  { fromRegionId: "hofn", toRegionId: "eastfjords", distanceKm: 165, drivingHours: 2.5, roadNotes: "Winding fjord roads — beautiful but slow" },
  { fromRegionId: "eastfjords", toRegionId: "myvatn", distanceKm: 270, drivingHours: 3.5, roadNotes: "Long stretch through highland passes. Check conditions in April." },
  { fromRegionId: "myvatn", toRegionId: "north-iceland", distanceKm: 60, drivingHours: 0.75, roadNotes: "Short drive to Húsavík" },
  { fromRegionId: "north-iceland", toRegionId: "akureyri", distanceKm: 90, drivingHours: 1, roadNotes: "Route 1 along Eyjafjörður" },
  { fromRegionId: "akureyri", toRegionId: "myvatn", distanceKm: 100, drivingHours: 1.25, roadNotes: "Easy Route 1 drive" },
  { fromRegionId: "akureyri", toRegionId: "west-iceland", distanceKm: 285, drivingHours: 3.5, roadNotes: "Long Route 1 stretch through Blönduós" },
  { fromRegionId: "west-iceland", toRegionId: "snaefellsnes", distanceKm: 120, drivingHours: 1.75, roadNotes: "Route 54 to the peninsula" },
  { fromRegionId: "snaefellsnes", toRegionId: "reykjavik", distanceKm: 190, drivingHours: 2.5, roadNotes: "Route 54 and Route 1 back to capital" },
  // Reverse directions
  { fromRegionId: "reykjanes", toRegionId: "reykjavik", distanceKm: 50, drivingHours: 0.75 },
  { fromRegionId: "golden-circle", toRegionId: "reykjavik", distanceKm: 75, drivingHours: 1.25 },
  { fromRegionId: "west-iceland", toRegionId: "reykjavik", distanceKm: 75, drivingHours: 1 },
  { fromRegionId: "south-coast", toRegionId: "golden-circle", distanceKm: 185, drivingHours: 2.5 },
  { fromRegionId: "skaftafell", toRegionId: "south-coast", distanceKm: 145, drivingHours: 2 },
  { fromRegionId: "jokulsarlon", toRegionId: "skaftafell", distanceKm: 60, drivingHours: 0.75 },
  { fromRegionId: "hofn", toRegionId: "jokulsarlon", distanceKm: 80, drivingHours: 1 },
  { fromRegionId: "eastfjords", toRegionId: "hofn", distanceKm: 165, drivingHours: 2.5 },
  { fromRegionId: "myvatn", toRegionId: "eastfjords", distanceKm: 270, drivingHours: 3.5 },
  { fromRegionId: "north-iceland", toRegionId: "myvatn", distanceKm: 60, drivingHours: 0.75 },
  { fromRegionId: "akureyri", toRegionId: "north-iceland", distanceKm: 90, drivingHours: 1 },
  { fromRegionId: "myvatn", toRegionId: "akureyri", distanceKm: 100, drivingHours: 1.25 },
  { fromRegionId: "west-iceland", toRegionId: "akureyri", distanceKm: 285, drivingHours: 3.5 },
  { fromRegionId: "snaefellsnes", toRegionId: "west-iceland", distanceKm: 120, drivingHours: 1.75 },
  { fromRegionId: "reykjavik", toRegionId: "snaefellsnes", distanceKm: 190, drivingHours: 2.5 },
];

export function getDrivingSegment(
  from: string,
  to: string
): DrivingSegment | undefined {
  return drivingSegments.find(
    (s) => s.fromRegionId === from && s.toRegionId === to
  );
}

export function getRegion(id: string): Region | undefined {
  return regions.find((r) => r.id === id);
}
