export type Interest =
  | "nature"
  | "culture"
  | "photography"
  | "hiking"
  | "hot-springs"
  | "wildlife"
  | "food"
  | "adventure";

export type Constraint =
  | "avoid-long-drives"
  | "iconic-sights"
  | "hidden-gems"
  | "weather-flexibility";

export type TravelerType = "solo" | "couple" | "family" | "friends";
export type TransportMode = "rental-car" | "campervan" | "bus";
export type Pace = "relaxed" | "balanced" | "active";
export type AccommodationType = "budget" | "mid-range" | "premium";

export interface TripInput {
  startDate: string;
  endDate: string;
  duration: number;
  travelers: number;
  travelerType: TravelerType;
  transportMode: TransportMode;
  pace: Pace;
  maxDrivingHours: number;
  interests: Interest[];
  accommodationType: AccommodationType;
  constraints: Constraint[];
}

export interface Region {
  id: string;
  name: string;
  description: string;
  lat: number;
  lng: number;
  seasonalNotes: Record<string, string>;
  accommodationOptions: AccommodationOption[];
}

export interface AccommodationOption {
  type: AccommodationType;
  name: string;
  priceRange: string;
  description: string;
}

export interface POI {
  id: string;
  name: string;
  description: string;
  regionId: string;
  type: string;
  interestTags: Interest[];
  estimatedDurationHours: number;
  seasonalAvailability: number[];
}

export interface DrivingSegment {
  fromRegionId: string;
  toRegionId: string;
  distanceKm: number;
  drivingHours: number;
  roadNotes?: string;
}

export interface RouteTemplate {
  id: string;
  name: string;
  description: string;
  minDays: number;
  maxDays: number;
  regionSequence: string[];
}

export interface DayPlan {
  dayNumber: number;
  date: string;
  fromRegion: string;
  toRegion: string;
  drivingHours: number;
  distanceKm: number;
  stops: POI[];
  overnightRegion: string;
  accommodationSuggestion: string;
  practicalNotes: string;
}

export interface Itinerary {
  id: string;
  input: TripInput;
  routeType: string;
  totalDrivingHours: number;
  totalDistanceKm: number;
  rationale: string;
  days: DayPlan[];
  adjustmentSuggestions: string[];
  createdAt: string;
}
