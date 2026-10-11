import type { Metadata, Viewport } from "next"
import { Fredoka, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { hours, maps, site } from "@/lib/site"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-display" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Ice Cream on 9 · 148 Homemade Flavors in Howell, NJ",
    template: "%s · Ice Cream on 9",
  },
  description: site.description,
  keywords: [
    "ice cream Howell NJ",
    "homemade ice cream",
    "sugar free ice cream",
    "vegan ice cream",
    "Italian ice",
    "ice cream cakes",
    "Route 9",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a0b2e",
  colorScheme: "dark",
}

const dayCodes = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
const pad = (h: number) => `${String(h).padStart(2, "0")}:00`

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "IceCreamShop",
  name: site.name,
  url: site.url,
  image: `${site.url}/images/storefront-day.jpg`,
  telephone: "+1-732-780-2020",
  description: site.description,
  foundingDate: String(site.since),
  servesCuisine: ["Ice Cream", "Italian Ice", "Desserts"],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: "US",
  },
  hasMap: maps.directions,
  sameAs: [site.instagram.url],
  openingHours: hours.flatMap((h, day) =>
    h ? [`${dayCodes[day]} ${pad(h.open)}-${pad(h.close)}`] : []
  ),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "dark antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable,
        fredoka.variable
      )}
    >
      <body className="flex min-h-svh flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#main"
          className="sr-only z-50 rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
