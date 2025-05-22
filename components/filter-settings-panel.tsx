"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, Check, X } from "lucide-react"
import { format } from "date-fns"
import { ru } from "date-fns/locale"
import { cn } from "@/lib/utils"

interface FilterSettingsPanelProps {
  isOpen: boolean
  onClose: () => void
}

export function FilterSettingsPanel({ isOpen, onClose }: FilterSettingsPanelProps) {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)
  const [isOverdue, setIsOverdue] = useState(false)

  if (!isOpen) return null

  return (
    <div className="bg-white border border-[#EBEBEA] rounded-b-md shadow-sm w-full overflow-hidden transition-all duration-300 ease-in-out">
      <div className="p-4">
        <div className="grid grid-cols-3 gap-6">
          {/* Status filter */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm text-[#6B6B6B]">По статусу</label>
              <button className="text-[#6B6B6B] hover:bg-[#F7F7F7] p-1 rounded">
                <X className="h-3 w-3" />
              </button>
            </div>
            <Select defaultValue="not-specified">
              <SelectTrigger className="w-full border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2]">
                <SelectValue placeholder="Не указано" />
              </SelectTrigger>
              <SelectContent className="bg-white border-[#EBEBEA]">
                <SelectItem value="not-specified" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                  Не указано
                </SelectItem>
                <SelectItem value="open" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                  Открыта
                </SelectItem>
                <SelectItem value="closed" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                  Закрыта
                </SelectItem>
                <SelectItem value="field-visit" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                  Выезд на объект
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Responsible person filter */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm text-[#6B6B6B]">По ответственному</label>
              <button className="text-[#6B6B6B] hover:bg-[#F7F7F7] p-1 rounded">
                <X className="h-3 w-3" />
              </button>
            </div>
            <Select defaultValue="not-specified">
              <SelectTrigger className="w-full border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2]">
                <SelectValue placeholder="Не указано" />
              </SelectTrigger>
              <SelectContent className="bg-white border-[#EBEBEA]">
                <SelectItem value="not-specified" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                  Не указано
                </SelectItem>
                <SelectItem value="ivanovskiy" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                  Ивановский С. Ф.
                </SelectItem>
                <SelectItem value="ionnikov" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                  Ионников Ф. И.
                </SelectItem>
                <SelectItem value="sviridov" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                  Свиридов Т. И.
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Registration date filter */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm text-[#6B6B6B]">По дате регистрации</label>
              <button className="text-[#6B6B6B] hover:bg-[#F7F7F7] p-1 rounded">
                <X className="h-3 w-3" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2]",
                      !startDate && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "dd.MM.yyyy", { locale: ru }) : "Не указано"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white border-[#EBEBEA]" align="start">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    initialFocus
                    className="bg-white"
                  />
                </PopoverContent>
              </Popover>
              <span className="text-[#6B6B6B]">-</span>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2]",
                      !endDate && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "dd.MM.yyyy", { locale: ru }) : "Не указано"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white border-[#EBEBEA]" align="start">
                  <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus className="bg-white" />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Client filter */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm text-[#6B6B6B]">По клиенту</label>
              <button className="text-[#6B6B6B] hover:bg-[#F7F7F7] p-1 rounded">
                <X className="h-3 w-3" />
              </button>
            </div>
            <Select defaultValue="not-specified">
              <SelectTrigger className="w-full border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2]">
                <SelectValue placeholder="Не указано" />
              </SelectTrigger>
              <SelectContent className="bg-white border-[#EBEBEA]">
                <SelectItem value="not-specified" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
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
                <SelectItem value="agro-nova" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                  Агро-Нова
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Ticket type filter */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm text-[#6B6B6B]">По типу заявки</label>
              <button className="text-[#6B6B6B] hover:bg-[#F7F7F7] p-1 rounded">
                <X className="h-3 w-3" />
              </button>
            </div>
            <div className="flex gap-1">
              <Select defaultValue="selected">
                <SelectTrigger className="w-full border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2]">
                  <SelectValue placeholder="Выбрано (1)" />
                </SelectTrigger>
                <SelectContent className="bg-white border-[#EBEBEA]">
                  <SelectItem value="selected" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                    Выбрано (1)
                  </SelectItem>
                  <SelectItem value="repair" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                    Ремонт
                  </SelectItem>
                  <SelectItem value="installation" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                    Установка
                  </SelectItem>
                  <SelectItem value="consultation" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                    Консультация
                  </SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                size="icon"
                className="border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2]"
              >
                <Check className="h-4 w-4 text-[#6B6B6B]" />
              </Button>
            </div>
          </div>

          {/* Add filter */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm text-[#6B6B6B]">Добавить фильтр</label>
            </div>
            <Select defaultValue="not-specified">
              <SelectTrigger className="w-full border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2]">
                <SelectValue placeholder="Не указано" />
              </SelectTrigger>
              <SelectContent className="bg-white border-[#EBEBEA]">
                <SelectItem value="not-specified" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                  Не указано
                </SelectItem>
                <SelectItem value="priority" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                  По приоритету
                </SelectItem>
                <SelectItem value="deadline" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                  По сроку выполнения
                </SelectItem>
                <SelectItem value="equipment" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                  По оборудованию
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Overdue checkbox */}
        <div className="mt-6 flex items-center space-x-2">
          <Checkbox
            id="overdue"
            checked={isOverdue}
            onCheckedChange={(checked) => setIsOverdue(checked as boolean)}
            className="border-[#EBEBEA] data-[state=checked]:bg-[#2383E2] data-[state=checked]:border-[#2383E2]"
          />
          <label
            htmlFor="overdue"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#37352F]"
          >
            Просроченные
          </label>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-[#EBEBEA] pt-4">
          <div className="flex items-center gap-2">
            <Button className="bg-[#0F7B6C] hover:bg-[#0A6258] text-white flex items-center gap-1 rounded">
              Сохранить фильтр
            </Button>
            <Button
              variant="outline"
              className="border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] text-[#6B6B6B]"
              onClick={onClose}
            >
              <X className="h-4 w-4 mr-1" />
              Отмена
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#6B6B6B]">Автообновление списка:</span>
              <Select defaultValue="1">
                <SelectTrigger className="w-32 border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2]">
                  <SelectValue placeholder="1 минута" />
                </SelectTrigger>
                <SelectContent className="bg-white border-[#EBEBEA]">
                  <SelectItem value="1" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                    1 минута
                  </SelectItem>
                  <SelectItem value="5" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                    5 минут
                  </SelectItem>
                  <SelectItem value="10" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                    10 минут
                  </SelectItem>
                  <SelectItem value="30" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                    30 минут
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-[#6B6B6B]">Сортировать по:</span>
              <Select defaultValue="registration">
                <SelectTrigger className="w-48 border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2]">
                  <SelectValue placeholder="времени регистрации" />
                </SelectTrigger>
                <SelectContent className="bg-white border-[#EBEBEA]">
                  <SelectItem value="registration" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                    времени регистрации
                  </SelectItem>
                  <SelectItem value="status" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                    статусу
                  </SelectItem>
                  <SelectItem value="priority" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                    приоритету
                  </SelectItem>
                  <SelectItem value="client" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                    клиенту
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-[#6B6B6B]">На странице:</span>
              <Select defaultValue="20">
                <SelectTrigger className="w-32 border-[#EBEBEA] bg-white hover:bg-[#F7F7F7] focus:ring-[#2383E2]">
                  <SelectValue placeholder="20 строк" />
                </SelectTrigger>
                <SelectContent className="bg-white border-[#EBEBEA]">
                  <SelectItem value="10" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                    10 строк
                  </SelectItem>
                  <SelectItem value="20" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                    20 строк
                  </SelectItem>
                  <SelectItem value="50" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                    50 строк
                  </SelectItem>
                  <SelectItem value="100" className="text-[#37352F] focus:bg-[#F7F7F7] focus:text-[#37352F]">
                    100 строк
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
