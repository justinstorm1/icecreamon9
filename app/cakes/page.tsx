import {
  CameraIcon,
  CheckIcon,
  LayersIcon,
  PhoneIcon,
  RulerIcon,
} from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

import cake from "@/public/images/cake.jpg"
import dippedCones from "@/public/images/dipped-cones.jpg"

export const metadata: Metadata = {
  title: "Ice Cream Cakes & Novelties",
  description:
    "Homemade ice cream cakes in any flavor, with edible photo toppers and personal to 9-inch sizes. Plus cake logs, ice cream sandwiches and more at Ice Cream on 9 in Howell, NJ.",
  alternates: { canonical: "/cakes" },
}

const options = [
  {
    icon: LayersIcon,
    title: "Add a cake layer",
    body: "Ask for a layer of devil's food or yellow cake inside.",
  },
  {
    icon: CameraIcon,
    title: "Edible photos",
    body: "Put a custom or personal photo right on top of your cake.",
  },
  {
    icon: RulerIcon,
    title: "Several sizes",
    body: 'Our new Personal size, or larger 7", 8" and 9" rounds.',
  },
]

const novelties = [
  { name: "Cake logs", detail: "Neapolitan, Spumoni, Tiramisu and Creamsicle" },
  { name: "Ice cream sandwiches", detail: "Made with any flavor" },
  { name: "Fudge brownie pie shells", detail: "A great treat" },
  {
    name: "Dipped cones",
    detail: "Rolled in sprinkles, cookie crumbs and nuts",
  },
]

export default function CakesPage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-12 pb-16 sm:px-6 md:pt-16 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Cakes & novelties
          </p>
          <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
            Homemade ice cream cakes, in{" "}
            <span className="text-primary">any</span> flavor
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Pick one of our traditional cakes, or create your own with any
            flavor from our big assortment. Every cake is made right here in the
            shop.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.phoneHref}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 rounded-full px-6 text-base"
              )}
            >
              <PhoneIcon />
              Call to order · {site.phone}
            </a>
            <Link
              href="/flavors"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 rounded-full px-6 text-base"
              )}
            >
              Pick your flavors
            </Link>
          </div>
        </div>

        <div className="relative mx-auto grid aspect-square w-full max-w-xs place-items-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-[repeating-conic-gradient(var(--awning-pink)_0_15deg,var(--awning-green)_15deg_30deg)] opacity-90"
          />
          <div className="absolute inset-4 rounded-full bg-background" />
          {/* Source photo is small, so show it near native size rather than stretched. */}
          <Image
            src={cake}
            alt="A homemade ice cream cake with whipped frosting, cookie crumbles and cherries"
            placeholder="blur"
            sizes="200px"
            className="relative w-[200px] rounded-3xl shadow-lg"
          />
        </div>
      </section>

      <section
        aria-label="Cake options"
        className="mx-auto max-w-6xl px-4 pb-20 sm:px-6"
      >
        <ul className="grid gap-4 md:grid-cols-3">
          {options.map(({ icon: Icon, title, body }) => (
            <li key={title} className="rounded-[3rem] border bg-card p-6">
              <span className="grid size-11 place-items-center rounded-2xl bg-sun text-sun-foreground">
                <Icon className="size-5" />
              </span>
              <h2 className="mt-4 font-display text-xl font-semibold">
                {title}
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="novelties-heading"
        className="bg-grape text-grape-foreground"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2">
          <Image
            src={dippedCones}
            alt="Chocolate-dipped cones rolled in colorful sprinkles and crushed cookies"
            placeholder="blur"
            sizes="(min-width: 768px) 520px, 100vw"
            className="aspect-[5/4] w-full rounded-[3rem] object-cover"
          />
          <div>
            <h2
              id="novelties-heading"
              className="font-display text-3xl font-semibold sm:text-4xl"
            >
              Novelties
            </h2>
            <p className="mt-3 text-grape-foreground/80">
              Grab-and-go treats from the freezer, made with any flavor, and
              more.
            </p>
            <ul className="mt-8 space-y-4">
              {novelties.map((n) => (
                <li key={n.name} className="flex gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-sun text-sun-foreground">
                    <CheckIcon className="size-3.5" />
                  </span>
                  <span>
                    <span className="font-semibold">{n.name}</span>
                    <span className="block text-sm text-grape-foreground/70">
                      {n.detail}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
