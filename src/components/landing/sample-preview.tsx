import Link from "next/link";
import { ArrowRight, Car, Calendar, MapPin } from "lucide-react";

export function SamplePreview() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Sample Itinerary
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
          14-Day Ring Road Adventure
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          A balanced full Ring Road itinerary for a couple in April — mid-range
          guesthouses, nature focus, realistic driving days.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
            <Calendar className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Dates</p>
              <p className="font-medium">Apr 1 – 14, 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
            <Car className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Total Driving</p>
              <p className="font-medium">~28 hours</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Route</p>
              <p className="font-medium">Full Ring Road + Snæfellsnes</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/itinerary/sample"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            View the full day-by-day itinerary
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
