"use client";

import { useEffect, useState } from "react";
import { DayPlan } from "@/lib/types";
import { regions } from "@/data/regions";
import { Map as MapIcon } from "lucide-react";

interface RouteMapProps {
  days: DayPlan[];
}

export function RouteMap({ days }: RouteMapProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <MapPlaceholder />;
  }

  return <LeafletMap days={days} />;
}

function MapPlaceholder() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h2 className="mb-4 text-lg font-semibold tracking-tight flex items-center gap-2">
        <MapIcon className="h-5 w-5 text-accent" />
        Route Map
      </h2>
      <div className="flex h-[450px] items-center justify-center rounded-lg bg-muted">
        <p className="text-sm text-muted-foreground">Loading map...</p>
      </div>
    </div>
  );
}

function LeafletMap({ days }: { days: DayPlan[] }) {
  const [mapComponents, setMapComponents] = useState<{
    MapContainer: typeof import("react-leaflet").MapContainer;
    TileLayer: typeof import("react-leaflet").TileLayer;
    Polyline: typeof import("react-leaflet").Polyline;
    CircleMarker: typeof import("react-leaflet").CircleMarker;
    Tooltip: typeof import("react-leaflet").Tooltip;
    L: typeof import("leaflet");
  } | null>(null);

  useEffect(() => {
    Promise.all([import("react-leaflet"), import("leaflet")]).then(
      ([rl, L]) => {
        setMapComponents({
          MapContainer: rl.MapContainer,
          TileLayer: rl.TileLayer,
          Polyline: rl.Polyline,
          CircleMarker: rl.CircleMarker,
          Tooltip: rl.Tooltip,
          L: L,
        });
      }
    );
  }, []);

  if (!mapComponents) {
    return <MapPlaceholder />;
  }

  const { MapContainer, TileLayer, Polyline, CircleMarker, Tooltip } =
    mapComponents;

  // Build ordered list of unique region IDs from the itinerary
  const regionSequence: string[] = [];
  for (const day of days) {
    if (
      regionSequence.length === 0 ||
      regionSequence[regionSequence.length - 1] !== day.fromRegion
    ) {
      regionSequence.push(day.fromRegion);
    }
    if (regionSequence[regionSequence.length - 1] !== day.toRegion) {
      regionSequence.push(day.toRegion);
    }
  }

  // Get coordinates for the route line
  const routeCoords: [number, number][] = regionSequence
    .map((id) => {
      const r = regions.find((reg) => reg.id === id);
      return r ? ([r.lat, r.lng] as [number, number]) : null;
    })
    .filter((c): c is [number, number] => c !== null);

  // Collect unique destination regions with their day info
  const destinationMap = new Map<
    string,
    { region: (typeof regions)[0]; dayNumbers: number[] }
  >();
  for (const day of days) {
    const overnight = day.overnightRegion || day.toRegion;
    const r = regions.find((reg) => reg.id === overnight);
    if (r) {
      const existing = destinationMap.get(r.id);
      if (existing) {
        existing.dayNumbers.push(day.dayNumber);
      } else {
        destinationMap.set(r.id, { region: r, dayNumbers: [day.dayNumber] });
      }
    }
  }
  const destinations = Array.from(destinationMap.values());

  // Collect all POI stops with approximate coords (placed near their region)
  const poiStops: {
    name: string;
    type: string;
    regionId: string;
    lat: number;
    lng: number;
    dayNumber: number;
  }[] = [];
  for (const day of days) {
    for (const stop of day.stops) {
      const r = regions.find((reg) => reg.id === stop.regionId);
      if (r) {
        // Offset slightly so POIs don't overlap with destination markers
        const offset = poiStops.filter(
          (p) => p.regionId === stop.regionId
        ).length;
        poiStops.push({
          name: stop.name,
          type: stop.type,
          regionId: stop.regionId,
          lat: r.lat + 0.03 * Math.cos((offset * Math.PI) / 3),
          lng: r.lng + 0.06 * Math.sin((offset * Math.PI) / 3),
          dayNumber: day.dayNumber,
        });
      }
    }
  }

  // Center on Iceland
  const center: [number, number] =
    routeCoords.length > 0
      ? [
          routeCoords.reduce((s, c) => s + c[0], 0) / routeCoords.length,
          routeCoords.reduce((s, c) => s + c[1], 0) / routeCoords.length,
        ]
      : [64.9631, -19.0208];

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h2 className="mb-4 text-lg font-semibold tracking-tight flex items-center gap-2">
        <MapIcon className="h-5 w-5 text-accent" />
        Route Map
      </h2>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />
      <div className="overflow-hidden rounded-lg">
        <MapContainer
          center={center}
          zoom={6}
          style={{ height: "450px", width: "100%" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Route line */}
          {routeCoords.length > 1 && (
            <Polyline
              positions={routeCoords}
              pathOptions={{
                color: "#3b82f6",
                weight: 3,
                opacity: 0.8,
                dashArray: "8 4",
              }}
            />
          )}

          {/* Destination markers (larger, blue) */}
          {destinations.map(({ region, dayNumbers }) => (
            <CircleMarker
              key={`dest-${region.id}`}
              center={[region.lat, region.lng]}
              radius={8}
              pathOptions={{
                color: "#1d4ed8",
                fillColor: "#3b82f6",
                fillOpacity: 0.9,
                weight: 2,
              }}
            >
              <Tooltip direction="top" offset={[0, -10]}>
                <span className="font-medium">{region.name}</span>
                <br />
                <span className="text-xs">
                  {dayNumbers.length === 1
                    ? `Day ${dayNumbers[0]}`
                    : `Days ${dayNumbers.join(", ")}`}
                </span>
              </Tooltip>
            </CircleMarker>
          ))}

          {/* POI markers (smaller, orange) */}
          {poiStops.map((poi, i) => (
            <CircleMarker
              key={`poi-${poi.name}-${i}`}
              center={[poi.lat, poi.lng]}
              radius={5}
              pathOptions={{
                color: "#c2410c",
                fillColor: "#f97316",
                fillOpacity: 0.9,
                weight: 1.5,
              }}
            >
              <Tooltip direction="top" offset={[0, -8]}>
                <span className="font-medium">{poi.name}</span>
                <br />
                <span className="text-xs">Day {poi.dayNumber}</span>
              </Tooltip>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>

      {/* Legend */}
      <div className="mt-3 flex items-center gap-6 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-full bg-blue-500 border border-blue-700" />
          Destinations
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-full bg-orange-500 border border-orange-700" />
          Points of Interest
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-4 w-6 border-t-2 border-dashed border-blue-500" />
          Route
        </div>
      </div>
    </div>
  );
}
