"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Itinerary } from "@/lib/types";
import { getItinerary } from "@/lib/storage";
import { getSampleItinerary } from "@/data/sample-itinerary";
import { TripSummary } from "@/components/itinerary/trip-summary";
import { RouteRationale } from "@/components/itinerary/route-rationale";
import { DayList } from "@/components/itinerary/day-list";
import { AdjustmentSuggestions } from "@/components/itinerary/adjustment-suggestions";
import { ArrowLeft, Bookmark } from "lucide-react";
import { saveItinerary } from "@/lib/storage";

export default function ItineraryPage() {
  const params = useParams();
  const id = params.id as string;
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id === "sample") {
      setItinerary(getSampleItinerary());
    } else {
      const saved = getItinerary(id);
      setItinerary(saved ?? null);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="text-muted-foreground">Loading itinerary...</p>
      </div>
    );
  }

  if (!itinerary) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h1 className="text-2xl font-bold">Itinerary not found</h1>
        <p className="mt-2 text-muted-foreground">
          This itinerary doesn&apos;t exist or has been deleted.
        </p>
        <Link
          href="/plan"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Create a new trip
        </Link>
      </div>
    );
  }

  function handleSave() {
    if (itinerary) {
      saveItinerary(itinerary);
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/plan"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          New trip
        </Link>
        {id !== "sample" && (
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Bookmark className="h-4 w-4" />
            Save
          </button>
        )}
      </div>

      <div className="space-y-6">
        <TripSummary itinerary={itinerary} />
        <RouteRationale rationale={itinerary.rationale} />
        <DayList days={itinerary.days} />
        <AdjustmentSuggestions suggestions={itinerary.adjustmentSuggestions} />
      </div>
    </div>
  );
}
