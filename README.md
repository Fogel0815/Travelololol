# Iceland Roadtrip Planner

A smart road trip itinerary planner for Iceland that generates realistic day-by-day itineraries based on trip duration, dates, traveler profile, interests, pace, and accommodation preferences.

## Features

- **Smart Route Selection** — Automatically picks the best route for your trip length (Golden Circle, South Coast, Partial Ring, Full Ring Road + Snæfellsnes)
- **Day-by-Day Itinerary** — Realistic daily plans with driving times, key sights, overnight stops, and practical notes
- **Curated POI Database** — 60+ handpicked points of interest across 13 Icelandic regions
- **Seasonal Awareness** — Accounts for April shoulder season (daylight, road conditions, weather)
- **Personalized** — Adapts to your pace (relaxed/balanced/active), interests, driving tolerance, and accommodation budget
- **Save & Compare** — Save generated itineraries to localStorage for later reference

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/) primitives
- [Lucide React](https://lucide.dev/) icons
- localStorage for persistence (MVP)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with features and sample preview |
| `/plan` | Trip builder form with all input fields |
| `/itinerary/[id]` | Generated itinerary view with day cards |
| `/itinerary/sample` | Pre-built 14-day sample itinerary |
| `/saved` | Saved itineraries list |

## Sample Itinerary

A seed itinerary is included: **14-day Full Ring Road + Snæfellsnes**, April 1–14, 2026, couple, balanced pace, mid-range guesthouses, nature + photography focus.

View it at `/itinerary/sample`.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── itinerary/          # Itinerary display components
│   ├── landing/            # Landing page sections
│   ├── layout/             # Header + footer
│   ├── plan/               # Trip builder form
│   └── ui/                 # Reusable UI primitives
├── data/                   # Static Iceland dataset
│   ├── regions.ts          # 13 regions + driving matrix
│   ├── pois.ts             # 60+ points of interest
│   ├── routes.ts           # Route templates by duration
│   └── sample-itinerary.ts # Pre-built seed data
└── lib/
    ├── generate-itinerary.ts  # Core route generation logic
    ├── storage.ts             # localStorage helpers
    ├── types.ts               # TypeScript interfaces
    └── utils.ts               # Utility functions
```

## Design

Minimal, Scandinavian-inspired aesthetic: warm whites, subtle borders, glacial blue accents, generous whitespace, clean typography.
