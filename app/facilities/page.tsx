// app/facilities/page.tsx
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UniversalDataTable, type ColumnDefinition } from '@/components/universal-data-table';
import { UniversalListControls } from '@/components/universal-list-controls';
import {
  Search as SearchIcon,
  Settings2 as ColumnSettingsIcon,
} from 'lucide-react';

const mockFacilityData = [
  { 
    id: '1', 
    name: 'Центральный склад', 
    client: 'ООО "ТехноСтрой"', 
    address: 'г. Москва, ул. Промышленная, д. 10, стр. 5', 
    contactPerson: 'Иванов Пётр Сидорович', 
    phone: '+7 (495) 123-45-67' 
  },
  { 
    id: '2', 
    name: 'Филиал "Южный"', 
    client: 'ЗАО "ТоргСервис"', 
    address: 'г. Краснодар, ул. Солнечная, д. 22', 
    contactPerson: 'Петрова Мария Ивановна', 
    phone: '+7 (861) 987-65-43' 
  },
  { 
    id: '3', 
    name: 'Склад #3', 
    client: 'ИП Сидоров А.А.', 
    address: 'г. Новосибирск, ул. Ленина, д. 1, корп. Б', 
    contactPerson: 'Сидоров Алексей Алексеевич', 
    phone: '+7 (383) 555-00-11' 
  },
  { 
    id: '4', 
    name: 'Производственный цех №1', 
    client: 'ООО "МеталлПром"', 
    address: 'г. Екатеринбург, ул. Заводская, д. 50', 
    contactPerson: 'Васильев Андрей Борисович', 
    phone: '+7 (343) 222-33-44' 
  },
  { 
    id: '5', 
    name: 'Офисное здание "Альфа"', 
    client: 'АО "БизнесЦентр"', 
    address: 'г. Санкт-Петербург, Невский пр., д. 100', 
    contactPerson: 'Смирнова Ольга Викторовна', 
    phone: '+7 (812) 777-88-99' 
  },
];

type FacilityItem = typeof mockFacilityData[0];

const FacilitiesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const columns: ColumnDefinition<FacilityItem>[] = [
    { key: 'name', header: 'Название', sortable: true, isPrimaryLink: true },
    { key: 'client', header: 'Клиент', sortable: true },
    { key: 'address', header: 'Адрес', sortable: true },
    { key: 'contactPerson', header: 'Контактное лицо', sortable: true },
    { key: 'phone', header: 'Телефон', sortable: true },
  ];

  const renderFacilityActions = (item: FacilityItem) => (
    <Link href={`/facilities/${item.id}`} passHref>
      <Button variant="ghost" size="icon" aria-label="View details" className="h-7 w-7 text-gray-500 hover:text-blue-600">
        <SearchIcon className="h-4 w-4" />
      </Button>
    </Link>
  );

  const handleAddFacility = () => {
    console.log("Add Facility clicked");
    // Future: Logic to open a modal or navigate to a new facility page
  };

  const handleFilterSettings = () => {
    console.log("Filter Settings clicked");
    // Future: Logic to open filter settings panel
  };

  const filteredData = mockFacilityData.filter(facility =>
    Object.values(facility).some(value =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="grid grid-rows-[minmax(0,_1fr)] overflow-hidden">
      <main className="overflow-auto bg-[#F7F8FA]"> {/* Removed p-6 from main */}
          <div className="w-full bg-white p-6 rounded-lg shadow-sm mt-0"> {/* Card has p-6, mt-0 and w-full */}
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Объекты</h1>
            
            <UniversalListControls
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onSearchClear={() => setSearchQuery("")}
              onAddButtonClick={handleAddFacility}
              onFilterSettingsClick={handleFilterSettings}
            />
            
            <div className="mt-4">
              <UniversalDataTable
                columns={columns}
                data={filteredData}
                basePathForRowLink="/facilities"
                idKey="id"
                renderRowActions={renderFacilityActions}
                actionColumnHeader={
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <ColumnSettingsIcon className="h-4 w-4 text-gray-500" />
                  </Button>
                }
              />
            </div>
          </div>
      </main>
    </div>
  );
};

export default FacilitiesPage;