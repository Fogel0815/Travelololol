import Link from "next/link";
import { ArrowRight, Mountain, Clock, Route } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 pb-20 pt-24 sm:pt-32">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Iceland Road Trip Planner
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Plan your Iceland
            <br />
            <span className="text-muted-foreground">adventure, day by day</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Generate a realistic, personalized road trip itinerary for Iceland.
            Smart routing based on your pace, interests, and travel style —
            with honest driving times and curated stops.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/plan"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-foreground px-8 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Start Planning
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/itinerary/sample"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border px-8 text-sm font-medium transition-colors hover:bg-muted"
            >
              View Sample Itinerary
            </Link>
          </div>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6">
            <Mountain className="h-5 w-5 text-accent" />
            <h3 className="mt-3 font-semibold">Curated Stops</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Handpicked waterfalls, glaciers, hot springs, and hidden gems across every region of Iceland.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <Clock className="h-5 w-5 text-accent" />
            <h3 className="mt-3 font-semibold">Realistic Timing</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Honest driving times and pacing that respects your daily tolerance — no 10-hour driving days unless you want them.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <Route className="h-5 w-5 text-accent" />
            <h3 className="mt-3 font-semibold">Smart Routing</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Routes that match your trip length — from Golden Circle weekends to full Ring Road adventures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
