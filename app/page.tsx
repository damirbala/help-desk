import type { Metadata } from "next"
import { TicketsPage } from "@/components/tickets-page"

export const metadata: Metadata = {
  title: "Okdesk #1 Help Desk система",
  description: "Help desk system interface with Notion styling",
}

export default function Home() {
  return <TicketsPage />
}
