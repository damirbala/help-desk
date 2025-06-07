// app/facilities/[id]/page.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"; // Kept in case tabs use it
import { 
    ChevronRight, 
    Edit3, 
    Trash2, 
    History as HistoryIcon, 
    Paperclip, 
    Ticket, 
    Package, 
    Users,
    ChevronLeft // Added for breadcrumbs
} from 'lucide-react';

interface FacilityDetailPageProps {
  params: { id: string };
}

const mockFacilityDetail = {
  name: 'Центральный склад',
  clientName: 'ООО "ТехноСтрой"',
  address: 'г. Москва, ул. Промышленная, д. 10, стр. 5',
  contactPerson: 'Иванов Пётр Сидорович',
  phone: '+7 (495) 123-45-67',
};

const FacilityDetailPage: React.FC<FacilityDetailPageProps> = ({ params }) => {
  const facility = mockFacilityDetail;

  return (
    <div className="grid grid-rows-[minmax(0,_1fr)] overflow-hidden">
      <main className="overflow-auto bg-[#F7F8FA]">
        <div className="w-full p-6 bg-white rounded-md border border-[#EBEBEA] shadow-sm mt-0 grid grid-rows-[auto_1fr] gap-y-6">
          
          <div className="bg-white py-3 border-b border-[#EBEBEA] grid grid-flow-col auto-cols-max items-center gap-x-2 text-sm">
            <Link href="/facilities" className="text-[#2383E2] hover:underline grid grid-flow-col auto-cols-max items-center gap-x-1">
              <ChevronLeft className="w-4 h-4" />
              Назад
            </Link>
            <span className="text-[#6B6B6B]">/</span>
            <Link href="/" className="text-[#2383E2] hover:underline">
              Главная
            </Link>
            <span className="text-[#6B6B6B]">/</span>
            <Link href="/facilities" className="text-[#2383E2] hover:underline">
              Объекты
            </Link>
            <span className="text-[#6B6B6B]">/</span>
            <span className="text-[#6B6B6B]">{facility.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_2fr)_minmax(0,_1fr)] gap-6">
            <div className="flex flex-col space-y-6">
              <div className="mb-6">
                <div className="grid grid-flow-col auto-cols-max items-center gap-x-3">
                    <h1 className="text-2xl font-semibold text-[#37352F]">{facility.name}</h1>
                    <Button variant="ghost" size="icon" className="text-[#6B6B6B] hover:bg-green-600 hover:text-white h-7 w-7">
                        <Edit3 className="h-4 w-4" />
                    </Button>
                </div>
              </div>

              <div className="text-sm"> {/* Was Main Info Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  <div>
                    <p className="text-gray-500 mb-0.5">Клиент:</p>
                    <p className="text-base text-gray-800">{facility.clientName}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-0.5">Адрес:</p>
                    <p className="text-base text-gray-800">{facility.address}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-0.5">Контактное лицо:</p>
                    <p className="text-base text-gray-800">{facility.contactPerson}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-0.5">Телефон:</p>
                    <p className="text-base text-gray-800">{facility.phone}</p>
                  </div>
                </div>
              </div>

              <div className="text-sm"> {/* Was Comments Card */}
                <div className="flex items-center mb-2">
                  <p className="text-gray-500 mr-2 text-sm">Комментарий:</p>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-green-600 hover:text-white h-6 w-6">
                    <Edit3 className="h-3.5 w-3.5" />
                  </Button>
                </div>
                <div className="p-3 bg-gray-50 rounded-md border border-gray-200 text-sm text-gray-700 min-h-[60px]">
                  <p>Placeholder for facility comment.</p>
                </div>
              </div>
              
              <hr className="border-[#EBEBEA]" />

              <div className="mt-0 pt-0"> {/* Was Footer Tabs Section */}
                <Tabs defaultValue="tickets" className="w-full">
                  <TabsList className="bg-[#F7F7F7] p-0 border border-[#EBEBEA] rounded-md mb-4">
                    <TabsTrigger value="tickets" className="data-[state=active]:bg-white rounded-none border-r border-[#EBEBEA] px-4">
                      <Ticket className="h-4 w-4 mr-2" />Заявки
                    </TabsTrigger>
                    <TabsTrigger value="equipment" className="data-[state=active]:bg-white rounded-none border-r border-[#EBEBEA] px-4">
                      <Package className="h-4 w-4 mr-2" />Оборудование
                    </TabsTrigger>
                    <TabsTrigger value="contacts" className="data-[state=active]:bg-white rounded-none border-r border-[#EBEBEA] px-4">
                      <Users className="h-4 w-4 mr-2" />Контакты/Персонал
                    </TabsTrigger>
                    <TabsTrigger value="files" className="data-[state=active]:bg-white rounded-none px-4">
                      <Paperclip className="h-4 w-4 mr-2" />Файлы
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="tickets">
                    <div className="p-0 mt-0 border-t border-[#EBEBEA] pt-4">Содержимое вкладки Заявки...</div>
                  </TabsContent>
                  <TabsContent value="equipment">
                    <div className="p-0 mt-0 border-t border-[#EBEBEA] pt-4">Содержимое вкладки Оборудование...</div>
                  </TabsContent>
                  <TabsContent value="contacts">
                    <div className="p-0 mt-0 border-t border-[#EBEBEA] pt-4">Содержимое вкладки Контакты/Персонал...</div>
                  </TabsContent>
                  <TabsContent value="files">
                    <div className="p-0 mt-0 border-t border-[#EBEBEA] pt-4">Содержимое вкладки Файлы...</div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="sticky top-6 space-y-4">
                <div className="grid grid-flow-col auto-cols-max items-center justify-between">
                    <h3 className="text-lg font-semibold text-[#37352F]">Действия</h3>
                </div>
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">Редактировать объект</Button>
                  <Button variant="outline" size="sm" className="w-full justify-start text-red-600 border-red-300 hover:bg-red-50">Удалить объект</Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <HistoryIcon className="h-4 w-4 mr-2" />
                    История
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FacilityDetailPage;