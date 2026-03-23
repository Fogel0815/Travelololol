import { DayPlan } from "@/lib/types";
import { Car, MapPin, Bed, Lightbulb, ExternalLink } from "lucide-react";

export function DayCard({ day }: { day: DayPlan }) {
  const dateFormatted = new Date(day.date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Day {day.dayNumber}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{dateFormatted}</p>
        </div>
        {day.drivingHours > 0 && (
          <div className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1">
            <Car className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-xs font-medium">
              {day.drivingHours.toFixed(1)}h · {day.distanceKm} km
            </span>
          </div>
        )}
      </div>

      {day.fromRegion !== day.toRegion && (
        <p className="mt-3 text-sm font-medium">
          {day.fromRegion} → {day.toRegion}
        </p>
      )}

      {day.stops.length > 0 && (
        <div className="mt-4 space-y-2">
          {day.stops.map((stop) => (
            <div key={stop.id} className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-medium">{stop.name}</p>
                <p className="text-xs text-muted-foreground">
                  {stop.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 flex items-start justify-between gap-3 rounded-lg bg-muted/50 p-3">
        <div className="flex items-start gap-3">
          <Bed className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
          <div>
            <p className="text-xs font-medium">Overnight: {day.overnightRegion}</p>
            <p className="text-xs text-muted-foreground">
              {day.accommodationSuggestion}
            </p>
          </div>
        </div>
        {day.accommodationBookingUrl && (
          <a
            href={day.accommodationBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1 rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-white transition-opacity hover:opacity-80"
          >
            Book
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>

      {day.practicalNotes && (
        <div className="mt-3 flex items-start gap-3">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
          <p className="text-xs text-muted-foreground">{day.practicalNotes}</p>
        </div>
      )}
    </div>
  );
}
