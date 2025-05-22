// app/clients/[id]/page.tsx
import { AppHeader } from "@/components/app-header"; // Added
import { Sidebar } from "@/components/sidebar"; // Added
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
import { PlusCircle, Search, Settings2, Download, Edit3 } from "lucide-react";

interface ClientDetailPageProps {
  params: {
    id: string;
  };
}

// Mock data for the table, as per the screenshot
const equipmentData = [
  { name: "Датчик температуры", type: "Датчик", manufacturer: "", model: "", inventoryNumber: "Датчик температуры" },
  { name: "Датчик Топлива", type: "Датчик", manufacturer: "", model: "", inventoryNumber: "Топлива" },
  { name: "Датчик Новый датчик 123456789", type: "Датчик", manufacturer: "", model: "", inventoryNumber: "Новый датчик 123456..." },
  { name: "Датчик Пробег 1", type: "Датчик", manufacturer: "", model: "", inventoryNumber: "Пробег 1" },
];

export default function ClientDetailPage({ params }: ClientDetailPageProps) {
  // For now, we'll just use a placeholder name.
  // In a real app, you'd fetch client data based on params.id
  const clientName = "АгроПром Посев";
  const clientSubName = "Колхоз-Плюс";

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col h-screen bg-white"> {/* Outer wrapper for AppHeader/Sidebar */}
        <AppHeader />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <div className="flex-1 overflow-auto bg-[#F7F8FA] p-6"> {/* Notion-like page background */}
            
            {/* Page Title (Notion-like, above the card) */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                {clientName}
                <Button variant="ghost" size="icon" className="ml-2 text-gray-500 hover:text-gray-700">
                  <Edit3 className="h-5 w-5" />
                </Button>
              </h1>
            </div>

            {/* Client Details Card (Notion-like) */}
            <div className="bg-white rounded-md border border-gray-200 shadow-sm p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">
                {/* Field 1: Дополнительные названия */}
                <div>
                  <p className="text-sm text-gray-500 mb-0.5">Дополнительные названия:</p>
                  <div className="flex items-center">
                    <p className="text-base text-gray-800">{clientSubName}</p>
                    <Button variant="ghost" size="icon" className="ml-1 text-gray-400 hover:text-gray-600 h-6 w-6">
                      <Edit3 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
                {/* Field 2: Телефон */}
                <div>
                  <p className="text-sm text-gray-500 mb-0.5">Телефон:</p>
                  <div className="flex items-center">
                    <p className="text-base text-gray-800">+78998765432</p>
                    <Button variant="ghost" size="icon" className="ml-1 text-gray-400 hover:text-gray-600 h-6 w-6">
                      <Edit3 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
                {/* Field 3: Адрес */}
                <div>
                  <p className="text-sm text-gray-500 mb-0.5">Адрес:</p>
                  <div className="flex items-center">
                    <p className="text-base text-gray-800">109382, Россия, Москва город, Москва, проезд Кирова, дом 12</p>
                    <Button variant="ghost" size="icon" className="ml-1 text-gray-400 hover:text-gray-600 h-6 w-6">
                      <Edit3 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
                {/* Field 4: Логин клиента в Omnicomm Online */}
                <div>
                  <p className="text-sm text-gray-500 mb-0.5">Логин клиента в Omnicomm Online</p>
                  <div className="flex items-center">
                    <p className="text-base text-gray-800">[не указано]</p>
                    <Button variant="ghost" size="icon" className="ml-1 text-gray-400 hover:text-gray-600 h-6 w-6">
                      <Edit3 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
                {/* Field 5: Сайт */}
                <div>
                  <p className="text-sm text-gray-500 mb-0.5">Сайт:</p>
                  <div className="flex items-center">
                    <p className="text-base text-gray-800">agropromposev.site</p>
                    <Button variant="ghost" size="icon" className="ml-1 text-gray-400 hover:text-gray-600 h-6 w-6">
                      <Edit3 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
                {/* Field 6: Наблюдатели заявок по умолчанию */}
                <div>
                  <p className="text-sm text-gray-500 mb-0.5">Наблюдатели заявок по умолчанию:</p>
                  <div className="flex items-center">
                    <p className="text-base text-gray-800">[не указано]</p>
                    <Button variant="ghost" size="icon" className="ml-1 text-gray-400 hover:text-gray-600 h-6 w-6">
                      <Edit3 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
                {/* Field 7: Электронная почта */}
                <div>
                  <p className="text-sm text-gray-500 mb-0.5">Электронная почта:</p>
                  <div className="flex items-center">
                    <p className="text-base text-gray-800">info@agropromposev.site</p>
                    <Button variant="ghost" size="icon" className="ml-1 text-gray-400 hover:text-gray-600 h-6 w-6">
                      <Edit3 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
                {/* Field 8: Ответственный за компанию */}
                <div>
                  <p className="text-sm text-gray-500 mb-0.5">Ответственный за компанию:</p>
                  <div className="flex items-center">
                    <p className="text-base text-gray-800">Ионников Федор Иванович</p>
                    <Button variant="ghost" size="icon" className="ml-1 text-gray-400 hover:text-gray-600 h-6 w-6">
                      <Edit3 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500">Бухгалтерия</p>
                </div>
              </div>
            </div>
            
            {/* Comments and Tabs in their own card */}
            <div className="bg-white rounded-md border border-gray-200 shadow-sm p-6 space-y-6">
              {/* Comments Section */}
              <div className="text-sm pt-4 border-t"> {/* Removed outer padding, card has p-6 */}
                <div className="flex items-center">
                  <p className="text-gray-500 mr-2">Комментарий:</p>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600 h-6 w-6">
                    <Edit3 className="h-3.5 w-3.5" />
                  </Button>
                </div>
                {/* Actual comment text or input field would go here */}
              </div>

              {/* Tabs Section */}
              <div> {/* Removed outer padding, card has p-6 */}
                <Tabs defaultValue="equipment" className="w-full pt-4">
                  <TabsList className="border-b-0 bg-gray-100 p-1 rounded-md">
                    <TabsTrigger value="requests" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Заявки (22)</TabsTrigger>
                    <TabsTrigger value="contacts" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Контакты (2)</TabsTrigger>
                    <TabsTrigger value="objects" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Объекты (2)</TabsTrigger>
                    <TabsTrigger value="equipment" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Оборудование (4)</TabsTrigger>
                    <TabsTrigger value="files" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Файлы (0)</TabsTrigger>
                  </TabsList>

                  {/* Equipment Tab Content */}
                  <TabsContent value="equipment" className="mt-4">
                    <div className="space-y-4 p-4 border rounded-lg bg-gray-50/50">
                      {/* Filter and Actions Bar */}
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

                      {/* Equipment Table */}
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
                                    <Search className="h-4 w-4" /> {/* Or other action icon */}
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="requests"><div className="p-4 border rounded-lg bg-gray-50/50 mt-4">Содержимое вкладки Заявки (22)...</div></TabsContent>
                  <TabsContent value="contacts"><div className="p-4 border rounded-lg bg-gray-50/50 mt-4">Содержимое вкладки Контакты (2)...</div></TabsContent>
                  <TabsContent value="objects"><div className="p-4 border rounded-lg bg-gray-50/50 mt-4">Содержимое вкладки Объекты (2)...</div></TabsContent>
                  <TabsContent value="files"><div className="p-4 border rounded-lg bg-gray-50/50 mt-4">Содержимое вкладки Файлы (0)...</div></TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}