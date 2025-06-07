// app/employees/page.tsx
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UniversalDataTable, type ColumnDefinition } from '@/components/universal-data-table';
import { UniversalListControls } from '@/components/universal-list-controls';
import {
  Search as SearchIcon,
  Settings2 as ColumnSettingsIcon,
  UserCircle2, // For avatar placeholder
} from 'lucide-react';

const mockEmployeeData = [
  { 
    id: '1', 
    fullName: 'Иванов Иван Иванович', 
    position: 'Инженер', 
    department: 'Отдел технического обслуживания', 
    email: 'i.ivanov@example.com', 
    phone: '+7 (900) 123-45-67',
    status: 'Работает' 
  },
  { 
    id: '2', 
    fullName: 'Петров Петр Петрович', 
    position: 'Менеджер', 
    department: 'Отдел продаж', 
    email: 'p.petrov@example.com', 
    phone: '+7 (901) 234-56-78',
    status: 'Работает' 
  },
  { 
    id: '3', 
    fullName: 'Сидорова Анна Викторовна', 
    position: 'Бухгалтер', 
    department: 'Бухгалтерия', 
    email: 'a.sidorova@example.com', 
    phone: '+7 (902) 345-67-89',
    status: 'Уволен' 
  },
   { 
    id: '4', 
    fullName: 'Кузнецов Сергей Дмитриевич', 
    position: 'Инженер', 
    department: 'Отдел внедрения', 
    email: 's.kuznetsov@example.com', 
    phone: '+7 (903) 456-78-90',
    status: 'Работает' 
  },
];

type EmployeeItem = typeof mockEmployeeData[0];

const EmployeesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const columns: ColumnDefinition<EmployeeItem>[] = [
    { 
      key: 'fullName', 
      header: 'ФИО', 
      sortable: true, 
      // isPrimaryLink: true, // Link is handled by custom renderCell
      renderCell: (item) => (
        <div className="flex items-center">
          <UserCircle2 className="h-6 w-6 text-gray-400 mr-2 flex-shrink-0" />
          <Link href={`/employees/${item.id}`} className="hover:underline group-hover:text-blue-600 transition-colors font-medium text-gray-900">
            {item.fullName}
          </Link>
        </div>
      )
    },
    { key: 'position', header: 'Должность', sortable: true },
    { key: 'department', header: 'Подразделение', sortable: true },
    { key: 'email', header: 'Email', sortable: true },
    { key: 'phone', header: 'Телефон', sortable: true },
    { 
      key: 'status', 
      header: 'Статус', 
      sortable: true,
      renderCell: (item) => (
        <div className="flex items-center">
          <span className={`w-2.5 h-2.5 rounded-full mr-2 ${item.status === 'Работает' ? 'bg-green-500' : 'bg-red-500'}`}></span>
          {item.status}
        </div>
      )
    },
  ];

  const renderEmployeeActions = (item: EmployeeItem) => (
    <Link href={`/employees/${item.id}`} passHref>
      <Button variant="ghost" size="icon" aria-label="View details" className="h-7 w-7 text-gray-500 hover:text-blue-600">
        <SearchIcon className="h-4 w-4" />
      </Button>
    </Link>
  );

  const handleAddEmployee = () => {
    console.log("Add Employee clicked");
  };

  const handleFilterSettings = () => {
    console.log("Filter Settings clicked");
  };

  const filteredData = mockEmployeeData.filter(employee =>
    Object.values(employee).some(value =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="grid grid-rows-[minmax(0,_1fr)] overflow-hidden">
      <main className="overflow-auto bg-[#F7F8FA]">
          <div className="w-full bg-white p-6 rounded-lg shadow-sm mt-0">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Сотрудники</h1>
            
            <UniversalListControls
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onSearchClear={() => setSearchQuery("")}
              onAddButtonClick={handleAddEmployee}
              onFilterSettingsClick={handleFilterSettings}
            />
            
            <div className="mt-4">
              <UniversalDataTable
                columns={columns}
                data={filteredData}
                // basePathForRowLink is not needed as renderCell for fullName handles the link
                idKey="id"
                renderRowActions={renderEmployeeActions}
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

export default EmployeesPage;