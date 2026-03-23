export function RouteRationale({ rationale }: { rationale: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Why This Route
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-foreground">
        {rationale}
      </p>
    </div>
  );
}
