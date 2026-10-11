import Link from "next/link"

import { RouteShield } from "@/components/brand"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <RouteShield className="size-20 text-grape" />
      <h1 className="mt-6 font-display text-4xl font-semibold">Wrong exit!</h1>
      <p className="mt-3 text-muted-foreground">
        We couldn&apos;t find that page. It may have melted.
      </p>
      <Link
        href="/"
        className={cn(
          buttonVariants({ size: "lg" }),
          "mt-8 h-11 rounded-full px-6"
        )}
      >
        Back to the shop
      </Link>
    </div>
  )
}
