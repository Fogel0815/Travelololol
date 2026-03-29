"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  TripInput,
  Interest,
  Constraint,
  TravelerType,
  TransportMode,
  Pace,
  AccommodationType,
} from "@/lib/types";
import { generateItinerary } from "@/lib/generate-itinerary";
import { saveItinerary } from "@/lib/storage";
import { Calendar, Users, Car, Gauge, Mountain, Bed, Settings2, ArrowRight } from "lucide-react";

const INTERESTS: { value: Interest; label: string }[] = [
  { value: "nature", label: "Nature" },
  { value: "culture", label: "Culture" },
  { value: "photography", label: "Photography" },
  { value: "hiking", label: "Hiking" },
  { value: "hot-springs", label: "Hot Springs" },
  { value: "wildlife", label: "Wildlife" },
  { value: "food", label: "Food" },
  { value: "adventure", label: "Adventure" },
];

const CONSTRAINTS: { value: Constraint; label: string }[] = [
  { value: "avoid-long-drives", label: "Avoid long drives" },
  { value: "iconic-sights", label: "Include iconic sights" },
  { value: "hidden-gems", label: "Hidden gems" },
  { value: "weather-flexibility", label: "Weather flexibility" },
];

const TRAVELER_TYPES: { value: TravelerType; label: string }[] = [
  { value: "solo", label: "Solo" },
  { value: "couple", label: "Couple" },
  { value: "family", label: "Family" },
  { value: "friends", label: "Friends" },
];

const TRANSPORT_MODES: { value: TransportMode; label: string }[] = [
  { value: "rental-car", label: "Rental Car" },
  { value: "campervan", label: "Campervan" },
  { value: "bus", label: "Bus" },
];

const PACES: { value: Pace; label: string; desc: string }[] = [
  { value: "relaxed", label: "Relaxed", desc: "Fewer stops, more time at each" },
  { value: "balanced", label: "Balanced", desc: "Good mix of driving and exploring" },
  { value: "active", label: "Active", desc: "Pack in more sights per day" },
];

const ACCOMMODATION_TYPES: { value: AccommodationType; label: string; desc: string }[] = [
  { value: "budget", label: "Budget", desc: "Hostels & campgrounds" },
  { value: "mid-range", label: "Mid-range", desc: "Guesthouses & hotels" },
  { value: "premium", label: "Premium", desc: "Boutique & luxury" },
];

export function TripForm() {
  const router = useRouter();
  const [isGenerating, setIsGenerating] = useState(false);

  const [startDate, setStartDate] = useState("2026-04-01");
  const [endDate, setEndDate] = useState("2026-04-14");
  const [travelers, setTravelers] = useState(2);
  const [travelerType, setTravelerType] = useState<TravelerType>("couple");
  const [transportMode, setTransportMode] = useState<TransportMode>("rental-car");
  const [pace, setPace] = useState<Pace>("balanced");
  const [maxDrivingHours, setMaxDrivingHours] = useState(5);
  const [interests, setInterests] = useState<Interest[]>(["nature", "photography"]);
  const [accommodationType, setAccommodationType] = useState<AccommodationType>("mid-range");
  const [constraints, setConstraints] = useState<Constraint[]>(["iconic-sights"]);

  const rawDuration = Math.ceil(
    (new Date(endDate).getTime() - new Date(startDate).getTime()) /
      (1000 * 60 * 60 * 24)
  );
  const duration = Math.max(1, rawDuration);
  const dateError =
    rawDuration <= 0
      ? "End date must be after start date"
      : rawDuration > 30
        ? "Trip duration cannot exceed 30 days"
        : null;

  function handleStartDateChange(value: string) {
    setStartDate(value);
    if (new Date(value) >= new Date(endDate)) {
      const next = new Date(value);
      next.setDate(next.getDate() + 7);
      setEndDate(next.toISOString().split("T")[0]);
    }
  }

  function handleEndDateChange(value: string) {
    setEndDate(value);
  }

  function toggleInterest(interest: Interest) {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  }

  function toggleConstraint(constraint: Constraint) {
    setConstraints((prev) =>
      prev.includes(constraint)
        ? prev.filter((c) => c !== constraint)
        : [...prev, constraint]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isGenerating || dateError) return;
    setIsGenerating(true);

    // Use requestAnimationFrame to let the UI update before heavy computation
    requestAnimationFrame(() => {
      const input: TripInput = {
        startDate,
        endDate,
        duration,
        travelers,
        travelerType,
        transportMode,
        pace,
        maxDrivingHours,
        interests,
        accommodationType,
        constraints,
      };

      const itinerary = generateItinerary(input);
      saveItinerary(itinerary);
      router.push(`/itinerary/${itinerary.id}`);
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Dates */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="h-4 w-4 text-accent" />
          <h2 className="text-sm font-semibold uppercase tracking-widest">Dates</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => handleStartDateChange(e.target.value)}
              className="h-10 w-full rounded-lg border border-border bg-card px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-muted-foreground">End Date</label>
            <input
              type="date"
              value={endDate}
              min={startDate}
              onChange={(e) => handleEndDateChange(e.target.value)}
              className={`h-10 w-full rounded-lg border px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring ${dateError ? "border-red-400 bg-red-50" : "border-border bg-card"}`}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Duration</label>
            <div className={`flex h-10 items-center rounded-lg border px-3 text-sm font-medium ${dateError ? "border-red-400 bg-red-50 text-red-600" : "border-border bg-muted"}`}>
              {dateError ? dateError : `${duration} days`}
            </div>
          </div>
        </div>
      </section>

      {/* Travelers */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Users className="h-4 w-4 text-accent" />
          <h2 className="text-sm font-semibold uppercase tracking-widest">Travelers</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Number of Travelers</label>
            <input
              type="number"
              min={1}
              max={12}
              value={travelers}
              onChange={(e) => setTravelers(parseInt(e.target.value) || 1)}
              className="h-10 w-full rounded-lg border border-border bg-card px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Traveler Type</label>
            <div className="flex flex-wrap gap-2">
              {TRAVELER_TYPES.map((t) => (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => setTravelerType(t.value)}
                  className={`rounded-lg border px-3 py-2 text-sm transition-colors ${
                    travelerType === t.value
                      ? "border-accent bg-blue-50 text-accent font-medium"
                      : "border-border bg-card text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transport & Pace */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Car className="h-4 w-4 text-accent" />
          <h2 className="text-sm font-semibold uppercase tracking-widest">Transport & Pace</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Transport Mode</label>
            <div className="flex flex-wrap gap-2">
              {TRANSPORT_MODES.map((t) => (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => setTransportMode(t.value)}
                  className={`rounded-lg border px-3 py-2 text-sm transition-colors ${
                    transportMode === t.value
                      ? "border-accent bg-blue-50 text-accent font-medium"
                      : "border-border bg-card text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Pace</label>
            <div className="grid gap-2 sm:grid-cols-3">
              {PACES.map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => setPace(p.value)}
                  className={`rounded-lg border p-3 text-left transition-colors ${
                    pace === p.value
                      ? "border-accent bg-blue-50"
                      : "border-border bg-card hover:bg-muted"
                  }`}
                >
                  <p className={`text-sm font-medium ${pace === p.value ? "text-accent" : ""}`}>
                    {p.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{p.desc}</p>
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
              Max Daily Driving: {maxDrivingHours} hours
            </label>
            <input
              type="range"
              min={2}
              max={8}
              step={0.5}
              value={maxDrivingHours}
              onChange={(e) => setMaxDrivingHours(parseFloat(e.target.value))}
              className="w-full accent-[#2563eb]"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>2h</span>
              <span>8h</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interests */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Mountain className="h-4 w-4 text-accent" />
          <h2 className="text-sm font-semibold uppercase tracking-widest">Interests</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((i) => (
            <button
              key={i.value}
              type="button"
              onClick={() => toggleInterest(i.value)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                interests.includes(i.value)
                  ? "border-accent bg-blue-50 text-accent font-medium"
                  : "border-border bg-card text-muted-foreground hover:bg-muted"
              }`}
            >
              {i.label}
            </button>
          ))}
        </div>
      </section>

      {/* Accommodation */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Bed className="h-4 w-4 text-accent" />
          <h2 className="text-sm font-semibold uppercase tracking-widest">Accommodation</h2>
        </div>
        <div className="grid gap-2 sm:grid-cols-3">
          {ACCOMMODATION_TYPES.map((a) => (
            <button
              key={a.value}
              type="button"
              onClick={() => setAccommodationType(a.value)}
              className={`rounded-lg border p-3 text-left transition-colors ${
                accommodationType === a.value
                  ? "border-accent bg-blue-50"
                  : "border-border bg-card hover:bg-muted"
              }`}
            >
              <p className={`text-sm font-medium ${accommodationType === a.value ? "text-accent" : ""}`}>
                {a.label}
              </p>
              <p className="text-xs text-muted-foreground">{a.desc}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Constraints */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Settings2 className="h-4 w-4 text-accent" />
          <h2 className="text-sm font-semibold uppercase tracking-widest">Preferences</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {CONSTRAINTS.map((c) => (
            <button
              key={c.value}
              type="button"
              onClick={() => toggleConstraint(c.value)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                constraints.includes(c.value)
                  ? "border-accent bg-blue-50 text-accent font-medium"
                  : "border-border bg-card text-muted-foreground hover:bg-muted"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* Submit */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isGenerating || interests.length === 0 || !!dateError}
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-foreground px-8 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50 sm:w-auto"
        >
          {isGenerating ? (
            "Generating your itinerary..."
          ) : (
            <>
              Generate Itinerary
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
        {interests.length === 0 && (
          <p className="mt-2 text-xs text-red-500">Select at least one interest.</p>
        )}
      </div>
    </form>
  );
}
