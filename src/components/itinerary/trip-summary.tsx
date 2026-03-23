import { Itinerary } from "@/lib/types";
import { Calendar, Car, MapPin, Users, Clock } from "lucide-react";

export function TripSummary({ itinerary }: { itinerary: Itinerary }) {
  const { input, routeType, totalDrivingHours, totalDistanceKm } = itinerary;

  return (
    <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Your Itinerary
        </p>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {routeType}
        </h1>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center gap-3">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <div>
            <p className="text-xs text-muted-foreground">Dates</p>
            <p className="text-sm font-medium">
              {formatDate(input.startDate)} – {formatDate(input.endDate)}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <div>
            <p className="text-xs text-muted-foreground">Duration</p>
            <p className="text-sm font-medium">{input.duration} days</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Car className="h-4 w-4 text-muted-foreground" />
          <div>
            <p className="text-xs text-muted-foreground">Total Driving</p>
            <p className="text-sm font-medium">
              ~{Math.round(totalDrivingHours)}h / {Math.round(totalDistanceKm)} km
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Users className="h-4 w-4 text-muted-foreground" />
          <div>
            <p className="text-xs text-muted-foreground">Travelers</p>
            <p className="text-sm font-medium">
              {input.travelers} ({input.travelerType})
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
          {input.pace} pace
        </span>
        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
          {input.transportMode}
        </span>
        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
          {input.accommodationType}
        </span>
        {input.interests.map((interest) => (
          <span
            key={interest}
            className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-accent"
          >
            {interest}
          </span>
        ))}
      </div>
    </div>
  );
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
