import { RouteTemplate } from "@/lib/types";

export const routeTemplates: RouteTemplate[] = [
  {
    id: "golden-circle-short",
    name: "Golden Circle & Reykjanes",
    description: "A compact introduction to Iceland's highlights — geysers, waterfalls, tectonic plates, and the Blue Lagoon, all within easy reach of Reykjavík.",
    minDays: 3,
    maxDays: 4,
    regionSequence: ["reykjavik", "reykjanes", "golden-circle", "reykjavik"],
  },
  {
    id: "south-coast",
    name: "Golden Circle & South Coast",
    description: "Combine the classic Golden Circle with the dramatic South Coast — waterfalls, black beaches, and glacier views in under a week.",
    minDays: 5,
    maxDays: 6,
    regionSequence: ["reykjavik", "golden-circle", "south-coast", "south-coast", "golden-circle", "reykjavik"],
  },
  {
    id: "south-east",
    name: "South Coast to Jökulsárlón",
    description: "Extend the South Coast route all the way to the glacier lagoon and Diamond Beach — the crown jewel of Icelandic scenery.",
    minDays: 7,
    maxDays: 9,
    regionSequence: ["reykjavik", "golden-circle", "south-coast", "skaftafell", "jokulsarlon", "hofn", "jokulsarlon", "south-coast", "reykjavik"],
  },
  {
    id: "partial-ring",
    name: "Partial Ring Road",
    description: "Cover most of the Ring Road from South Coast through the East Fjords to North Iceland, returning via the interior — a comprehensive 10-13 day journey.",
    minDays: 10,
    maxDays: 13,
    regionSequence: ["reykjavik", "golden-circle", "south-coast", "skaftafell", "jokulsarlon", "hofn", "eastfjords", "myvatn", "akureyri", "west-iceland", "reykjavik"],
  },
  {
    id: "full-ring",
    name: "Full Ring Road & Snæfellsnes",
    description: "The ultimate Iceland road trip — complete the Ring Road with detours to Snæfellsnes, North Iceland highlights, and time to savor each region.",
    minDays: 14,
    maxDays: 21,
    regionSequence: ["reykjavik", "reykjanes", "golden-circle", "south-coast", "skaftafell", "jokulsarlon", "hofn", "eastfjords", "myvatn", "north-iceland", "akureyri", "west-iceland", "snaefellsnes", "reykjavik"],
  },
];

export function selectRoute(duration: number): RouteTemplate {
  const sorted = [...routeTemplates].sort((a, b) => b.minDays - a.minDays);
  for (const route of sorted) {
    if (duration >= route.minDays) {
      return route;
    }
  }
  return routeTemplates[0];
}
