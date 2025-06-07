import { TicketsContent } from "@/components/tickets-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Заявки | Okdesk Help Desk система",
  description: "Список заявок в системе Okdesk",
}

export default function TicketsListPage() {
  // AppHeader and Sidebar are now handled by app/layout.tsx
  // TicketsContent is already structured to fill the available space
  return <TicketsContent />
}
