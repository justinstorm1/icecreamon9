"use client"

import { MenuIcon, PhoneIcon, XIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

import { Logo } from "@/components/brand"
import { OpenStatus } from "@/components/open-status"
import { Button, buttonVariants } from "@/components/ui/button"
import { nav, site } from "@/lib/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  // Close the mobile menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname)
  if (pathname !== lastPath) {
    setLastPath(pathname)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <Logo />

        <nav
          aria-label="Main"
          className="ml-6 hidden items-center gap-1 lg:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground aria-[current=page]:bg-accent aria-[current=page]:text-accent-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <OpenStatus className="mr-2 hidden text-muted-foreground xl:inline-flex" />
          <a
            href={site.phoneHref}
            className={cn(
              buttonVariants({ size: "lg" }),
              "hidden rounded-full px-4 sm:inline-flex"
            )}
          >
            <PhoneIcon />
            {site.phone}
          </a>
          <Button
            variant="ghost"
            size="icon-lg"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <XIcon /> : <MenuIcon />}
          </Button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="animate-in border-t bg-background px-4 pt-2 pb-5 fade-in slide-in-from-top-2 lg:hidden"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b py-3 font-display text-lg font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <OpenStatus className="text-muted-foreground" />
            <a
              href={site.phoneHref}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 rounded-full text-base"
              )}
            >
              <PhoneIcon />
              Call {site.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
