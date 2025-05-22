"use client"

import { useState } from "react"
import { Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { NewTicketDialog } from "@/components/new-ticket-dialog"

export function AppHeader() {
  const [isNewTicketDialogOpen, setIsNewTicketDialogOpen] = useState(false)

  return (
    <>
      <header className="bg-white border-b border-[#EBEBEA] p-2 flex items-center">
        <button className="p-2 text-[#37352F] hover:bg-[#F7F7F7] rounded">
          <div className="flex flex-col gap-1">
            <div className="w-5 h-0.5 bg-[#37352F]"></div>
            <div className="w-5 h-0.5 bg-[#37352F]"></div>
            <div className="w-5 h-0.5 bg-[#37352F]"></div>
          </div>
        </button>

        <Button
          className="ml-4 bg-[#2383E2] hover:bg-[#1B76D4] text-white flex items-center gap-1 rounded"
          onClick={() => setIsNewTicketDialogOpen(true)}
        >
          <Plus className="w-4 h-4" />
          Новая заявка
        </Button>

        <div className="ml-auto flex items-center gap-4">
          <div className="flex items-center gap-1 text-[#6B6B6B]">
            <div className="w-5 h-5 bg-[#F7F7F7] rounded flex items-center justify-center">
              <span className="text-xs">0</span>
            </div>
            События (0/0)
          </div>

          <div className="flex items-center gap-1 text-[#6B6B6B]">
            <div className="w-5 h-5 bg-[#F7F7F7] rounded flex items-center justify-center">
              <span className="text-xs">0</span>
            </div>
            Новости Okdesk
          </div>

          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-[#6B6B6B]" />
            <Input
              className="pl-10 w-64 h-9 bg-[#F7F7F7] border-[#EBEBEA] focus:border-[#2383E2] focus:ring-[#2383E2] rounded"
              placeholder="Поиск"
            />
          </div>

          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8 border border-[#EBEBEA]">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User avatar" />
              <AvatarFallback className="bg-[#2383E2] text-white">ИС</AvatarFallback>
            </Avatar>
            <span className="text-[#37352F] font-medium">Ивановский С. Ф.</span>
          </div>
        </div>
      </header>

      <NewTicketDialog isOpen={isNewTicketDialogOpen} onClose={() => setIsNewTicketDialogOpen(false)} />
    </>
  )
}
