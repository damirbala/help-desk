// components/clients-content.tsx
"use client"

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Search as SearchIcon, Settings, Plus, X, Filter as FilterIcon } from "lucide-react"; // FilterIcon for filter button
import { clients } from "@/data/clients"; // Assuming this is your mock/data source
import { UniversalDataTable, type ColumnDefinition } from '@/components/universal-data-table';
import { UniversalListControls } from '@/components/universal-list-controls';

type ClientItem = typeof clients[0];

export function ClientsContent() {
  const [activeTab, setActiveTab] = useState("companies");
  const [searchQuery, setSearchQuery] = useState("");

  const companyColumns: ColumnDefinition<ClientItem>[] = [
    { 
      key: 'name', 
      header: 'Название:', 
      renderCell: (item) => (
        <div className="flex items-center">
          {item.color && (
            <div
              className={`w-2 h-2 rounded-full mr-2 ${
                item.color === "red" ? "bg-[#E03E3E]" :
                item.color === "green" ? "bg-[#0F7B6C]" :
                item.color === "yellow" ? "bg-[#D9730D]" : ""
              }`}
            ></div>
          )}
          <Link href={`/clients/${item.id}`} className="text-[#37352F] hover:underline font-medium">
            {item.name}
          </Link>
        </div>
      ) 
    },
    { key: 'phone', header: 'Телефон:' },
    { key: 'address', header: 'Адрес:' },
  ];

  const renderClientActions = (item: ClientItem) => (
    <Link href={`/clients/${item.id}`} passHref>
      <Button variant="ghost" size="icon" aria-label="View details" className="h-8 w-8 text-[#6B6B6B] hover:bg-[#EBEBEA]">
        <SearchIcon className="h-4 w-4" />
      </Button>
    </Link>
  );
  
  const handleAddClient = () => {
    console.log("Add Client clicked for tab:", activeTab);
  };

  const handleFilterSettings = () => {
    console.log("Filter Settings clicked for tab:", activeTab);
  };

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (client.phone && client.phone.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (client.address && client.address.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Tabs and Controls Container */}
      <div className="bg-white border-b border-[#EBEBEA]"> {/* Changed background to white for controls area */}
        <div className="p-4 border-b border-[#EBEBEA]"> {/* Inner padding and border for TabsList */}
            <Tabs defaultValue="companies" onValueChange={setActiveTab} className="w-full">
            <TabsList className="p-0 h-auto bg-transparent"> {/* Transparent bg for TabsList itself */}
                <TabsTrigger
                value="companies"
                className={`px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:border-b-2 data-[state=active]:border-[#E03E3E] ${activeTab === "companies" ? "text-[#37352F]" : "text-[#6B6B6B]"}`}
                >
                Компании ({filteredClients.length})
                </TabsTrigger>
                <TabsTrigger
                value="contacts"
                className={`px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm ${activeTab === "contacts" ? "text-[#37352F]" : "text-[#6B6B6B]"}`}
                >
                Контактные лица (0) <span className="ml-1 text-[#6B6B6B]">ⓘ</span>
                </TabsTrigger>
                <TabsTrigger
                value="individuals"
                className={`px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm ${activeTab === "individuals" ? "text-[#37352F]" : "text-[#6B6B6B]"}`}
                >
                Физические лица (0) <span className="ml-1 text-[#6B6B6B]">ⓘ</span>
                </TabsTrigger>
            </TabsList>
            </Tabs>
        </div>
        
        <UniversalListControls
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onSearchClear={() => setSearchQuery("")}
            onAddButtonClick={handleAddClient}
            onFilterSettingsClick={handleFilterSettings}
            filterButtonText="Фильтр" // Example of changing text
            // showClearFilterButton={true} 
            // onClearFilterClick={() => console.log("Clear filter")}
        />
      </div>

      {/* Table Content Area */}
      <div className="flex-1 overflow-auto p-4 bg-[#F7F8FA]"> {/* Added padding and background */}
        {activeTab === "companies" && (
          <>
            <UniversalDataTable
              columns={companyColumns}
              data={filteredClients}
              idKey="id"
              renderRowActions={renderClientActions}
              actionColumnHeader={
                <Button variant="ghost" size="icon" className="h-8 w-8 text-[#6B6B6B]">
                  <Settings className="w-5 h-5" />
                </Button>
              }
            />
            <div className="p-4 text-right text-sm text-[#6B6B6B] bg-white border-t border-l border-r border-[#EBEBEA] rounded-b-md">
              Всего: {filteredClients.length}
            </div>
          </>
        )}
        {activeTab === "contacts" && (
          <div className="p-4 text-center text-gray-500 bg-white rounded-md border border-[#EBEBEA]">Содержимое вкладки "Контактные лица" будет здесь.</div>
        )}
        {activeTab === "individuals" && (
          <div className="p-4 text-center text-gray-500 bg-white rounded-md border border-[#EBEBEA]">Содержимое вкладки "Физические лица" будет здесь.</div>
        )}
      </div>
    </div>
  );
}
