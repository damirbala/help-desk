// app/clients/[id]/page.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  PlusCircle, 
  Search, 
  Settings2, 
  Download, 
  Edit3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface ClientDetailPageProps {
  params: {
    id: string;
  };
}

const equipmentData = [ 
  { name: "Датчик температуры", type: "Датчик", manufacturer: "", model: "", inventoryNumber: "Датчик температуры" },
  { name: "Датчик Топлива", type: "Датчик", manufacturer: "", model: "", inventoryNumber: "Топлива" },
  { name: "Датчик Новый датчик 123456789", type: "Датчик", manufacturer: "", model: "", inventoryNumber: "Новый датчик 123456..." },
  { name: "Датчик Пробег 1", type: "Датчик", manufacturer: "", model: "", inventoryNumber: "Пробег 1" },
];

const ClientDetailPage: React.FC<ClientDetailPageProps> = ({ params }) => {
  const clientName = "АгроПром Посев"; 
  const clientSubName = "Колхоз-Плюс"; 

  return (
    <div className="grid grid-rows-[minmax(0,_1fr)] overflow-hidden">
      <main className="overflow-auto bg-[#F7F8FA]">
        <div className="w-full p-6 bg-white rounded-md border border-[#EBEBEA] shadow-sm mt-0 grid grid-rows-[auto_1fr] gap-y-6">
          
          <div className="bg-white py-3 border-b border-[#EBEBEA] grid grid-flow-col auto-cols-max items-center gap-x-2 text-sm">
            <Link href="/clients" className="text-[#2383E2] hover:underline grid grid-flow-col auto-cols-max items-center gap-x-1">
              <ChevronLeft className="w-4 h-4" />
              Назад
            </Link>
            <span className="text-[#6B6B6B]">/</span>
            <Link href="/" className="text-[#2383E2] hover:underline">
              Главная
            </Link>
            <span className="text-[#6B6B6B]">/</span>
            <Link href="/clients" className="text-[#2383E2] hover:underline">
              Клиенты
            </Link>
            <span className="text-[#6B6B6B]">/</span>
            <span className="text-[#6B6B6B]">{clientName}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_2fr)_minmax(0,_1fr)] gap-6">
            <div className="flex flex-col space-y-6">
              <div className="mb-6">
                <div className="grid grid-flow-col auto-cols-max items-center gap-x-3">
                    <h1 className="text-2xl font-semibold text-[#37352F]">{clientName}</h1>
                    <Button variant="ghost" size="icon" className="text-[#6B6B6B] hover:bg-green-600 hover:text-white h-7 w-7">
                        <Edit3 className="h-4 w-4" />
                    </Button>
                </div>
              </div>

              <div className="text-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Дополнительные названия:</p>
                    <div className="flex items-center">
                      <p className="text-base text-gray-800">{clientSubName}</p>
                      <Button variant="ghost" size="icon" className="ml-1 text-gray-400 hover:bg-green-600 hover:text-white h-6 w-6">
                        <Edit3 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Телефон:</p>
                    <div className="flex items-center">
                      <p className="text-base text-gray-800">+78998765432</p>
                      <Button variant="ghost" size="icon" className="ml-1 text-gray-400 hover:bg-green-600 hover:text-white h-6 w-6">
                        <Edit3 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Адрес:</p>
                    <div className="flex items-center">
                      <p className="text-base text-gray-800">109382, Россия, Москва город, Москва, проезд Кирова, дом 12</p>
                      <Button variant="ghost" size="icon" className="ml-1 text-gray-400 hover:bg-green-600 hover:text-white h-6 w-6">
                        <Edit3 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Логин клиента в Omnicomm Online</p>
                    <div className="flex items-center">
                      <p className="text-base text-gray-800">[не указано]</p>
                      <Button variant="ghost" size="icon" className="ml-1 text-gray-400 hover:bg-green-600 hover:text-white h-6 w-6">
                        <Edit3 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Сайт:</p>
                    <div className="flex items-center">
                      <p className="text-base text-gray-800">agropromposev.site</p>
                      <Button variant="ghost" size="icon" className="ml-1 text-gray-400 hover:bg-green-600 hover:text-white h-6 w-6">
                        <Edit3 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Наблюдатели заявок по умолчанию:</p>
                    <div className="flex items-center">
                      <p className="text-base text-gray-800">[не указано]</p>
                      <Button variant="ghost" size="icon" className="ml-1 text-gray-400 hover:bg-green-600 hover:text-white h-6 w-6">
                        <Edit3 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Электронная почта:</p>
                    <div className="flex items-center">
                      <p className="text-base text-gray-800">info@agropromposev.site</p>
                      <Button variant="ghost" size="icon" className="ml-1 text-gray-400 hover:bg-green-600 hover:text-white h-6 w-6">
                        <Edit3 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Ответственный за компанию:</p>
                    <div className="flex items-center">
                      <p className="text-base text-gray-800">Ионников Федор Иванович</p>
                      <Button variant="ghost" size="icon" className="ml-1 text-gray-400 hover:bg-green-600 hover:text-white h-6 w-6">
                        <Edit3 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    <p className="text-sm text-gray-500">Бухгалтерия</p>
                  </div>
                </div>
              </div>

              <div className="text-sm">
                <div className="flex items-center mb-2">
                  <p className="text-gray-500 mr-2 text-sm">Комментарий:</p>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-green-600 hover:text-white h-6 w-6">
                    <Edit3 className="h-3.5 w-3.5" />
                  </Button>
                </div>
                <div className="p-3 bg-gray-50 rounded-md border border-gray-200 text-sm text-gray-700 min-h-[60px]">
                  <p>Placeholder for client comment.</p>
                </div>
              </div>
              
              <hr className="border-[#EBEBEA]" />

              <div className="mt-0 pt-0">
                <Tabs defaultValue="equipment" className="w-full">
                  <TabsList className="bg-[#F7F7F7] p-0 border border-[#EBEBEA] rounded-md mb-4">
                    <TabsTrigger value="requests" className="data-[state=active]:bg-white rounded-none border-r border-[#EBEBEA] px-4">Заявки (22)</TabsTrigger>
                    <TabsTrigger value="contacts" className="data-[state=active]:bg-white rounded-none border-r border-[#EBEBEA] px-4">Контакты (2)</TabsTrigger>
                    <TabsTrigger value="objects" className="data-[state=active]:bg-white rounded-none border-r border-[#EBEBEA] px-4">Объекты (2)</TabsTrigger>
                    <TabsTrigger value="equipment" className="data-[state=active]:bg-white rounded-none border-r border-[#EBEBEA] px-4">Оборудование (4)</TabsTrigger>
                    <TabsTrigger value="files" className="data-[state=active]:bg-white rounded-none px-4">Файлы (0)</TabsTrigger>
                  </TabsList>
                  <TabsContent value="equipment" className="mt-4">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b">
                        <div className="flex items-center gap-2 flex-grow">
                          <Button variant="outline" size="sm" className="bg-white">
                            <Settings2 className="h-4 w-4 mr-1.5 text-gray-600" /> Настройка фильтрации
                          </Button>
                          <div className="relative flex-grow max-w-xs">
                            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input placeholder="Поиск" className="pl-9 h-9 bg-white" />
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="icon" className="text-gray-600 bg-white">
                            <Download className="h-4.5 w-4.5" />
                          </Button>
                          <Button className="bg-green-600 hover:bg-green-700 text-white">
                            <PlusCircle className="h-4 w-4 mr-1.5" /> Добавить
                          </Button>
                        </div>
                      </div>
                      <div className="border rounded-md overflow-hidden bg-white">
                        <Table>
                          <TableHeader className="bg-gray-50">
                            <TableRow>
                              <TableHead className="font-medium text-gray-600">Название</TableHead>
                              <TableHead className="font-medium text-gray-600">Тип</TableHead>
                              <TableHead className="font-medium text-gray-600">Производитель</TableHead>
                              <TableHead className="font-medium text-gray-600">Модель</TableHead>
                              <TableHead className="font-medium text-gray-600">Инвентарный номер</TableHead>
                              <TableHead className="text-right w-[50px]">
                                <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700">
                                  <Settings2 className="h-4 w-4" />
                                </Button>
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {equipmentData.map((item, index) => (
                              <TableRow key={index} className="hover:bg-gray-50">
                                <TableCell className="py-2.5">{item.name}</TableCell>
                                <TableCell className="py-2.5">{item.type}</TableCell>
                                <TableCell className="py-2.5">{item.manufacturer || "-"}</TableCell>
                                <TableCell className="py-2.5">{item.model || "-"}</TableCell>
                                <TableCell className="py-2.5">{item.inventoryNumber}</TableCell>
                                <TableCell className="text-right py-2.5">
                                  <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700">
                                    <Search className="h-4 w-4" />
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="requests"><div className="p-0 mt-0 border-t border-[#EBEBEA] pt-4">Содержимое вкладки Заявки (22)...</div></TabsContent>
                  <TabsContent value="contacts"><div className="p-0 mt-0 border-t border-[#EBEBEA] pt-4">Содержимое вкладки Контакты (2)...</div></TabsContent>
                  <TabsContent value="objects"><div className="p-0 mt-0 border-t border-[#EBEBEA] pt-4">Содержимое вкладки Объекты (2)...</div></TabsContent>
                  <TabsContent value="files"><div className="p-0 mt-0 border-t border-[#EBEBEA] pt-4">Содержимое вкладки Файлы (0)...</div></TabsContent>
                </Tabs>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="sticky top-6 space-y-4">
                <div className="grid grid-flow-col auto-cols-max items-center justify-between">
                    <h3 className="text-lg font-semibold text-[#37352F]">Действия</h3>
                </div>
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">Редактировать клиента</Button>
                  <Button variant="outline" size="sm" className="w-full justify-start text-red-600 border-red-300 hover:bg-red-50">Удалить клиента</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClientDetailPage;