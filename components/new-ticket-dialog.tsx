"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { CalendarIcon, Info, X } from "lucide-react"
import { format } from "date-fns"
import { ru } from "date-fns/locale"
import { cn } from "@/lib/utils"
import { RichTextEditor } from "@/components/rich-text-editor"

interface NewTicketDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function NewTicketDialog({ isOpen, onClose }: NewTicketDialogProps) {
  const [plannedDate, setPlannedDate] = useState<Date | undefined>(undefined)
  const [isRecurring, setIsRecurring] = useState(false)
  const [description, setDescription] = useState("")

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/20 z-50 flex items-center justify-center overflow-y-auto">
      <div className="bg-white border border-[#EBEBEA] rounded-md shadow-md w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-[#EBEBEA]">
          <h2 className="text-xl font-medium text-[#37352F]">Новая заявка</h2>
          <button onClick={onClose} className="text-[#6B6B6B] hover:bg-[#F7F7F7] p-1 rounded">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 flex">
          {/* Left section */}
          <div className="flex-1 pr-6 border-r border-[#EBEBEA]">
            <div className="space-y-6">
              {/* Subject - Full width */}
              <div className="space-y-2">
                <label className="text-sm text-[#6B6B6B] flex items-center">* Тема</label>
                <Input
                  className="w-full border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2]"
                  placeholder="Тема"
                />
              </div>

              {/* Two-column layout for the form fields */}
              <div className="space-y-6">
                <div className="flex">
                  <div className="w-1/2 pr-3">
                    <label className="text-sm text-[#6B6B6B] flex items-center">
                      Тип заявки
                      <Info className="h-3.5 w-3.5 ml-1 text-[#6B6B6B]" />
                    </label>
                    <Select defaultValue="consultation">
                      <SelectTrigger className="w-full border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2] mt-2">
                        <SelectValue placeholder="Консультация" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-[#EBEBEA]">
                        <SelectItem
                          value="consultation"
                          className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]"
                        >
                          Консультация
                        </SelectItem>
                        <SelectItem value="repair" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                          Ремонт
                        </SelectItem>
                        <SelectItem
                          value="installation"
                          className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]"
                        >
                          Установка
                        </SelectItem>
                        <SelectItem value="support" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                          Техподдержка
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-1/2 pl-3">
                    <label className="text-sm text-[#6B6B6B] flex items-center">
                      Приоритет
                      <Info className="h-3.5 w-3.5 ml-1 text-[#6B6B6B]" />
                    </label>
                    <Select defaultValue="normal">
                      <SelectTrigger className="w-full border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2] mt-2">
                        <SelectValue placeholder="Обычный" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-[#EBEBEA]">
                        <SelectItem value="high" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                          Высокий
                        </SelectItem>
                        <SelectItem value="normal" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                          Обычный
                        </SelectItem>
                        <SelectItem value="low" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                          Низкий
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-1/2 pr-3">
                    <label className="text-sm text-[#6B6B6B]">1</label>
                    <Input
                      className="w-full border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2] mt-2"
                      placeholder="Поле 1"
                    />
                  </div>
                  <div className="w-1/2 pl-3">
                    <label className="text-sm text-[#6B6B6B]">2</label>
                    <Input
                      className="w-full border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2] mt-2"
                      placeholder="Поле 2"
                    />
                  </div>
                </div>

                <div className="flex">
                  <div className="w-1/2 pr-3">
                    <label className="text-sm text-[#6B6B6B]">3</label>
                    <Input
                      className="w-full border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2] mt-2"
                      placeholder="Поле 3"
                    />
                  </div>
                  <div className="w-1/2 pl-3">
                    <label className="text-sm text-[#6B6B6B]">4</label>
                    <Input
                      className="w-full border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2] mt-2"
                      placeholder="Поле 4"
                    />
                  </div>
                </div>
              </div>

              {/* Description - Full width */}
              <div className="space-y-2">
                <label className="text-sm text-[#6B6B6B]">Описание</label>
                <RichTextEditor placeholder="Введите описание заявки..." onChange={setDescription} />
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="flex-1 pl-6">
            <div className="space-y-6">
              {/* Client */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-[#6B6B6B]">Клиент</label>
                  <span className="text-sm text-[#2383E2]">Создать</span>
                </div>
                <Select defaultValue="not-specified">
                  <SelectTrigger className="w-full border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2]">
                    <SelectValue placeholder="Не указано" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-[#EBEBEA]">
                    <SelectItem
                      value="not-specified"
                      className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]"
                    >
                      Не указано
                    </SelectItem>
                    <SelectItem value="agroprom" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                      АгроПром Посев
                    </SelectItem>
                    <SelectItem value="agrokomplekt" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                      Агрокомплект
                    </SelectItem>
                    <SelectItem value="logistic" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                      Супер Логистик Плюс
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Contract */}
              <div className="space-y-2">
                <label className="text-sm text-[#6B6B6B]">Договор</label>
                <Select defaultValue="not-specified">
                  <SelectTrigger className="w-full border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2]">
                    <SelectValue placeholder="Не указано" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-[#EBEBEA]">
                    <SelectItem
                      value="not-specified"
                      className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]"
                    >
                      Не указано
                    </SelectItem>
                    <SelectItem value="contract1" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                      Договор №123 от 01.01.2023
                    </SelectItem>
                    <SelectItem value="contract2" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                      Договор №456 от 15.03.2023
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Service Object */}
              <div className="space-y-2">
                <div className="flex items-center">
                  <label className="text-sm text-[#6B6B6B]">Объект обслуживания</label>
                  <Info className="h-3.5 w-3.5 ml-1 text-[#6B6B6B]" />
                </div>
                <Select defaultValue="not-specified">
                  <SelectTrigger className="w-full border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2]">
                    <SelectValue placeholder="Не указано" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-[#EBEBEA]">
                    <SelectItem
                      value="not-specified"
                      className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]"
                    >
                      Не указано
                    </SelectItem>
                    <SelectItem value="office1" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                      Офис на Ленина
                    </SelectItem>
                    <SelectItem value="warehouse" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                      Склад №3
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Equipment */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <label className="text-sm text-[#6B6B6B]">Оборудование</label>
                    <Info className="h-3.5 w-3.5 ml-1 text-[#6B6B6B]" />
                  </div>
                  <span className="text-sm text-[#2383E2]">Создать</span>
                </div>
                <Select defaultValue="not-specified">
                  <SelectTrigger className="w-full border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2]">
                    <SelectValue placeholder="Не указано" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-[#EBEBEA]">
                    <SelectItem
                      value="not-specified"
                      className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]"
                    >
                      Не указано
                    </SelectItem>
                    <SelectItem value="server" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                      Сервер Dell PowerEdge
                    </SelectItem>
                    <SelectItem value="printer" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                      Принтер HP LaserJet
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Responsible Employee */}
              <div className="space-y-2">
                <label className="text-sm text-[#6B6B6B]">Ответственный сотрудник</label>
                <Select defaultValue="moderator">
                  <SelectTrigger className="w-full border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2]">
                    <SelectValue placeholder="Модератор" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-[#EBEBEA]">
                    <SelectItem value="moderator" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                      Модератор
                    </SelectItem>
                    <SelectItem value="ivanovskiy" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                      Ивановский С. Ф.
                    </SelectItem>
                    <SelectItem value="ionnikov" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                      Ионников Ф. И.
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Planned Resolution Date */}
              <div className="space-y-2">
                <div className="flex items-center">
                  <label className="text-sm text-[#6B6B6B]">Плановая дата решения</label>
                  <Info className="h-3.5 w-3.5 ml-1 text-[#6B6B6B]" />
                </div>
                <div className="flex items-center gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-[140px] justify-start text-left font-normal border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2]",
                          !plannedDate && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {plannedDate ? format(plannedDate, "yyyy/MM/dd", { locale: ru }) : "Выберите дату"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white border-[#EBEBEA]" align="start">
                      <Calendar
                        mode="single"
                        selected={plannedDate}
                        onSelect={setPlannedDate}
                        initialFocus
                        className="bg-white"
                      />
                    </PopoverContent>
                  </Popover>
                  <Input
                    type="number"
                    min="0"
                    max="23"
                    className="w-16 border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2]"
                    placeholder="10"
                  />
                  <Input
                    type="number"
                    min="0"
                    max="59"
                    className="w-16 border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2]"
                    placeholder="27"
                  />
                </div>
                <Button variant="outline" className="mt-1 border-[#EBEBEA] bg-[#F7F7F7] hover:bg-white text-[#6B6B6B]">
                  Указать вручную
                </Button>
              </div>

              {/* Recurring Ticket */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <label className="text-sm text-[#6B6B6B]">Повторяющаяся заявка</label>
                    <Info className="h-3.5 w-3.5 ml-1 text-[#6B6B6B]" />
                  </div>
                  <Switch
                    checked={isRecurring}
                    onCheckedChange={setIsRecurring}
                    className="data-[state=checked]:bg-[#2383E2]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-0 mt-8 flex items-center gap-2">
          <Button className="bg-[#0F7B6C] hover:bg-[#0A6258] text-white rounded">Создать</Button>
          <Button
            variant="outline"
            className="border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] text-[#6B6B6B]"
            onClick={onClose}
          >
            Отмена
          </Button>
          <div className="ml-auto text-sm text-[#6B6B6B]">* — обязательное поле</div>
        </div>
      </div>
    </div>
  )
}
