import { tickets } from "@/data/tickets"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, Edit, Edit3, Info, MessageSquare, Plus, RefreshCw } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

interface TicketPageProps {
  params: {
    id: string
  }
}

export default function TicketPage({ params }: TicketPageProps) {
  const ticket = tickets.find((t) => t.id === params.id)

  if (!ticket) {
    notFound()
  }

  // Status colors
  const statusColors = {
    Открыта: "bg-[#F97316] text-white",
    Закрыта: "bg-[#6B7280] text-white",
    "Выезд на объект": "bg-[#2383E2] text-white",
  }

  const statusColor = statusColors[ticket.status as keyof typeof statusColors] || "bg-[#F97316] text-white"

  return (
    // The AppHeader and Sidebar are now in layout.tsx
    // This div becomes the main container for the page content, fitting into the layout provided by RootLayout
    <div className="grid grid-rows-[minmax(0,_1fr)] overflow-hidden">

            {/* Main content area - remove p-6 for edge-to-edge feel, add padding to inner "card" */}
            <div className="overflow-auto bg-[#F7F8FA]">
              {/* Single "Card" container for all content below breadcrumbs/ticket header */}
              <div className="w-full p-6 bg-white rounded-md border border-[#EBEBEA] shadow-sm mt-0 grid grid-rows-[auto_1fr] gap-y-6"> {/* Adjusted for breadcrumbs, then content */}
                {/* Breadcrumb navigation - MOVED HERE */}
                <div className="bg-white p-3 border-b border-[#EBEBEA] grid grid-flow-col auto-cols-max items-center gap-x-2 text-sm">
                  <Link href="/ticket" className="text-[#2383E2] hover:underline grid grid-flow-col auto-cols-max items-center gap-x-1">
                          <ChevronLeft className="w-4 h-4" /> {/* mr-1 removed as gap-x-1 handles it */}
                          Назад
                        </Link>
                        <span className="text-[#6B6B6B]">/</span> {/* mx-2 removed */}
                        <Link href="/" className="text-[#2383E2] hover:underline">
                          Главная
                        </Link>
                        <span className="text-[#6B6B6B]">/</span> {/* mx-2 removed */}
                        <Link href="/tickets" className="text-[#2383E2] hover:underline">
                          Заявки
                        </Link>
                        <span className="text-[#6B6B6B]">/</span> {/* mx-2 removed */}
                        <span className="text-[#6B6B6B]">Заявка №{ticket.id}</span>
                      </div>
                
                {/* Ticket header parts have been moved into the columns below. */}

                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_2.5fr)_minmax(0,_1fr)] gap-6">
                  {/* Left Column (Main content + Tabs) */}
                  <div className="flex flex-col space-y-6">
                    {/* MOVED Ticket ID and Subject HERE */}
                    <div className="grid grid-flow-col auto-cols-max items-center gap-x-3 mb-6"> {/* Added mb-6 for spacing */}
                      <span className="text-2xl font-medium text-[#37352F]">{ticket.id}</span>
                      <h1 className="text-xl text-[#37352F]">{ticket.subject}</h1>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-green-600 hover:text-white h-5 w-5 ml-1">
                        <Edit3 className="h-3 w-3" />
                      </Button>
                    </div>
                    {/* Original Left Section content */}
                    {/* <div className="space-y-6"> 
                    
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                        <TicketField label="Клиент" value={ticket.client} editable />
                        <TicketField label="Договор" value="[не указано]" editable />
                        <TicketField label="Объект обслуживания" value="[не указано]" editable infoIcon />
                        <TicketField label="Ответственный сотрудник" value={ticket.assignee} editable />

                      

                        
                      
                      </div>
                    </div> */}


              <div className="text-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <div className="text-gray-500 mb-0.5">Клиент</div>
                    <div className="text-gray-800 font-medium flex items-center">
                      {ticket.client}
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-green-600 hover:text-white h-5 w-5 ml-1">
                        <Edit3 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                 

                 <div>
                    <div className="text-gray-500 mb-0.5">Объект обслуживания</div>
                    <div className="text-gray-800 font-medium flex items-center">
                      [Не указано]
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-green-600 hover:text-white h-5 w-5 ml-1">
                        <Edit3 className="h-3 w-3" />
                      </Button>
                    </div>
                 </div>

                 <div>
                    <div className="text-gray-500 mb-0.5">Ответственный сотрудник</div>
                    <div className="text-gray-800 font-medium flex items-center">
                      {ticket.assignee}
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-green-600 hover:text-white h-5 w-5 ml-1">
                        <Edit3 className="h-3 w-3" />
                      </Button>
                    </div>
                 </div>

                  <div className="pt-4 md:col-span-2 lg:col-span-3">
                          <h3 className="text-[#37352F] font-medium mb-2">Описание</h3>
                          <p className="text-[#6B6B6B] text-sm">
                            Подробное описание заявки №{ticket.id} будет отображаться здесь.
                          </p>
                  </div>
                </div>
              </div> 

                    {/* Horizontal Separator */}
                    <hr className="border-[#EBEBEA]" />

                    {/* Moved Footer Section (Tabs) */}
                    <div className="mt-0 pt-0"> {/* Removed original mt-6, pt-6, border-t */}
                      <Tabs defaultValue="comments" className="w-full">
                        <TabsList className="bg-[#F7F7F7] p-0 border border-[#EBEBEA] rounded-md mb-4">
                           <TabsTrigger
                            value="comments"
                            className="data-[state=active]:bg-white rounded-none border-r border-[#EBEBEA] px-4"
                          >
                            Комментарии (0)
                          </TabsTrigger>
                          <TabsTrigger
                            value="files"
                            className="data-[state=active]:bg-white rounded-none border-r border-[#EBEBEA] px-4"
                          >
                            Файлы (0)
                          </TabsTrigger>
                          <TabsTrigger
                            value="linked"
                            className="data-[state=active]:bg-white rounded-none border-r border-[#EBEBEA] px-4"
                          >
                            Вложенные заявки (0)
                          </TabsTrigger>
                          <TabsTrigger value="specs" className="data-[state=active]:bg-white rounded-none px-4">
                            Спецификация (0)
                          </TabsTrigger>
                        </TabsList>
                        <TabsContent value="comments">
                          <div className="p-0">
                             <Button className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white mb-4">
                               <MessageSquare className="w-4 h-4 mr-2" />
                               Комментировать
                             </Button>
                             <div className="border-t border-[#EBEBEA] pt-4">
                                <p className="text-sm text-gray-500">Пока нет комментариев.</p>
                             </div>
                          </div>
                        </TabsContent>
                        <TabsContent value="files">
                          <div className="p-0 mt-0 border-t border-[#EBEBEA] pt-4">
                            <p className="text-sm text-gray-500">Содержимое вкладки Файлы...</p>
                          </div>
                        </TabsContent>
                        <TabsContent value="linked">
                          <div className="p-0 mt-0 border-t border-[#EBEBEA] pt-4">
                            <p className="text-sm text-gray-500">Содержимое вкладки Вложенные заявки...</p>
                          </div>
                        </TabsContent>
                        <TabsContent value="specs">
                          <div className="p-0 mt-0 border-t border-[#EBEBEA] pt-4">
                            <p className="text-sm text-gray-500">Содержимое вкладки Спецификация...</p>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div> {/* End of Left Column */}

                  {/* Right Section - metadata */}
                  <div className="flex-shrink-0 space-y-4 lg:border-l lg:border-[#EBEBEA] lg:pl-6"> {/* Added space-y-4, Removed lg:w-1/3 as grid handles width, Added border and padding */}
                    {/* MOVED Ticket Edit/Status HERE */}
                    <div className="grid grid-flow-row auto-rows-max items-center gap-x-2  mb-6"> {/* Align to end, add spacing */}
                      
                      <Button className={`${statusColor} hover:opacity-90  hover:bg-green-600 hover:text-white`}>
                        {ticket.status}
                        {/* <Button variant="ghost" size="icon" className="text-white-400 hover:bg-green-600 hover:text-white h-5 w-5 ml-1">
                        <Edit3 className="h-3 w-3" />
                        </Button> */}
                        <div className="text-white-400 hover:bg-green-600 hover:text-white ml-2 px-2 py-2 ">
                        <Edit3 className="h-3 w-3" />
                        </div>
                      </Button>
                    <div className="sticky top-6 space-y-4">
                      <MetadataField label="Дата регистрации" value="30 мая 2019, 15:28" />
                      <MetadataField label="Плановая дата решения" value="30 мая 2019, 17:28" infoIcon />
                      <MetadataField label="Плановое время решения" value="30 мая 2019, 17:28" infoIcon />
                      <MetadataField label="Время выполнения (ч)" value="[не указано]" infoIcon editable />
                      <MetadataField label="Плановая трудоемкость (ч)" value="[не указано]" infoIcon editable />

                      <div className="pt-4 border-t border-[#EBEBEA]">
                        <MetadataField label="Тип заявки" value="Консультация" editable />
                        <MetadataField label="Приоритет" value="Обычный" editable />
                      </div>

                      <div className="pt-4 border-t border-[#EBEBEA]">
                        <MetadataField label="Способ регистрации" value="Диспетчер" infoIcon />
                        <div className="flex items-center justify-between mt-4">
                          <div className="text-[#6B6B6B] text-sm">Исполнители</div>
                          <div className="flex items-center">
                            <Button variant="ghost" size="sm" className="text-[#6B6B6B] h-6 px-1">
                              <RefreshCw className="w-3 h-3" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-[#6B6B6B] hover:bg-green-600 hover:text-white h-6 px-1">
                              <Edit className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="mt-2 p-2 bg-white border border-[#EBEBEA] rounded-md">
                          <div className="text-sm">Модераторы</div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-[#EBEBEA]">
                        <MetadataField label="Наблюдатели" value="[не указано]" infoIcon editable />
                        <div className="mt-4">
                          <Button className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white w-full">
                            <Plus className="w-4 h-4 mr-2" />
                            Наблюдать
                          </Button>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-[#EBEBEA]">
                        <div className="text-[#6B6B6B] text-sm">Автор</div>
                        <div className="text-[#37352F] mt-1">Карманов Алексей</div>
                      </div>
                    </div>  
                    </div>
                    
                  </div> {/* End of Right Column */}
                </div>
              </div>
            </div>
          </div>
  )
}

interface TicketFieldProps {
  label: string
  value: string
  editable?: boolean
  infoIcon?: boolean
}

function TicketField({ label, value, editable = false, infoIcon = false }: TicketFieldProps) {
  return (
    // Removed border-t from TicketField, grid gap will provide separation
    <div className="flex items-start py-2"> {/* Original classes: "flex items-start py-2 border-t border-[#EBEBEA]" */}
      <div className="w-64 text-[#6B6B6B] text-sm flex items-center">
        {label}
        {infoIcon && <Info className="w-3 h-3 ml-1 text-[#6B6B6B]" />}
      </div>
      <div className="flex-1 text-[#37352F]">{value}</div>
      {editable && (
        <button className="text-[#6B6B6B]">
          <Edit className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}

interface MetadataFieldProps {
  label: string
  value: string
  infoIcon?: boolean
  editable?: boolean
}

function MetadataField({ label, value, infoIcon = false, editable = false }: MetadataFieldProps) {
  return (
    <div className="mb-3">
      <div className="flex items-center justify-between">
        <div className="text-[#6B6B6B] text-sm flex items-center">
          {label}
          {infoIcon && <Info className="w-3 h-3 ml-1 text-[#6B6B6B]" />}
        </div>
        {editable && (
          <button className="text-[#6B6B6B] hover:bg-green-600 hover:text-white">
            <Edit className="w-3 h-3" />
          </button>
        )}
      </div>
      <div className="text-[#37352F] mt-1">{value}</div>
    </div>
  )
}
