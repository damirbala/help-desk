import { AppHeader } from "@/components/app-header"
import { Sidebar } from "@/components/sidebar"
import { ClientsContent } from "@/components/clients-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Клиенты | Okdesk Help Desk система",
  description: "Список клиентов в системе Okdesk",
}

export default function ClientsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col h-screen bg-[#FFFFFF]">
        <AppHeader />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <ClientsContent />
        </div>
      </div>
    </main>
  )
}
