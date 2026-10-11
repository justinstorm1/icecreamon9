"use client"

import { useSyncExternalStore } from "react"

import { formatHour, hours } from "@/lib/site"

export type ShopStatus = {
  today: number
  state: "open" | "closing-soon" | "closed" | "call"
  label: string
}

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 30_000)
  return () => clearInterval(id)
}

// Snapshot is the current minute, so it only changes once per minute.
const getMinute = () => Math.floor(Date.now() / 60_000)
const getServerMinute = () => null

/** Live open/closed status in shop-local time. `null` during SSR. */
export function useShopStatus(): ShopStatus | null {
  const minute = useSyncExternalStore(subscribe, getMinute, getServerMinute)
  return minute === null ? null : shopStatus(new Date(minute * 60_000))
}

function nowInHowell(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(date)
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ""
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(
    get("weekday")
  )
  return { day, time: Number(get("hour")) + Number(get("minute")) / 60 }
}

export function shopStatus(date: Date): ShopStatus {
  const { day, time } = nowInHowell(date)
  const today = hours[day]

  if (!today) {
    return { today: day, state: "call", label: "Call for today's hours" }
  }

  if (time >= today.open && time < today.close) {
    const closingSoon = today.close - time <= 1
    return {
      today: day,
      state: closingSoon ? "closing-soon" : "open",
      label: `${closingSoon ? "Closing soon" : "Open now"} · until ${formatHour(today.close)}`,
    }
  }

  if (time < today.open) {
    return {
      today: day,
      state: "closed",
      label: `Closed · opens ${formatHour(today.open)}`,
    }
  }

  const tomorrow = hours[(day + 1) % 7]
  return {
    today: day,
    state: "closed",
    label: tomorrow
      ? `Closed · opens ${formatHour(tomorrow.open)} tomorrow`
      : "Closed · call for tomorrow's hours",
  }
}
