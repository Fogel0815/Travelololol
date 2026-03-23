import { Lightbulb } from "lucide-react";

export function AdjustmentSuggestions({
  suggestions,
}: {
  suggestions: string[];
}) {
  if (suggestions.length === 0) return null;

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Adjustment Ideas
      </h2>
      <ul className="mt-4 space-y-3">
        {suggestions.map((suggestion, i) => (
          <li key={i} className="flex gap-3">
            <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
            <p className="text-sm text-foreground">{suggestion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
