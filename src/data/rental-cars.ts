import { RentalCarOption, TransportMode } from "@/lib/types";

export const rentalCarOptions: RentalCarOption[] = [
  // Rental cars
  {
    type: "rental-car",
    category: "Economy 2WD",
    example: "Toyota Yaris or similar",
    pricePerDay: "€40–70/day",
    notes: "Fine for summer Ring Road. Not recommended for F-roads or winter.",
  },
  {
    type: "rental-car",
    category: "Intermediate 4WD",
    example: "Dacia Duster or similar",
    pricePerDay: "€80–130/day",
    notes: "Good all-rounder for Ring Road year-round. Handles gravel roads well.",
  },
  {
    type: "rental-car",
    category: "Full-size SUV 4WD",
    example: "Toyota Land Cruiser or similar",
    pricePerDay: "€150–250/day",
    notes: "Required for F-roads and highland tracks. Best for winter and spring trips.",
  },
  // Campervans
  {
    type: "campervan",
    category: "Budget Campervan",
    example: "VW Caddy Camper or similar",
    pricePerDay: "€100–150/day",
    notes: "Compact 2-person setup. Save on accommodation costs.",
  },
  {
    type: "campervan",
    category: "Standard Campervan",
    example: "Fiat Ducato / VW Transporter",
    pricePerDay: "€150–220/day",
    notes: "Comfortable for 2–3 people with kitchen and sleeping area.",
  },
  {
    type: "campervan",
    category: "Large Motorhome",
    example: "4x4 Camper / Motorhome",
    pricePerDay: "€250–400/day",
    notes: "Room for families. 4x4 versions available for highland access.",
  },
];

export const rentalProviders = [
  {
    name: "Guide to Iceland",
    url: "https://guidetoiceland.is/iceland-car-rentals",
    description: "Compare all major Icelandic rental companies in one place",
  },
  {
    name: "Northbound",
    url: "https://www.northbound.is/",
    description: "Iceland-focused 4x4 and campervan specialist",
  },
  {
    name: "CampEasy",
    url: "https://www.campeasy.com/",
    description: "Popular campervan and motorhome rentals in Iceland",
  },
];

export function getRentalOptions(transportMode: TransportMode): RentalCarOption[] {
  return rentalCarOptions.filter((r) => r.type === transportMode);
}
