// app/equipments/[id]/page.tsx
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
} from "@/components/ui/table";
import {
  ChevronRight,
  Edit3,
  Paperclip,
  Ticket,
  Package,
  Printer,
  Trash2,
  History as HistoryIcon,
  Search as SearchIcon,
  ChevronLeft,
  Info,
} from 'lucide-react';

const mockEquipmentDetail = {
  name: 'Датчик Новый датчик 123456789',
  company: 'АгроПром Посев',
  serviceObjectShort: 'Камаз о001оо77 А9 TRIX',
  serviceObjectFull: 'Камаз о001оо77 А9 TRIX +87774212331',
  type: 'Датчик',
  model: '',
  inventoryNumber: 'Новый датчик 123456789',
  serialNumber: '[не указано]',
  contract: '[не указано]',
  warehouse: '[не указано]',
  mileageType: 'mileage',
  dataId: '2',
};

const mockAssociatedTickets = [
  {
    id: '000008',
    subject: 'Установить GPS-трекер на подключенное АВТО',
    client: 'АгроПром Посев',
    assignee: 'Бухгалтерия | Ионников Ф. И.',
    status: 'Выезд на объект',
    statusColor: 'bg-blue-500',
  },
];

interface EquipmentDetailPageProps {
  params: { id: string };
}

const EquipmentDetailPage: React.FC<EquipmentDetailPageProps> = ({ params }) => {
  const equipment = mockEquipmentDetail;

  return (
    <div className="grid grid-rows-[minmax(0,_1fr)] overflow-hidden">
      <main className="overflow-auto bg-[#F7F8FA]">
        <div className="w-full p-6 bg-white rounded-md border border-[#EBEBEA] shadow-sm mt-0 grid grid-rows-[auto_1fr] gap-y-6">
          <div className="bg-white py-3 border-b border-[#EBEBEA] grid grid-flow-col auto-cols-max items-center gap-x-2 text-sm">
            <Link href="/equipments" className="text-[#2383E2] hover:underline grid grid-flow-col auto-cols-max items-center gap-x-1">
              <ChevronLeft className="w-4 h-4" />
              Назад
            </Link>
            <span className="text-[#6B6B6B]">/</span>
            <Link href="/" className="text-[#2383E2] hover:underline">
              Главная
            </Link>
            <span className="text-[#6B6B6B]">/</span>
            <Link href="/equipments" className="text-[#2383E2] hover:underline">
              Оборудование
            </Link>
            <span className="text-[#6B6B6B]">/</span>
            <span className="text-[#6B6B6B]">{equipment.name}</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_2fr)_minmax(0,_1fr)] gap-6">
            <div className="flex flex-col space-y-6">
              <div className="mb-6"> 
                <div className="text-xs text-gray-500 mb-1">
                  <Link href="#" className="hover:underline text-[#2383E2]">{equipment.company}</Link>
                  <ChevronRight className="h-3 w-3 mx-1 inline-block text-[#6B6B6B]" />
                  <Link href="#" className="hover:underline text-[#2383E2]">{equipment.serviceObjectShort}</Link>
                  {equipment.serviceObjectFull.replace(equipment.serviceObjectShort, '') && (
                    <span className="ml-1 text-[#6B6B6B]">{equipment.serviceObjectFull.replace(equipment.serviceObjectShort, '')}</span>
                  )}
                </div>
                <div className="grid grid-flow-col auto-cols-max items-center gap-x-3">
                  <h1 className="text-2xl font-semibold text-[#37352F]">{equipment.name}</h1>
                  <Button variant="ghost" size="icon" className="text-[#6B6B6B] hover:bg-green-600 hover:text-white h-7 w-7">
                    <Edit3 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="text-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <div className="text-gray-500 mb-0.5">Тип, производитель, модель</div>
                    <div className="text-gray-800 font-medium flex items-center">
                      {equipment.type} {equipment.model && `- ${equipment.model}`}
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-green-600 hover:text-white h-5 w-5 ml-1">
                        <Edit3 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-0.5">Инвентарный номер</div>
                    <div className="text-gray-800 font-medium flex items-center">
                      {equipment.inventoryNumber}
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-green-600 hover:text-white h-5 w-5 ml-1">
                        <Edit3 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-0.5">Договоры</div>
                    <div className="text-gray-800 font-medium flex items-center">
                      {equipment.contract}
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-green-600 hover:text-white h-5 w-5 ml-1">
                        <Edit3 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-0.5">Склад</div>
                    <div className="text-gray-800 font-medium flex items-center">
                      {equipment.warehouse}
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-green-600 hover:text-white h-5 w-5 ml-1">
                        <Edit3 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-0.5">Тип датчика</div>
                    <div className="text-gray-800 font-medium flex items-center">
                      {equipment.mileageType}
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-green-600 hover:text-white h-5 w-5 ml-1">
                        <Edit3 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-0.5">ID датчика</div>
                    <div className="text-gray-800 font-medium flex items-center">
                      {equipment.dataId}
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-green-600 hover:text-white h-5 w-5 ml-1">
                        <Edit3 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                   <div>
                    <div className="text-gray-500 mb-0.5">Серийный номер</div>
                    <div className="text-gray-800 font-medium flex items-center">
                      {equipment.serialNumber}
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-green-600 hover:text-white h-5 w-5 ml-1">
                        <Edit3 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm">
                <div className="flex justify-between items-center mb-1">
                  <h2 className="text-lg font-medium text-gray-700">Комментарий</h2>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-green-600 hover:text-white h-6 w-6">
                    <Edit3 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="p-3 bg-gray-50 rounded-md border border-gray-200 text-sm text-gray-700 min-h-[60px]">
                  <p>Здесь будет отображаться комментарий к оборудованию. Если комментарий длинный, он может занимать несколько строк.</p>
                </div>
              </div>
              <hr className="border-[#EBEBEA]" />
              <div className="mt-0 pt-0">
                <Tabs defaultValue="tickets" className="w-full">
                  <TabsList className="bg-[#F7F7F7] p-0 border border-[#EBEBEA] rounded-md mb-4">
                    <TabsTrigger value="files" className="data-[state=active]:bg-white rounded-none border-r border-[#EBEBEA] px-4">
                      <Paperclip className="h-4 w-4 mr-2" />Файлы (0)
                    </TabsTrigger>
                    <TabsTrigger value="tickets" className="data-[state=active]:bg-white rounded-none border-r border-[#EBEBEA] px-4">
                      <Ticket className="h-4 w-4 mr-2" />Заявки (1)
                    </TabsTrigger>
                    <TabsTrigger value="sub-equipment" className="data-[state=active]:bg-white rounded-none border-r border-[#EBEBEA] px-4">
                      <Package className="h-4 w-4 mr-2" />Вложенное оборудование (0)
                    </TabsTrigger>
                    <TabsTrigger value="print-forms" className="data-[state=active]:bg-white rounded-none px-4">
                      <Printer className="h-4 w-4 mr-2" />Печатные формы (1)
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="files">
                    <div className="p-0 mt-0 border-t border-[#EBEBEA] pt-4">
                      <p className="text-sm text-gray-500">Files content will be here.</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="tickets">
                    <div className="p-0 mt-0 border-t border-[#EBEBEA] pt-4">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader className="bg-gray-50 text-xs">
                            <TableRow>
                              <TableHead className="px-3 py-2">№ заявки</TableHead>
                              <TableHead className="px-3 py-2">Тема</TableHead>
                              <TableHead className="px-3 py-2">Клиент</TableHead>
                              <TableHead className="px-3 py-2">Ответственный</TableHead>
                              <TableHead className="px-3 py-2">Статус</TableHead>
                              <TableHead className="text-right px-3 py-2">
                                <Button variant="ghost" size="icon" className="h-6 w-6">
                                  <HistoryIcon className="h-3.5 w-3.5 text-gray-500" />
                                </Button>
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody className="text-xs">
                            {mockAssociatedTickets.map((ticket) => (
                              <TableRow key={ticket.id} className="hover:bg-gray-50">
                                <TableCell className="font-medium text-gray-800 px-3 py-2">{ticket.id}</TableCell>
                                <TableCell className="text-gray-700 px-3 py-2">{ticket.subject}</TableCell>
                                <TableCell className="text-gray-700 px-3 py-2">
                                  <span className="inline-flex items-center">
                                    <span className={`h-2 w-2 rounded-full mr-1.5 ${ticket.statusColor === 'bg-red-500' ? 'bg-red-200' : 'bg-green-200'}`}></span>
                                    {ticket.client}
                                  </span>
                                </TableCell>
                                <TableCell className="text-gray-700 px-3 py-2">{ticket.assignee}</TableCell>
                                <TableCell className="px-3 py-2">
                                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                                    ticket.status === 'Выезд на объект' ? 'bg-blue-100 text-blue-700' :
                                    ticket.status === 'В работе' ? 'bg-yellow-100 text-yellow-700' :
                                    'bg-green-100 text-green-700'
                                  }`}>
                                    {ticket.status}
                                  </span>
                                </TableCell>
                                <TableCell className="text-right px-3 py-2">
                                  <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-500 hover:text-blue-600">
                                    <SearchIcon className="h-3.5 w-3.5" />
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                      <div className="mt-3 flex justify-between items-center text-xs text-gray-600">
                        <div>Повторяющаяся</div>
                        <div className="flex items-center space-x-3">
                          <span>Сортировать по: времени регистрации</span>
                          <span>На странице: 20 строк</span>
                          <span>Автообновление списка: отключено</span>
                        </div>
                        <div>Всего заявок: {mockAssociatedTickets.length}</div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="sub-equipment">
                    <div className="p-0 mt-0 border-t border-[#EBEBEA] pt-4">
                      <p className="text-sm text-gray-500">Sub-equipment content will be here.</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="print-forms">
                    <div className="p-0 mt-0 border-t border-[#EBEBEA] pt-4">
                      <p className="text-sm text-gray-500">Printable forms content will be here.</p>
                    </div>
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
                   <Button variant="outline" size="sm" className="w-full justify-start text-red-600 border-red-300 hover:bg-red-50">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Удалить оборудование
                  </Button>
                   <Button variant="outline" size="sm" className="w-full justify-start text-gray-700 hover:bg-gray-50">
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

export default EquipmentDetailPage;