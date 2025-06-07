// app/equipments/page.tsx
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// Input is used by UniversalListControls, no need to import here if not used directly
import { UniversalDataTable, type ColumnDefinition } from '@/components/universal-data-table';
import { UniversalListControls } from '@/components/universal-list-controls';
import {
  Search as SearchIcon,
  Settings2 as ColumnSettingsIcon,
} from 'lucide-react';

const mockEquipmentData = [
  { id: '1', name: 'Датчик ДУТ', inventoryNumber: 'ДУТ', company: 'РестоХолдинг', serviceObject: 'Ресторан на Пражской' },
  { id: '2', name: 'Датчик температуры', inventoryNumber: 'Датчик температуры', company: 'АгроПром Посев', serviceObject: 'Камаз о001оо77 А9 TRIX +87774212331' },
  { id: '3', name: 'Датчик пробега', inventoryNumber: 'Датчик пробега', company: 'Супер Логистик Плюс', serviceObject: 'Камаз М1945' },
  { id: '4', name: 'Датчик Топлива', inventoryNumber: 'Топлива', company: 'АгроПром Посев', serviceObject: 'Камаз М1945' },
  { id: '5', name: 'Датчик Новый датчик', inventoryNumber: 'Новый датчик', company: 'РестоХолдинг', serviceObject: 'Комбайн John Deere 33-43 УК 799 RUS' },
  { id: '6', name: 'Датчик Новый датчик 123456789', inventoryNumber: 'Новый датчик 123456...', company: 'АгроПром Посев', serviceObject: 'Камаз о001оо77 А9 TRIX +87774212331' },
  { id: '7', name: 'Датчик Пробег 1', inventoryNumber: 'Пробег 1', company: 'АгроПром Посев', serviceObject: 'Камаз М1945' },
  { id: '8', name: 'Датчик Пробег 2', inventoryNumber: 'Пробег 2', company: 'РестоХолдинг', serviceObject: 'Новый объект5 Teltonika FMA110 +7677666556' },
];

type EquipmentItem = typeof mockEquipmentData[0];

const EquipmentsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const columns: ColumnDefinition<EquipmentItem>[] = [
    { key: 'name', header: 'Название', sortable: true, isPrimaryLink: true },
    { key: 'inventoryNumber', header: 'Инвентарный номер', sortable: true },
    { key: 'company', header: 'Компания', sortable: true },
    { key: 'serviceObject', header: 'Объект обслуживания', sortable: true },
  ];

  const renderEquipmentActions = (item: EquipmentItem) => (
    <Link href={`/equipments/${item.id}`} passHref>
      <Button variant="ghost" size="icon" aria-label="View details" className="h-7 w-7 text-gray-500 hover:text-blue-600">
        <SearchIcon className="h-4 w-4" />
      </Button>
    </Link>
  );

  const handleAddEquipment = () => {
    console.log("Add Equipment clicked");
    // Future: Logic to open a modal or navigate to a new equipment page
  };

  const handleFilterSettings = () => {
    console.log("Filter Settings clicked");
    // Future: Logic to open filter settings panel
  };

  // Simple client-side filtering for demonstration
  const filteredData = mockEquipmentData.filter(equipment =>
    Object.values(equipment).some(value =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="grid grid-rows-[minmax(0,_1fr)] overflow-hidden">
      <main className="overflow-auto bg-[#F7F8FA]">
          <div className="w-full bg-white p-6 rounded-lg shadow-sm mt-0">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Оборудование</h1>
            
            <UniversalListControls
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onSearchClear={() => setSearchQuery("")}
              onAddButtonClick={handleAddEquipment}
              onFilterSettingsClick={handleFilterSettings}
              // showClearFilterButton={true} // Example if needed
              // onClearFilterClick={() => console.log("Clear filter")}
            />
            
            <div className="mt-4">
              <UniversalDataTable
                columns={columns}
                data={filteredData}
                basePathForRowLink="/equipments"
                idKey="id"
                renderRowActions={renderEquipmentActions}
                
              />
            </div>
          </div>
      </main>
    </div>
  );
};

export default EquipmentsPage;