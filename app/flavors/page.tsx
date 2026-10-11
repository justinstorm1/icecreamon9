import { InfoIcon, PhoneIcon } from "lucide-react"
import type { Metadata } from "next"

import { FlavorExplorer } from "@/components/flavor-explorer"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Flavors",
  description:
    "Search our full list of homemade ice cream, sugar-free and Italian ice flavors at Ice Cream on 9 in Howell, NJ. Quarts and half-gallons available to take home.",
  alternates: { canonical: "/flavors" },
}

export default function FlavorsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 pb-20 sm:px-6 md:pt-16">
      <header className="max-w-2xl">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">
          The flavor board
        </p>
        <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight sm:text-6xl">
          Flavors
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Here&apos;s the full lineup we make and carry. Quarts and half-gallons
          are also waiting in our freezer to take home.
        </p>
      </header>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <p className="flex flex-1 items-start gap-3 rounded-3xl bg-sun/40 p-4 text-sm text-foreground">
          <InfoIcon className="mt-0.5 size-4 shrink-0" />
          <span>
            <strong>Flavors change daily.</strong> Not every flavor is in the
            case every day. Call ahead if you&apos;re coming for a favorite.
          </span>
        </p>
        <p className="flex flex-1 items-start gap-3 rounded-3xl bg-accent p-4 text-sm text-accent-foreground">
          <PhoneIcon className="mt-0.5 size-4 shrink-0" />
          <span>
            Also ask about our{" "}
            <strong>{site.stats.softServeFlavors} soft serve flavors</strong>{" "}
            and <strong>vegan, non-dairy</strong> ice creams at{" "}
            <a
              href={site.phoneHref}
              className="font-semibold underline underline-offset-4"
            >
              {site.phone}
            </a>
            .
          </span>
        </p>
      </div>

      <div className="mt-8">
        <FlavorExplorer />
      </div>
    </div>
  )
}
