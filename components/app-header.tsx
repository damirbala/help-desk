"use client"

import { useState } from "react"
import { Plus, Search, HelpCircle, Bell, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { NewTicketDialog } from "@/components/new-ticket-dialog"

export function AppHeader() {
  const [isNewTicketDialogOpen, setIsNewTicketDialogOpen] = useState(false)

  return (
    <>
      {/* Updated Header Structure - User to verify against assets/desktop/app_header/header.png */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between h-16">
        {/* Left Section: Menu and "Новая заявка" Button */}
        <div className="flex items-center space-x-3">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <div className="flex flex-col gap-1">
              <div className="w-5 h-0.5 bg-gray-700"></div>
              <div className="w-5 h-0.5 bg-gray-700"></div>
              <div className="w-5 h-0.5 bg-gray-700"></div>
            </div>
          </button>
          <Button
            variant="default"
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center"
            onClick={() => setIsNewTicketDialogOpen(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            Новая заявка
          </Button>
        </div>

        {/* Center Section: Search Input */}
        <div className="flex-1 flex justify-center px-4 lg:px-8"> {/* Added lg:px-8 for more space on larger screens */}
          <div className="relative w-full max-w-xl"> {/* max-w-xl or similar for ~half width */}
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              className="pl-10 w-full h-9 bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md"
              placeholder="Поиск..."
            />
          </div>
        </div>

        {/* Right Section: Icons and User Profile */}
        <div className="flex items-center space-x-3"> {/* Reduced space-x-4 to space-x-3 or 2 if needed */}
          <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-100 rounded-md">
            <HelpCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-100 rounded-md">
            <Bell className="h-5 w-5" />
            {/* Optional: Add a notification badge here */}
          </Button>
          
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" alt="User avatar" />
              <AvatarFallback>ИС</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium text-gray-700 hidden md:inline">Ивановский С. Ф.</span>
          </div>
          <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-100 rounded-md">
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <NewTicketDialog isOpen={isNewTicketDialogOpen} onClose={() => setIsNewTicketDialogOpen(false)} />
    </>
  )
}
