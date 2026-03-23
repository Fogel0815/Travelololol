import { Itinerary } from "@/lib/types";
import { getRentalOptions, rentalProviders } from "@/data/rental-cars";
import { Car, Bed, ExternalLink, Wallet } from "lucide-react";

export function PricingSummary({ itinerary }: { itinerary: Itinerary }) {
  const { input, days } = itinerary;
  const rentalOptions = getRentalOptions(input.transportMode);

  // Parse accommodation price range from days (use first day as representative)
  const samplePriceRange = days[0]?.accommodationPriceRange;
  const accomEstimate = parsePriceRange(samplePriceRange);
  const nights = Math.max(input.duration - 1, 1);

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold tracking-tight">
        <Wallet className="h-5 w-5 text-accent" />
        Estimated Pricing
      </h2>

      {/* Accommodation estimate */}
      <div className="mb-6">
        <div className="mb-3 flex items-center gap-2">
          <Bed className="h-4 w-4 text-muted-foreground" />
          <h3 className="text-sm font-semibold">
            Accommodation ({input.accommodationType})
          </h3>
        </div>
        {accomEstimate && (
          <div className="ml-6 rounded-lg bg-muted/50 p-3">
            <div className="flex items-baseline justify-between">
              <p className="text-sm text-muted-foreground">
                {samplePriceRange} x {nights} night{nights > 1 ? "s" : ""}
              </p>
              <p className="text-sm font-semibold">
                €{accomEstimate.low * nights}–{accomEstimate.high * nights}{" "}
                total
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Rental car / campervan options */}
      <div className="mb-6">
        <div className="mb-3 flex items-center gap-2">
          <Car className="h-4 w-4 text-muted-foreground" />
          <h3 className="text-sm font-semibold">
            {input.transportMode === "campervan" ? "Campervan" : "Rental Car"}{" "}
            Options
          </h3>
        </div>
        <div className="ml-6 space-y-2">
          {rentalOptions.map((option) => {
            const carPrice = parsePriceRange(option.pricePerDay);
            return (
              <div
                key={option.category}
                className="rounded-lg bg-muted/50 p-3"
              >
                <div className="flex items-baseline justify-between">
                  <div>
                    <p className="text-sm font-medium">{option.category}</p>
                    <p className="text-xs text-muted-foreground">
                      {option.example}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">
                      {option.pricePerDay}
                    </p>
                    {carPrice && (
                      <p className="text-xs text-muted-foreground">
                        ~€{carPrice.low * input.duration}–
                        {carPrice.high * input.duration} total
                      </p>
                    )}
                  </div>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {option.notes}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Book rental links */}
      <div>
        <h3 className="mb-3 text-sm font-semibold">
          Compare &amp; Book Rentals
        </h3>
        <div className="grid gap-2 sm:grid-cols-3">
          {rentalProviders.map((provider) => (
            <a
              key={provider.name}
              href={provider.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-muted"
            >
              <div>
                <p className="text-sm font-medium">{provider.name}</p>
                <p className="text-xs text-muted-foreground">
                  {provider.description}
                </p>
              </div>
              <ExternalLink className="ml-2 h-4 w-4 shrink-0 text-muted-foreground" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function parsePriceRange(
  range?: string
): { low: number; high: number } | null {
  if (!range) return null;
  const matches = range.match(/(\d+)[^\d]+(\d+)/);
  if (!matches) return null;
  return { low: parseInt(matches[1], 10), high: parseInt(matches[2], 10) };
}
