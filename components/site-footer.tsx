import { MapPinIcon, PhoneIcon } from "lucide-react"
import Link from "next/link"

import { RouteShield } from "@/components/brand"
import { FacebookIcon, InstagramIcon } from "@/components/social-icons"
import { maps, nav, site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <div className="awning" aria-hidden="true" />
      <div className="bg-grape text-grape-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3 font-display text-2xl font-semibold">
              <RouteShield className="size-10 text-grape" />
              Ice Cream on 9
            </div>
            <p className="mt-4 max-w-sm text-sm text-grape-foreground/75">
              Homemade ice cream, Italian ice, cakes and novelties. Family owned
              and operated on Route 9 in Howell since {site.since}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold">Find us</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={maps.directions}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-2 hover:underline"
                >
                  <MapPinIcon className="mt-0.5 size-4 shrink-0" />
                  <span>
                    {site.address.street} ({site.address.note})
                    <br />
                    {site.address.city}, {site.address.region}{" "}
                    {site.address.postalCode}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2 hover:underline"
                >
                  <PhoneIcon className="size-4" />
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold">Follow along</h2>
            <p className="mt-4 text-sm text-grape-foreground/75">
              New flavors, pictures and more.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Instagram ${site.instagram.handle}`}
                className="grid size-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href={site.facebook.url}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid size-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <FacebookIcon className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-grape-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p>
              © {new Date().getFullYear()} Ice Cream on 9. All rights reserved.
            </p>
            <nav aria-label="Footer" className="flex flex-wrap gap-x-4 gap-y-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-grape-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
