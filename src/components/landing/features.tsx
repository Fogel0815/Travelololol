import { Calendar, Users, Compass, Bed, ThermometerSun, Gauge } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Pick your dates",
    description: "Choose when you're traveling and we'll account for daylight hours, weather, and seasonal road conditions.",
  },
  {
    icon: Users,
    title: "Tell us who's going",
    description: "Solo traveler, couple, family, or friends — your group shapes the pace and stop recommendations.",
  },
  {
    icon: Gauge,
    title: "Set your pace",
    description: "Relaxed with long stops, balanced exploration, or active adventure — your call.",
  },
  {
    icon: Compass,
    title: "Share your interests",
    description: "Nature, photography, hiking, hot springs, wildlife, food — we'll prioritize what matters to you.",
  },
  {
    icon: Bed,
    title: "Choose your style",
    description: "Budget hostels, cozy guesthouses, or premium hotels — matched to real options in each area.",
  },
  {
    icon: ThermometerSun,
    title: "Seasonal awareness",
    description: "April shoulder season? We know which roads are open, what to expect, and how to plan around it.",
  },
];

export function Features() {
  return (
    <section className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          How It Works
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
          Your trip, your way
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                <feature.icon className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
