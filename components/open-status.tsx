"use client"

import { useShopStatus } from "@/lib/use-shop-status"
import { cn } from "@/lib/utils"

const dotColor = {
  open: "bg-awning-green",
  "closing-soon": "bg-sun",
  closed: "bg-awning-pink",
  call: "bg-sun",
} as const

export function OpenStatus({ className }: { className?: string }) {
  const status = useShopStatus()

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full text-sm font-medium",
        className
      )}
      aria-live="polite"
    >
      <span className="relative flex size-2.5">
        {status?.state === "open" && (
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-awning-green opacity-60 motion-reduce:hidden" />
        )}
        <span
          className={cn(
            "relative inline-flex size-2.5 rounded-full",
            status ? dotColor[status.state] : "bg-muted-foreground/40"
          )}
        />
      </span>
      <span className={cn(!status && "invisible")}>
        {status?.label ?? "Checking hours…"}
      </span>
    </span>
  )
}
