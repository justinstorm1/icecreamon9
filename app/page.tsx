import {
  ArrowRightIcon,
  CakeSlice,
  CupSodaIcon,
  IceCreamBowlIcon,
  IceCreamConeIcon,
  LeafIcon,
  NavigationIcon,
  PhoneIcon,
  SnowflakeIcon,
  SparklesIcon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { HoursTable } from "@/components/hours-table"
import { OpenStatus } from "@/components/open-status"
import { buttonVariants } from "@/components/ui/button"
import { featuredFlavors, flavorSwatch } from "@/lib/flavors"
import { maps, site } from "@/lib/site"
import { cn } from "@/lib/utils"

import counter from "@/public/images/counter.jpg"
import dippedCones from "@/public/images/dipped-cones.jpg"
import interior from "@/public/images/interior-neon.jpg"
import neonSign from "@/public/images/neon-sign.jpg"
import storefront from "@/public/images/storefront-day.jpg"
import storefrontDusk from "@/public/images/storefront-dusk.jpg"

const menu = [
  {
    icon: IceCreamConeIcon,
    title: "Homemade hard ice cream",
    body: `Over ${site.stats.homemadeFlavors} flavors made on premises, from Vanilla to Twixxx Fixx.`,
  },
  {
    icon: CupSodaIcon,
    title: "Soft serve & shakes",
    body: `${site.stats.softServeFlavors} soft serve flavors, including fat-free and sugar-free, plus thick milkshakes.`,
  },
  {
    icon: SparklesIcon,
    title: "Sugar free",
    body: "A full line of sugar-free hard ice cream, soft serve and even toppings.",
  },
  {
    icon: LeafIcon,
    title: "Vegan & non-dairy",
    body: "Homemade non-dairy flavors, so everyone in the car gets a cone.",
  },
  {
    icon: SnowflakeIcon,
    title: "Italian ice",
    body: "Bright, refreshing ices from Blue Raspberry to Pink Grapefruit.",
  },
  {
    icon: CakeSlice,
    title: "Cakes & novelties",
    body: "Ice cream cakes in any flavor, cake logs, sandwiches and dipped cones.",
  },
]

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -right-40 size-[36rem] rounded-full bg-neon/20 blur-3xl"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-12 pb-16 sm:px-6 md:pt-20 lg:grid-cols-[1.05fr_1fr]">
          <div className="relative">
            <p className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Route 9 South · Howell, NJ · Since {site.since}
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              <span className="text-primary neon-text">
                {site.stats.homemadeFlavors}
              </span>{" "}
              homemade flavors. One happy stop.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-pretty text-muted-foreground">
              We make every scoop of ice cream, Italian ice, vegan and
              sugar-free flavor right here in the shop, plus cakes and novelties
              in any flavor you can dream up.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/flavors"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full px-6 text-base"
                )}
              >
                Browse the flavors
                <ArrowRightIcon data-icon="inline-end" />
              </Link>
              <a
                href={maps.directions}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-full px-6 text-base"
                )}
              >
                <NavigationIcon />
                Get directions
              </a>
            </div>
            <OpenStatus className="mt-6" />
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <Image
              src={storefront}
              alt="The Ice Cream on 9 storefront with its yellow sign and striped pink and green awning"
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 560px, 100vw"
              className="aspect-[4/3] rounded-[3rem] object-cover shadow-2xl ring-1 shadow-primary/20 ring-border"
            />
            <Image
              src={neonSign}
              alt="The neon ice cream cone sign out front"
              placeholder="blur"
              sizes="160px"
              className="absolute -bottom-8 -left-4 w-32 rotate-[-6deg] rounded-3xl border-4 border-background shadow-xl sm:-left-8 sm:w-40"
            />
          </div>
        </div>
      </section>

      {/* Stats on the yellow sign band */}
      <section aria-label="At a glance">
        <div className="awning" aria-hidden="true" />
        <div className="bg-sun text-sun-foreground">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 text-center sm:px-6 md:grid-cols-4">
            {[
              [String(site.stats.homemadeFlavors), "homemade flavors"],
              [String(site.stats.softServeFlavors), "soft serve flavors"],
              ["Sugar free", "& vegan options"],
              [String(site.since), "family owned since"],
            ].map(([value, label]) => (
              <div key={label} className="flex flex-col-reverse">
                <dt className="text-sm font-medium opacity-80">{label}</dt>
                <dd className="font-display text-4xl font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Flavor marquee */}
      <section aria-labelledby="board-heading" className="py-16">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-4 px-4 sm:px-6">
          <div>
            <h2
              id="board-heading"
              className="font-display text-3xl font-semibold sm:text-4xl"
            >
              Fresh off the flavor board
            </h2>
            <p className="mt-2 text-muted-foreground">
              A taste of the lineup. Flavors rotate, so the case changes daily.
            </p>
          </div>
          <Link
            href="/flavors"
            className={cn(
              buttonVariants({ variant: "link" }),
              "px-0 text-base"
            )}
          >
            See every flavor
            <ArrowRightIcon data-icon="inline-end" />
          </Link>
        </div>
        <div className="marquee relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <ul className="marquee-track flex w-max gap-3">
            {[...featuredFlavors, ...featuredFlavors].map((name, i) => (
              <li
                key={i}
                aria-hidden={i >= featuredFlavors.length || undefined}
                className="flex items-center gap-2 rounded-full border bg-card py-2 pr-4 pl-2 text-sm font-medium whitespace-nowrap shadow-sm"
              >
                <span
                  className="size-6 rounded-full ring-1 ring-black/10"
                  style={{ background: flavorSwatch(name) }}
                />
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What we serve */}
      <section
        aria-labelledby="menu-heading"
        className="mx-auto max-w-6xl px-4 pb-20 sm:px-6"
      >
        <h2
          id="menu-heading"
          className="font-display text-3xl font-semibold sm:text-4xl"
        >
          Something for everyone
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {menu.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="group rounded-[3rem] border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-accent text-accent-foreground transition-transform group-hover:-rotate-6">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold">
                {title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 bg-muted/60 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div className="grid grid-cols-5 gap-3">
            <Image
              src={counter}
              alt="Inside the shop: the dipping case, neon Ice Cream on 9 sign and flavor boards"
              placeholder="blur"
              sizes="(min-width: 1024px) 340px, 60vw"
              className="col-span-3 h-full rounded-[3rem] object-cover"
            />
            <div className="col-span-2 grid gap-3">
              <Image
                src={interior}
                alt="Blue neon sign reading Homemade Ice Cream"
                placeholder="blur"
                sizes="(min-width: 1024px) 220px, 40vw"
                className="aspect-square rounded-[3rem] object-cover"
              />
              <Image
                src={storefrontDusk}
                alt="The shop lit up at dusk"
                placeholder="blur"
                sizes="(min-width: 1024px) 220px, 40vw"
                className="aspect-square rounded-[3rem] object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">
              Our story
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-balance sm:text-4xl">
              Family owned, homemade, and on Route 9 since {site.since}
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                We&apos;re a family-owned and operated shop in Howell, NJ. We
                make all of our ice cream, Italian ice, vegan ice cream and
                sugar-free flavors on premises, along with our cakes and
                novelties.
              </p>
              <p>
                We believe everyone deserves a sweet treat they can enjoy.
                That&apos;s why we offer vegan and sugar-free choices in both
                our homemade hard ice cream and our soft serve, all crafted with
                care by an experienced team using quality ingredients and
                recipes our customers have loved for years.
              </p>
              <p className="font-display text-xl font-medium text-foreground">
                Stop in today and try the best ice cream anywhere!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cakes teaser */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="relative grid overflow-hidden rounded-[3rem] bg-grape text-grape-foreground md:grid-cols-2">
          <div className="p-8 sm:p-12">
            <p className="text-sm font-semibold tracking-wide text-sun uppercase">
              Cakes & novelties
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-balance sm:text-4xl">
              Your cake, in any flavor on the board
            </h2>
            <p className="mt-4 text-grape-foreground/80">
              Choose a classic or build your own from our whole lineup. Add a
              layer of devil&apos;s food or yellow cake, or put a photo right on
              top.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/cakes"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "h-12 rounded-full px-6 text-base"
                )}
              >
                Explore cakes
                <ArrowRightIcon data-icon="inline-end" />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex h-12 items-center gap-2 rounded-full px-4 font-medium underline-offset-4 hover:underline"
              >
                <PhoneIcon className="size-4" />
                Call to order
              </a>
            </div>
          </div>
          <Image
            src={dippedCones}
            alt="Chocolate-dipped cones rolled in sprinkles, crushed cookies and nuts"
            placeholder="blur"
            sizes="(min-width: 768px) 560px, 100vw"
            className="h-64 w-full object-cover md:h-full"
          />
        </div>
      </section>

      {/* Visit */}
      <section
        id="visit"
        aria-labelledby="visit-heading"
        className="scroll-mt-20 pb-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2
            id="visit-heading"
            className="font-display text-3xl font-semibold sm:text-4xl"
          >
            Come visit
          </h2>
          <p className="mt-2 text-muted-foreground">
            We&apos;re on Route 9 South in Howell. Look for the giant neon cone.
            Plenty of parking, ATM on site.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1.3fr]">
            <div className="rounded-[3rem] border bg-card p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <IceCreamBowlIcon className="size-5 text-primary" />
                <h3 className="font-display text-xl font-semibold">Hours</h3>
              </div>
              <OpenStatus className="mt-3" />
              <HoursTable className="mt-4" />

              <div className="mt-6 space-y-1 border-t pt-6">
                <p className="font-medium">
                  {site.address.street}, {site.address.city},{" "}
                  {site.address.region} {site.address.postalCode}
                </p>
                <a
                  href={site.phoneHref}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {site.phone}
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={maps.directions}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-11 rounded-full px-5"
                  )}
                >
                  <NavigationIcon />
                  Directions
                </a>
                <a
                  href={site.phoneHref}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-11 rounded-full px-5"
                  )}
                >
                  <PhoneIcon />
                  Call us
                </a>
              </div>
            </div>

            <div className="min-h-80 overflow-hidden rounded-[3rem] border bg-muted">
              <iframe
                title="Map to Ice Cream on 9"
                src={maps.embed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="size-full min-h-80 [filter:invert(0.9)_hue-rotate(180deg)]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
