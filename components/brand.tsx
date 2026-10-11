import Link from "next/link"

import { cn } from "@/lib/utils"

/** The US Route 9 shield from the storefront sign. */
export function RouteShield({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 44"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <path
        d="M4 3.5c3 1.4 6.2 1.4 9.4 0 2.3 1.2 4.6 1.2 6.6 0 2 1.2 4.3 1.2 6.6 0 3.2 1.4 6.4 1.4 9.4 0 1.6 3 2.5 6.4 2.5 10.2C38.5 27 30 35.6 20 41 10 35.6 1.5 27 1.5 13.7 1.5 9.9 2.4 6.5 4 3.5Z"
        fill="var(--sun)"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <text
        x="20"
        y="30"
        textAnchor="middle"
        fontSize="24"
        fontWeight="700"
        fill="currentColor"
        style={{ fontFamily: "var(--font-display)" }}
      >
        9
      </text>
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-2 rounded-lg font-display text-xl leading-none font-semibold tracking-tight",
        className
      )}
    >
      <RouteShield className="size-9 text-grape transition-transform group-hover:-rotate-6" />
      <span>
        Ice Cream <span className="text-awning-pink">on 9</span>
      </span>
    </Link>
  )
}
