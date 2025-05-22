"use client"

import { useState } from "react"
import Link from "next/link" // Added Link import
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Plus, X, Settings, Filter } from "lucide-react"
import { clients } from "@/data/clients"

export function ClientsContent() {
  const [activeTab, setActiveTab] = useState("companies")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Tabs */}
      <div className="p-4 bg-[#F7F7F7]">
        <Tabs defaultValue="companies" onValueChange={setActiveTab}>
          <TabsList className="bg-[#F7F7F7] p-0 h-auto">
            <TabsTrigger
              value="companies"
              className={`px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:border-2 data-[state=active]:border-[#E03E3E] ${
                activeTab === "companies" ? "text-[#37352F]" : "text-[#6B6B6B]"
              }`}
            >
              Компании (5)
            </TabsTrigger>
            <TabsTrigger
              value="contacts"
              className={`px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-none ${
                activeTab === "contacts" ? "text-[#37352F]" : "text-[#6B6B6B]"
              }`}
            >
              Контактные лица (5) <span className="ml-1 text-[#6B6B6B]">ⓘ</span>
            </TabsTrigger>
            <TabsTrigger
              value="individuals"
              className={`px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-none ${
                activeTab === "individuals" ? "text-[#37352F]" : "text-[#6B6B6B]"
              }`}
            >
              Физические лица (0) <span className="ml-1 text-[#6B6B6B]">ⓘ</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Filter and search */}
      <div className="p-4 bg-[#F0F0F0] flex items-center gap-2">
        <Button
          variant="outline"
          className="bg-white border-[#EBEBEA] text-[#6B6B6B] hover:bg-[#F7F7F7] flex items-center gap-1"
        >
          <Filter className="w-4 h-4" />
          Настройка фильтрации
        </Button>
        <X className="w-5 h-5 text-[#6B6B6B]" />
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-[#6B6B6B]" />
          <Input
            className="pl-10 bg-white border-[#EBEBEA] focus:border-[#2383E2] focus:ring-[#2383E2]"
            placeholder="Поиск"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="absolute right-3 top-2.5 text-[#6B6B6B]" onClick={() => setSearchQuery("")}>
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        <Button className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white">
          <Plus className="w-4 h-4 mr-1" />
          Добавить
        </Button>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-white border-b border-[#EBEBEA]">
              <th className="text-left p-4 font-medium text-[#6B6B6B] text-sm">Название:</th>
              <th className="text-left p-4 font-medium text-[#6B6B6B] text-sm">Телефон:</th>
              <th className="text-left p-4 font-medium text-[#6B6B6B] text-sm">Адрес:</th>
              <th className="p-4 w-10">
                <Settings className="w-5 h-5 text-[#6B6B6B]" />
              </th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id} className="border-b border-[#EBEBEA] hover:bg-[#F7F7F7]">
                <td className="p-4">
                  <div className="flex items-center">
                    {client.color && (
                      <div
                        className={`w-2 h-2 rounded-full mr-2 ${
                          client.color === "red"
                            ? "bg-[#E03E3E]"
                            : client.color === "green"
                              ? "bg-[#0F7B6C]"
                              : client.color === "yellow"
                                ? "bg-[#D9730D]"
                                : ""
                        }`}
                      ></div>
                    )}
                    <Link href={`/clients/${client.id}`} className="text-[#37352F] hover:underline">
                      {client.name}
                    </Link>
                  </div>
                </td>
                <td className="p-4 text-[#37352F]">{client.phone || ""}</td>
                <td className="p-4 text-[#37352F]">{client.address || ""}</td>
                <td className="p-4">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-[#6B6B6B] hover:bg-[#EBEBEA]">
                    <Search className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-white">
              <td colSpan={4} className="p-4 text-right text-[#6B6B6B]">
                Всего: {clients.length}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
