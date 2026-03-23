import { DayPlan } from "@/lib/types";
import { DayCard } from "./day-card";

export function DayList({ days }: { days: DayPlan[] }) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold tracking-tight">
        Day-by-Day Itinerary
      </h2>
      <div className="space-y-4">
        {days.map((day) => (
          <DayCard key={day.dayNumber} day={day} />
        ))}
      </div>
    </div>
  );
}
