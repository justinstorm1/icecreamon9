export const site = {
  name: "Ice Cream on 9",
  url: "https://icecreamon9.com",
  description:
    "Family-owned ice cream shop on Route 9 in Howell, NJ since 1999. 148 homemade flavors, including sugar-free, vegan and Italian ice, plus soft serve, ice cream cakes and novelties.",
  since: 1999,
  phone: "(732) 780-2020",
  phoneHref: "tel:+17327802020",
  address: {
    street: "2300 US-9",
    city: "Howell",
    region: "NJ",
    postalCode: "07731",
    note: "Route 9 South",
  },
  instagram: {
    handle: "@icecreamon_9",
    url: "https://www.instagram.com/icecreamon_9/",
  },
  facebook: {
    name: "Ice Cream on 9",
    // TODO: swap in the page's direct URL.
    url: "https://www.facebook.com/search/top?q=Ice%20Cream%20on%209%20Howell",
  },
  stats: {
    homemadeFlavors: 148,
    softServeFlavors: 8,
  },
} as const

const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`

export const maps = {
  fullAddress,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`Ice Cream on 9, ${fullAddress}`)}`,
  embed: `https://www.google.com/maps?q=${encodeURIComponent(`Ice Cream on 9, ${fullAddress}`)}&z=16&output=embed`,
}

export const nav = [
  { href: "/flavors", label: "Flavors" },
  { href: "/cakes", label: "Cakes & Novelties" },
  { href: "/#about", label: "About" },
  { href: "/#visit", label: "Visit" },
] as const

/** Opening hours in 24h local (America/New_York) time, indexed Sunday = 0. `null` = call ahead. */
export const hours: ({ open: number; close: number } | null)[] = [
  null, // Sunday: not listed on the old site, so we ask people to call.
  { open: 11, close: 21 },
  { open: 11, close: 21 },
  { open: 11, close: 21 },
  { open: 11, close: 21 },
  { open: 11, close: 22 },
  { open: 11, close: 22 },
]

export const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const

export function formatHour(h: number) {
  const suffix = h >= 12 ? "pm" : "am"
  const hour = h % 12 === 0 ? 12 : h % 12
  return `${hour}${suffix}`
}
