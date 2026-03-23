import { AccommodationType } from "@/lib/types";
import { regions } from "./regions";

export function getAccommodationSuggestion(
  regionId: string,
  type: AccommodationType
): string {
  const region = regions.find((r) => r.id === regionId);
  if (!region) return "Accommodation available in the area";
  const option = region.accommodationOptions.find((a) => a.type === type);
  if (!option) return "Accommodation available in the area";
  return `${option.name} (${option.priceRange})`;
}
