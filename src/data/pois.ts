import { POI } from "@/lib/types";

export const pois: POI[] = [
  // Reykjavík
  { id: "hallgrimskirkja", name: "Hallgrímskirkja", description: "Iconic church with panoramic tower views over colorful Reykjavík rooftops.", regionId: "reykjavik", type: "church", interestTags: ["culture", "photography"], estimatedDurationHours: 0.75, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "harpa", name: "Harpa Concert Hall", description: "Award-winning glass concert hall on the harbor — stunning architecture inside and out.", regionId: "reykjavik", type: "museum", interestTags: ["culture", "photography"], estimatedDurationHours: 0.5, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "sun-voyager", name: "Sun Voyager", description: "Sleek stainless steel sculpture by the waterfront, symbolizing the promise of undiscovered territory.", regionId: "reykjavik", type: "museum", interestTags: ["culture", "photography"], estimatedDurationHours: 0.25, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "perlan", name: "Perlan", description: "Revolving glass dome with an indoor ice cave, planetarium, and exhibits on Icelandic nature.", regionId: "reykjavik", type: "museum", interestTags: ["nature", "culture"], estimatedDurationHours: 1.5, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "laugavegur", name: "Laugavegur Street", description: "Reykjavík's main shopping and dining street — cafés, boutiques, and street art.", regionId: "reykjavik", type: "town", interestTags: ["food", "culture"], estimatedDurationHours: 1, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },

  // Reykjanes
  { id: "blue-lagoon", name: "Blue Lagoon", description: "World-famous milky-blue geothermal spa set amid black lava fields.", regionId: "reykjanes", type: "hot-spring", interestTags: ["hot-springs", "photography"], estimatedDurationHours: 2.5, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "gunnuhver", name: "Gunnuhver Hot Springs", description: "Fiercely bubbling mud pools and steam vents on a coastal cliff.", regionId: "reykjanes", type: "hot-spring", interestTags: ["nature", "photography"], estimatedDurationHours: 0.5, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "bridge-continents", name: "Bridge Between Continents", description: "A footbridge spanning the rift between the North American and Eurasian tectonic plates.", regionId: "reykjanes", type: "mountain", interestTags: ["nature", "photography"], estimatedDurationHours: 0.5, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "reykjanesviti", name: "Reykjanesviti Lighthouse", description: "Iceland's oldest lighthouse perched on dramatic sea cliffs with crashing Atlantic waves.", regionId: "reykjanes", type: "mountain", interestTags: ["nature", "photography"], estimatedDurationHours: 0.5, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },

  // Golden Circle
  { id: "thingvellir", name: "Þingvellir National Park", description: "UNESCO site where tectonic plates meet — site of the world's oldest parliament, stunning rift valley walks.", regionId: "golden-circle", type: "canyon", interestTags: ["nature", "hiking", "culture", "photography"], estimatedDurationHours: 2, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "geysir", name: "Geysir & Strokkur", description: "Strokkur geyser erupts every 5-10 minutes, shooting boiling water 20-30 meters high.", regionId: "golden-circle", type: "hot-spring", interestTags: ["nature", "photography"], estimatedDurationHours: 0.75, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "gullfoss", name: "Gullfoss", description: "Massive two-tiered waterfall plunging into a deep canyon — Iceland's most famous falls.", regionId: "golden-circle", type: "waterfall", interestTags: ["nature", "photography"], estimatedDurationHours: 0.75, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "kerid", name: "Kerið Crater", description: "Vivid volcanic crater lake with striking red rock walls and aquamarine water.", regionId: "golden-circle", type: "crater", interestTags: ["nature", "photography"], estimatedDurationHours: 0.5, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "secret-lagoon", name: "Secret Lagoon", description: "Natural hot pool in Flúðir — less touristy alternative to Blue Lagoon with authentic Icelandic feel.", regionId: "golden-circle", type: "hot-spring", interestTags: ["hot-springs"], estimatedDurationHours: 1.5, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },

  // South Coast
  { id: "seljalandsfoss", name: "Seljalandsfoss", description: "Iconic waterfall you can walk behind — a curtain of water falling 60m off a cliff.", regionId: "south-coast", type: "waterfall", interestTags: ["nature", "photography", "hiking"], estimatedDurationHours: 0.75, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "skogafoss", name: "Skógafoss", description: "Powerful 60m waterfall with a staircase to the top for panoramic views and rainbow spotting.", regionId: "south-coast", type: "waterfall", interestTags: ["nature", "photography", "hiking"], estimatedDurationHours: 0.75, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "reynisfjara", name: "Reynisfjara Black Sand Beach", description: "Dramatic black beach with basalt columns and sea stacks — hauntingly beautiful and dangerously wavy.", regionId: "south-coast", type: "beach", interestTags: ["nature", "photography"], estimatedDurationHours: 0.75, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "dyrholaey", name: "Dyrhólaey", description: "Dramatic rock arch and promontory with views of black beaches and glacier peaks.", regionId: "south-coast", type: "mountain", interestTags: ["nature", "photography", "wildlife"], estimatedDurationHours: 0.75, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "solheimajokull", name: "Sólheimajökull Glacier Walk", description: "Accessible glacier tongue perfect for guided ice hikes — blue ice, crevasses, and volcanic ash layers.", regionId: "south-coast", type: "glacier", interestTags: ["nature", "hiking", "adventure", "photography"], estimatedDurationHours: 2.5, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "vik-village", name: "Vík Village", description: "Charming southernmost village with colorful houses, wool shop, and restaurant options.", regionId: "south-coast", type: "town", interestTags: ["food", "culture"], estimatedDurationHours: 0.75, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },

  // Skaftafell
  { id: "svartifoss", name: "Svartifoss", description: "The 'Black Falls' — a waterfall framed by dark hexagonal basalt columns, reached by a scenic 1.5km hike.", regionId: "skaftafell", type: "waterfall", interestTags: ["nature", "hiking", "photography"], estimatedDurationHours: 1.5, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "skaftafell-glacier", name: "Skaftafell Glacier Hike", description: "Guided glacier walk on a tongue of Vatnajökull — crampons, ice axes, and unforgettable views.", regionId: "skaftafell", type: "glacier", interestTags: ["nature", "hiking", "adventure"], estimatedDurationHours: 3, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },

  // Jökulsárlón
  { id: "jokulsarlon-lagoon", name: "Jökulsárlón Glacier Lagoon", description: "Surreal glacial lagoon with floating icebergs in shades of white, blue, and black.", regionId: "jokulsarlon", type: "glacier", interestTags: ["nature", "photography"], estimatedDurationHours: 1, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "diamond-beach", name: "Diamond Beach", description: "Ice chunks from the lagoon wash ashore on black sand — glistening like scattered diamonds.", regionId: "jokulsarlon", type: "beach", interestTags: ["nature", "photography"], estimatedDurationHours: 0.75, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "jokulsarlon-boat", name: "Glacier Lagoon Zodiac Tour", description: "Get up close to icebergs and seals on a thrilling zodiac boat ride through the lagoon.", regionId: "jokulsarlon", type: "glacier", interestTags: ["nature", "adventure", "wildlife"], estimatedDurationHours: 1.5, seasonalAvailability: [4,5,6,7,8,9,10] },

  // Höfn
  { id: "stokksnes", name: "Stokksnes / Vestrahorn", description: "One of Iceland's most photographed mountains — dramatic peaks reflected in black sand lagoons.", regionId: "hofn", type: "mountain", interestTags: ["nature", "photography", "hiking"], estimatedDurationHours: 1.5, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "hofn-langoustine", name: "Höfn Langoustine Tasting", description: "Taste Iceland's finest langoustine at harbor-side restaurants in this small fishing town.", regionId: "hofn", type: "restaurant", interestTags: ["food"], estimatedDurationHours: 1.5, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },

  // East Fjords
  { id: "seydisfjordur", name: "Seyðisfjörður", description: "Colorful artistic village at the end of a fjord — rainbow street, waterfalls, and the Smyril Line ferry.", regionId: "eastfjords", type: "town", interestTags: ["culture", "photography"], estimatedDurationHours: 1.5, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "fjadrargljufur", name: "Fjaðrárgljúfur Canyon", description: "A 100m deep mossy canyon with winding river — one of Iceland's most photogenic landscapes.", regionId: "south-coast", type: "canyon", interestTags: ["nature", "photography", "hiking"], estimatedDurationHours: 1, seasonalAvailability: [4,5,6,7,8,9,10] },
  { id: "stodvarfjordur", name: "Petra's Stone Collection", description: "A private museum of incredible Icelandic minerals collected over a lifetime — quirky and wonderful.", regionId: "eastfjords", type: "museum", interestTags: ["culture"], estimatedDurationHours: 0.75, seasonalAvailability: [5,6,7,8,9] },
  { id: "lagarfljot", name: "Lagarfljót Lake", description: "Iceland's 'Loch Ness' — scenic lake surrounded by Iceland's largest forest, Hallormsstaðaskógur.", regionId: "eastfjords", type: "mountain", interestTags: ["nature", "hiking"], estimatedDurationHours: 0.75, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },

  // Mývatn
  { id: "myvatn-baths", name: "Mývatn Nature Baths", description: "Beautiful geothermal lagoon overlooking the lake — less crowded and more natural than Blue Lagoon.", regionId: "myvatn", type: "hot-spring", interestTags: ["hot-springs", "nature"], estimatedDurationHours: 1.5, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "dimmuborgir", name: "Dimmuborgir", description: "Otherworldly lava formations creating a labyrinth of pillars, arches, and caves — easy walking trails.", regionId: "myvatn", type: "cave", interestTags: ["nature", "hiking", "photography"], estimatedDurationHours: 1, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "grjotagja", name: "Grjótagjá Cave", description: "A small lava cave with a geothermal hot spring inside — famous from Game of Thrones.", regionId: "myvatn", type: "cave", interestTags: ["nature", "photography"], estimatedDurationHours: 0.25, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "krafla", name: "Krafla Volcanic Area", description: "Active volcanic area with the Víti explosion crater, steaming vents, and colorful geothermal fields.", regionId: "myvatn", type: "crater", interestTags: ["nature", "photography", "hiking"], estimatedDurationHours: 1.5, seasonalAvailability: [4,5,6,7,8,9,10] },
  { id: "namaskard", name: "Námaskarð / Hverir", description: "Surreal geothermal field of boiling mud pots, steaming fumaroles, and sulfur-stained earth.", regionId: "myvatn", type: "hot-spring", interestTags: ["nature", "photography"], estimatedDurationHours: 0.75, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "skutustadagigar", name: "Skútustaðagígar Pseudo-Craters", description: "Unique crater-like formations along the lakeshore, created by steam explosions in ancient lava.", regionId: "myvatn", type: "crater", interestTags: ["nature", "photography"], estimatedDurationHours: 0.5, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },

  // North Iceland
  { id: "husavik-whales", name: "Húsavík Whale Watching", description: "Europe's whale-watching capital — see humpbacks, minkes, and dolphins in Skjálfandi Bay.", regionId: "north-iceland", type: "wildlife", interestTags: ["wildlife", "nature", "adventure"], estimatedDurationHours: 3, seasonalAvailability: [4,5,6,7,8,9,10] },
  { id: "dettifoss", name: "Dettifoss", description: "Europe's most powerful waterfall — a thundering curtain of glacial water plunging 44m into Jökulsárgljúfur canyon.", regionId: "north-iceland", type: "waterfall", interestTags: ["nature", "photography"], estimatedDurationHours: 1, seasonalAvailability: [4,5,6,7,8,9,10] },
  { id: "asbyrgi", name: "Ásbyrgi Canyon", description: "Horseshoe-shaped canyon said to be a hoofprint of Odin's horse — lush birch forest and dramatic cliffs.", regionId: "north-iceland", type: "canyon", interestTags: ["nature", "hiking", "photography"], estimatedDurationHours: 1.5, seasonalAvailability: [4,5,6,7,8,9,10] },
  { id: "godafoss", name: "Goðafoss", description: "The 'Waterfall of the Gods' — where Iceland's pagan idols were thrown when the country converted to Christianity.", regionId: "north-iceland", type: "waterfall", interestTags: ["nature", "photography", "culture"], estimatedDurationHours: 0.5, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },

  // Akureyri
  { id: "akureyri-garden", name: "Akureyri Botanical Garden", description: "World's most northerly botanical garden with 7,000 plant species — a surprising oasis.", regionId: "akureyri", type: "museum", interestTags: ["nature", "culture"], estimatedDurationHours: 0.75, seasonalAvailability: [5,6,7,8,9] },
  { id: "akureyri-church", name: "Akureyrarkirkja", description: "Striking church overlooking the town and fjord, designed by Guðjón Samúelsson.", regionId: "akureyri", type: "church", interestTags: ["culture", "photography"], estimatedDurationHours: 0.5, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "beer-spa", name: "Bjórböðin Beer Spa", description: "Soak in warm beer-filled tubs with mountain views — uniquely Icelandic relaxation.", regionId: "akureyri", type: "hot-spring", interestTags: ["hot-springs", "food"], estimatedDurationHours: 1, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "akureyri-town", name: "Akureyri Town Walk", description: "Explore charming streets, local cafés, bookshops, and the iconic heart-shaped traffic lights.", regionId: "akureyri", type: "town", interestTags: ["culture", "food"], estimatedDurationHours: 1, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },

  // West Iceland
  { id: "hraunfossar", name: "Hraunfossar & Barnafoss", description: "Ethereal waterfalls seeping through a lava field into a turquoise river — unlike any other falls in Iceland.", regionId: "west-iceland", type: "waterfall", interestTags: ["nature", "photography"], estimatedDurationHours: 0.75, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "deildartunguhver", name: "Deildartunguhver", description: "Europe's most powerful hot spring pumping 180 liters/second of boiling water — with a nearby spa.", regionId: "west-iceland", type: "hot-spring", interestTags: ["nature", "hot-springs"], estimatedDurationHours: 0.5, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "vidgelmir", name: "Víðgelmir Lava Cave", description: "Iceland's largest lava tube — a guided walk through a 1,600-year-old cave with stunning formations.", regionId: "west-iceland", type: "cave", interestTags: ["nature", "adventure"], estimatedDurationHours: 1.5, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "reykholt", name: "Reykholt", description: "Historical site where Snorri Sturluson lived — medieval hot pool and cultural center.", regionId: "west-iceland", type: "museum", interestTags: ["culture"], estimatedDurationHours: 0.75, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },

  // Snæfellsnes
  { id: "kirkjufell", name: "Kirkjufell", description: "Iceland's most photographed mountain — a perfectly shaped peak with a triple waterfall in front.", regionId: "snaefellsnes", type: "mountain", interestTags: ["nature", "photography"], estimatedDurationHours: 0.75, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "budakirkja", name: "Búðakirkja", description: "A striking isolated black church set against a backdrop of lava fields and mountains.", regionId: "snaefellsnes", type: "church", interestTags: ["photography", "culture"], estimatedDurationHours: 0.25, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "arnarstapi", name: "Arnarstapi Coastal Walk", description: "Dramatic coastal walk with rock arches, blow holes, and nesting seabirds along basalt cliffs.", regionId: "snaefellsnes", type: "mountain", interestTags: ["nature", "hiking", "photography", "wildlife"], estimatedDurationHours: 1, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "snaefellsjokull", name: "Snæfellsjökull Glacier", description: "The glacier-capped stratovolcano from Jules Verne's 'Journey to the Center of the Earth' — mystical and beautiful.", regionId: "snaefellsnes", type: "glacier", interestTags: ["nature", "photography", "hiking"], estimatedDurationHours: 0.5, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "djupalonssandur", name: "Djúpalónssandur", description: "Pebble beach with lifting stones and shipwreck remains at the foot of the glacier.", regionId: "snaefellsnes", type: "beach", interestTags: ["nature", "photography"], estimatedDurationHours: 0.75, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
  { id: "londrangar", name: "Lóndrangar", description: "Dramatic basalt pinnacles rising from the sea — remnants of an ancient volcanic plug.", regionId: "snaefellsnes", type: "mountain", interestTags: ["nature", "photography"], estimatedDurationHours: 0.5, seasonalAvailability: [1,2,3,4,5,6,7,8,9,10,11,12] },
];

export function getPoisForRegion(regionId: string): POI[] {
  return pois.filter((p) => p.regionId === regionId);
}

export function getPoisByInterests(
  regionId: string,
  interests: string[],
  month: number
): POI[] {
  return pois.filter(
    (p) =>
      p.regionId === regionId &&
      p.seasonalAvailability.includes(month) &&
      p.interestTags.some((t) => interests.includes(t))
  );
}
