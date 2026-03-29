"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Itinerary } from "@/lib/types";
import { getItineraries, deleteItinerary } from "@/lib/storage";
import { Calendar, Car, MapPin, Trash2, ArrowRight } from "lucide-react";

export default function SavedPage() {
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setItineraries(getItineraries());
    setLoaded(true);
  }, []);

  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  function handleDelete(id: string) {
    if (confirmDeleteId === id) {
      deleteItinerary(id);
      setItineraries(getItineraries());
      setConfirmDeleteId(null);
    } else {
      setConfirmDeleteId(id);
    }
  }

  if (!loaded) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Your Trips
        </p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          Saved Itineraries
        </h1>
      </div>

      {itineraries.length === 0 ? (
        <div className="rounded-xl border border-border bg-card p-12 text-center">
          <p className="text-muted-foreground">No saved itineraries yet.</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/plan"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Plan a Trip
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/itinerary/sample"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              View sample itinerary
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {itineraries.map((itinerary) => (
            <div
              key={itinerary.id}
              className="flex items-start justify-between rounded-xl border border-border bg-card p-6 transition-colors hover:bg-muted/30"
            >
              <Link href={`/itinerary/${itinerary.id}`} className="flex-1">
                <h3 className="font-semibold">{itinerary.routeType}</h3>
                <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(itinerary.input.startDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    {" – "}
                    {new Date(itinerary.input.endDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Car className="h-3.5 w-3.5" />
                    ~{Math.round(itinerary.totalDrivingHours)}h driving
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {itinerary.input.duration} days
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {itinerary.input.interests.slice(0, 4).map((interest) => (
                    <span
                      key={interest}
                      className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </Link>
              <div className="ml-4 flex items-center gap-1">
                {confirmDeleteId === itinerary.id ? (
                  <>
                    <button
                      onClick={() => handleDelete(itinerary.id)}
                      className="rounded-lg bg-red-500 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-red-600"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => setConfirmDeleteId(null)}
                      className="rounded-lg px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => handleDelete(itinerary.id)}
                    className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-red-50 hover:text-red-500"
                    title="Delete itinerary"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
