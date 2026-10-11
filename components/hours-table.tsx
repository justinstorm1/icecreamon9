"use client"

import { dayNames, formatHour, hours, site } from "@/lib/site"
import { useShopStatus } from "@/lib/use-shop-status"
import { cn } from "@/lib/utils"

// Show Monday first, which is how people read a week of hours.
const order = [1, 2, 3, 4, 5, 6, 0]

export function HoursTable({ className }: { className?: string }) {
  const status = useShopStatus()

  return (
    <table className={cn("w-full text-sm", className)}>
      <caption className="sr-only">Opening hours</caption>
      <tbody>
        {order.map((day) => {
          const h = hours[day]
          const isToday = status?.today === day
          return (
            <tr
              key={day}
              aria-current={isToday ? "date" : undefined}
              className={cn(
                "border-b border-current/10 last:border-0",
                isToday && "font-semibold"
              )}
            >
              <th scope="row" className="py-2.5 text-left font-[inherit]">
                {dayNames[day]}
                {isToday && (
                  <span className="ml-2 rounded-full bg-sun px-2 py-0.5 text-xs text-sun-foreground">
                    Today
                  </span>
                )}
              </th>
              <td className="py-2.5 text-right tabular-nums">
                {h ? (
                  `${formatHour(h.open)} – ${formatHour(h.close)}`
                ) : (
                  <a
                    href={site.phoneHref}
                    className="underline underline-offset-4"
                  >
                    Call ahead
                  </a>
                )}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
