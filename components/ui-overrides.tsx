import { Button as ShadcnButton } from "@/components/ui/button"
import { Input as ShadcnInput } from "@/components/ui/input"
import { Badge as ShadcnBadge } from "@/components/ui/badge"
import { TabsList as ShadcnTabsList, TabsTrigger as ShadcnTabsTrigger } from "@/components/ui/tabs"
import type React from "react"

// Steam-styled button
export function SteamButton(props: React.ComponentPropsWithoutRef<typeof ShadcnButton>) {
  return (
    <ShadcnButton
      {...props}
      className={`bg-gradient-to-r from-[#1a9fff] to-[#66c0f4] hover:from-[#66c0f4] hover:to-[#1a9fff] text-white border-none rounded shadow-md ${props.className}`}
    />
  )
}

// Steam-styled input
export function SteamInput(props: React.ComponentPropsWithoutRef<typeof ShadcnInput>) {
  return (
    <ShadcnInput
      {...props}
      className={`bg-[#2a3f5a] border-[#2a475e] text-gray-200 focus:border-[#66c0f4] focus:ring-[#66c0f4] rounded ${props.className}`}
    />
  )
}

// Steam-styled badge
export function SteamBadge(props: React.ComponentPropsWithoutRef<typeof ShadcnBadge>) {
  return (
    <ShadcnBadge
      {...props}
      className={`bg-gradient-to-r from-[#1a9fff] to-[#66c0f4] text-white font-normal rounded ${props.className}`}
    />
  )
}

// Steam-styled tabs
export function SteamTabsList(props: React.ComponentPropsWithoutRef<typeof ShadcnTabsList>) {
  return <ShadcnTabsList {...props} className={`bg-[#2a3f5a] border border-[#2a475e] rounded ${props.className}`} />
}

export function SteamTabsTrigger(props: React.ComponentPropsWithoutRef<typeof ShadcnTabsTrigger>) {
  return (
    <ShadcnTabsTrigger
      {...props}
      className={`data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1a9fff] data-[state=active]:to-[#66c0f4] data-[state=active]:text-white rounded ${props.className}`}
    />
  )
}
