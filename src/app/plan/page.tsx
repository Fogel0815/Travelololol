import { TripForm } from "@/components/plan/trip-form";

export default function PlanPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Trip Builder
        </p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          Plan your Iceland road trip
        </h1>
        <p className="mt-2 text-muted-foreground">
          Fill in your preferences and we&apos;ll generate a realistic day-by-day
          itinerary tailored to your trip.
        </p>
      </div>
      <TripForm />
    </div>
  );
}
