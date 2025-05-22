import { AppHeader } from "@/components/app-header"
import { Sidebar } from "@/components/sidebar"
import { TicketsContent } from "@/components/tickets-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Заявки | Okdesk Help Desk система",
  description: "Список заявок в системе Okdesk",
}

export default function TicketsListPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col h-screen bg-[#F8F8F8]">
        <AppHeader />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <TicketsContent />
        </div>
      </div>
    </main>
  )
}
