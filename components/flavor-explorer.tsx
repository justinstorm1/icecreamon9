"use client"

import { SearchIcon, XIcon } from "lucide-react"
import { useDeferredValue, useMemo, useState } from "react"

import {
  categories,
  flavorCounts,
  flavors,
  flavorSwatch,
  type FlavorCategory,
} from "@/lib/flavors"
import { cn } from "@/lib/utils"

type Filter = FlavorCategory | "all"

const badge: Record<FlavorCategory, { short: string; className: string }> = {
  "ice-cream": {
    short: "Ice cream",
    className: "bg-accent text-accent-foreground",
  },
  "sugar-free": {
    short: "Sugar free",
    className: "bg-sun/70 text-sun-foreground",
  },
  "italian-ice": {
    short: "Italian ice",
    className: "bg-awning-green/15 text-foreground",
  },
}

// One row per flavor name, tagged with every category it's made in.
const merged = Array.from(
  flavors.reduce((map, f) => {
    map.set(f.name, [...(map.get(f.name) ?? []), f.category])
    return map
  }, new Map<string, FlavorCategory[]>())
).map(([name, cats]) => ({ name, cats }))

const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "")

export function FlavorExplorer() {
  const [filter, setFilter] = useState<Filter>("all")
  const [query, setQuery] = useState("")
  const deferredQuery = useDeferredValue(query)

  const results = useMemo(() => {
    const q = normalize(deferredQuery)
    return merged.filter(
      (f) =>
        (filter === "all" || f.cats.includes(filter)) &&
        normalize(f.name).includes(q)
    )
  }, [filter, deferredQuery])

  const groups = useMemo(() => {
    const byLetter = new Map<string, typeof results>()
    for (const f of results) {
      const letter = f.name[0].toUpperCase()
      byLetter.set(letter, [...(byLetter.get(letter) ?? []), f])
    }
    return Array.from(byLetter)
  }, [results])

  const tabs: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: "All", count: merged.length },
    ...categories.map((c) => ({
      id: c.id,
      label: c.label,
      count: flavorCounts[c.id],
    })),
  ]

  return (
    <div>
      <div className="sticky top-16 z-30 -mx-4 border-b bg-background/90 px-4 py-4 backdrop-blur-md sm:-mx-6 sm:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <label className="relative block md:w-80">
            <span className="sr-only">Search flavors</span>
            <SearchIcon className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search flavors, like “peanut butter”"
              className="h-11 w-full rounded-full border bg-card pr-10 pl-10 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40 [&::-webkit-search-cancel-button]:hidden"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute top-1/2 right-3 grid size-6 -translate-y-1/2 place-items-center rounded-full text-muted-foreground hover:bg-muted"
              >
                <XIcon className="size-4" />
              </button>
            )}
          </label>

          <div
            role="radiogroup"
            aria-label="Filter by type"
            className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 md:pb-0"
          >
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="radio"
                aria-checked={filter === t.id}
                onClick={() => setFilter(t.id)}
                className={cn(
                  "inline-flex h-10 shrink-0 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors",
                  filter === t.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "bg-card hover:bg-muted"
                )}
              >
                {t.label}
                <span
                  className={cn(
                    "rounded-full px-1.5 text-xs tabular-nums",
                    filter === t.id
                      ? "bg-white/20"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {t.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
        {results.length === 0
          ? "No flavors match that search."
          : `Showing ${results.length} flavor${results.length === 1 ? "" : "s"}`}
        {filter !== "all" && (
          <> · {categories.find((c) => c.id === filter)?.blurb}</>
        )}
      </p>

      {results.length === 0 ? (
        <div className="mt-6 rounded-[3rem] border border-dashed p-10 text-center">
          <p className="font-display text-xl font-semibold">
            Don&apos;t see your favorite?
          </p>
          <p className="mt-2 text-muted-foreground">
            We make far more than fits on the board. Give us a call and ask!
          </p>
        </div>
      ) : (
        <div className="mt-6 space-y-8">
          {groups.map(([letter, items]) => (
            <section key={letter} aria-label={letter}>
              <h2 className="mb-3 font-display text-2xl font-semibold text-primary">
                {letter}
              </h2>
              <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((f) => (
                  <li
                    key={f.name}
                    className="flex items-center gap-3 rounded-3xl border bg-card px-3 py-2.5"
                  >
                    <span
                      aria-hidden="true"
                      className="size-8 shrink-0 rounded-full shadow-inner ring-1 ring-black/10"
                      style={{ background: flavorSwatch(f.name) }}
                    />
                    <span className="min-w-0 flex-1 font-medium">{f.name}</span>
                    <span className="flex shrink-0 flex-wrap justify-end gap-1">
                      {f.cats
                        .filter((c) => filter === "all" || c !== filter)
                        .filter((c) => c !== "ice-cream" || f.cats.length > 1)
                        .map((c) => (
                          <span
                            key={c}
                            className={cn(
                              "rounded-full px-2 py-0.5 text-[0.7rem] font-semibold",
                              badge[c].className
                            )}
                          >
                            {badge[c].short}
                          </span>
                        ))}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
