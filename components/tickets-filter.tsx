"use client"

import { useState } from "react"
import { ChevronDown, Plus, Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { FilterSettingsPanel } from "@/components/filter-settings-panel"

export function TicketsFilter() {
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false)

  return (
    <div>
      <div className="bg-[#F7F7F7] p-2 border-b border-[#EBEBEA] flex items-center gap-2 text-[#37352F]">
        <div
          className={`flex items-center gap-1 border border-[#EBEBEA] rounded px-2 py-1 text-sm hover:bg-white cursor-pointer ${
            isFilterPanelOpen ? "bg-white" : ""
          }`}
          onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
        >
          <Plus className="w-3 h-3 text-[#6B6B6B]" />
          Настройка фильтрации
        </div>
        <X className="w-4 h-4 text-[#6B6B6B]" />
        <Plus className="w-4 h-4 text-[#6B6B6B]" />

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 border border-[#EBEBEA] rounded px-2 py-1 text-sm min-w-[150px] hover:bg-white focus:outline-none focus:ring-1 focus:ring-[#2383E2] data-[state=open]:bg-white">
            <span>Все заявки</span>
            <ChevronDown className="w-4 h-4 ml-auto transition-transform duration-200 ease-in-out data-[state=open]:rotate-180" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="w-[200px] p-1 bg-white border border-[#EBEBEA] rounded shadow-sm"
          >
            <DropdownMenuItem className="px-2 py-1.5 text-sm text-[#37352F] hover:bg-[#F7F7F7] rounded cursor-pointer focus:bg-[#F7F7F7] focus:text-[#37352F]">
              Все заявки
            </DropdownMenuItem>
            <DropdownMenuItem className="px-2 py-1.5 text-sm text-[#37352F] hover:bg-[#F7F7F7] rounded cursor-pointer focus:bg-[#F7F7F7] focus:text-[#37352F]">
              Открытые заявки
            </DropdownMenuItem>
            <DropdownMenuItem className="px-2 py-1.5 text-sm text-[#37352F] hover:bg-[#F7F7F7] rounded cursor-pointer focus:bg-[#F7F7F7] focus:text-[#37352F]">
              Закрытые заявки
            </DropdownMenuItem>
            <DropdownMenuItem className="px-2 py-1.5 text-sm text-[#37352F] hover:bg-[#F7F7F7] rounded cursor-pointer focus:bg-[#F7F7F7] focus:text-[#37352F]">
              Выезд на объект
            </DropdownMenuItem>
            <DropdownMenuItem className="px-2 py-1.5 text-sm text-[#37352F] hover:bg-[#F7F7F7] rounded cursor-pointer focus:bg-[#F7F7F7] focus:text-[#37352F]">
              Мои заявки
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-2 text-[#6B6B6B]" />
          <Input
            className="pl-10 h-8 text-sm bg-white border-[#EBEBEA] rounded"
            placeholder="Поиск по номеру или теме"
          />
          <X className="w-4 h-4 absolute right-3 top-2 text-[#6B6B6B]" />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Tabs defaultValue="table">
            <TabsList className="h-8 bg-white p-0.5 rounded border border-[#EBEBEA]">
              <TabsTrigger
                value="table"
                className="text-xs px-2 py-1 h-7 data-[state=active]:bg-[#F7F7F7] data-[state=active]:shadow-none rounded"
              >
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 grid grid-cols-3 gap-0.5">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="bg-current rounded-sm w-1 h-1"></div>
                    ))}
                  </div>
                  Таблица
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="calendar"
                className="text-xs px-2 py-1 h-7 data-[state=active]:bg-[#F7F7F7] data-[state=active]:shadow-none rounded"
              >
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 border border-current rounded-sm flex flex-col items-center justify-center">
                    <div className="w-3 h-2 border-b border-current"></div>
                  </div>
                  Календарь
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="map"
                className="text-xs px-2 py-1 h-7 data-[state=active]:bg-[#F7F7F7] data-[state=active]:shadow-none rounded"
              >
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 border border-current rounded-sm flex items-center justify-center">
                    <div className="w-2 h-2 border-2 border-current rounded-full"></div>
                  </div>
                  Карта
                </div>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Expandable filter panel */}
      {isFilterPanelOpen && (
        <FilterSettingsPanel isOpen={isFilterPanelOpen} onClose={() => setIsFilterPanelOpen(false)} />
      )}
    </div>
  )
}
