import { AppHeader } from "@/components/app-header"
import { Sidebar } from "@/components/sidebar"
import { TicketsContent } from "@/components/tickets-content"

export function TicketsPage() {
  return (
    <div className="flex flex-1 flex-col h-screen bg-[#F8F8F8]">
      <AppHeader />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <TicketsContent />
      </div>
    </div>
  )
}
