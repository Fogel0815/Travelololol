import { Itinerary } from "./types";

const STORAGE_KEY = "iceland-planner-itineraries";

export function saveItinerary(itinerary: Itinerary): void {
  const existing = getItineraries();
  const updated = [itinerary, ...existing.filter((i) => i.id !== itinerary.id)];
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
}

export function getItineraries(): Itinerary[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function getItinerary(id: string): Itinerary | undefined {
  return getItineraries().find((i) => i.id === id);
}

export function deleteItinerary(id: string): void {
  const updated = getItineraries().filter((i) => i.id !== id);
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
}

export function generateId(): string {
  return `trip-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
