import { AppHeader } from "@/components/app-header"
import { Sidebar } from "@/components/sidebar"
import { tickets } from "@/data/tickets"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, Edit, Info, MessageSquare, Plus, RefreshCw } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col h-screen bg-[#FFFFFF]">
        <AppHeader />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Breadcrumb navigation */}
            <div className="bg-white p-3 border-b border-[#EBEBEA] flex items-center text-sm">
              <Link href="/ticket" className="text-[#2383E2] hover:underline flex items-center">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Назад
              </Link>
              <span className="mx-2 text-[#6B6B6B]">/</span>
              <Link href="/" className="text-[#2383E2] hover:underline">
                Главная
              </Link>
              <span className="mx-2 text-[#6B6B6B]">/</span>
              <Link href="/ticket" className="text-[#2383E2] hover:underline">
                Заявки
              </Link>
              <span className="mx-2 text-[#6B6B6B]">/</span>
              <span className="text-[#6B6B6B]">Заявка №{ticket.id}</span>
            </div>

            <div className="flex-1 overflow-auto">
              {/* Ticket header */}
              <div className="p-4 border-b border-[#EBEBEA] flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-medium text-[#37352F]">{ticket.id}</span>
                  <h1 className="text-xl text-[#37352F]">{ticket.subject}</h1>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="text-[#6B6B6B]">
                    <Edit className="w-4 h-4 mr-1" />
                    Редактировать
                  </Button>
                  <Button className={`${statusColor} hover:opacity-90`}>{ticket.status}</Button>
                </div>
              </div>

              {/* Main content area with two columns */}
              <div className="flex">
                {/* Left column - ticket details */}
                <div className="flex-1 p-4 border-r border-[#EBEBEA]">
                  <div className="space-y-4">
                    {/* Ticket fields */}
                    <TicketField label="Клиент" value={ticket.client} editable />
                    <TicketField label="Договор" value="[не указано]" editable />
                    <TicketField label="Объект обслуживания" value="[не указано]" editable infoIcon />
                    <TicketField label="Ответственный сотрудник" value={ticket.assignee} editable />

                    <div className="flex items-start py-2 border-t border-[#EBEBEA]">
                      <div className="w-64 text-[#6B6B6B] text-sm">Проблема или вопрос</div>
                      <div className="flex-1 text-[#37352F]">Не вижу свои ТС</div>
                      <button className="text-[#6B6B6B]">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>

                    <TicketField
                      label="Клиент получил и понял информацию в полном объеме"
                      value="[не указано]"
                      editable
                    />

                    <TicketField label="Причина отклонения заявки" value="[не указано]" editable />

                    {/* Description section */}
                    <div className="pt-4 border-t border-[#EBEBEA]">
                      <h3 className="text-[#37352F] font-medium mb-2">Описание</h3>
                      <p className="text-[#6B6B6B] text-sm">
                        Подробное описание заявки №{ticket.id} будет отображаться здесь.
                      </p>
                    </div>

                    {/* Tabs section */}
                    <div className="pt-4 mt-6">
                      <Tabs defaultValue="comments">
                        <TabsList className="bg-[#F7F7F7] p-0 border border-[#EBEBEA] rounded-md">
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

                        <div className="p-4 mt-4">
                          <Button className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Комментировать
                          </Button>
                        </div>
                      </Tabs>
                    </div>
                  </div>
                </div>

                {/* Right column - metadata */}
                <div className="w-80 p-4 bg-[#FAFAFA]">
                  <div className="space-y-4">
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
                          <Button variant="ghost" size="sm" className="text-[#6B6B6B] h-6 px-1">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
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
    <div className="flex items-start py-2 border-t border-[#EBEBEA]">
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
          <button className="text-[#6B6B6B]">
            <Edit className="w-3 h-3" />
          </button>
        )}
      </div>
      <div className="text-[#37352F] mt-1">{value}</div>
    </div>
  )
}
