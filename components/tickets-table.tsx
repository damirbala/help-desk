import { Filter, Settings } from "lucide-react"
import { TicketRow } from "@/components/ticket-row"

export function TicketsTable() {
  return (
    <>
      {/* Table header */}
      <div className="grid grid-cols-5 bg-[#F7F7F7] border-b border-[#EBEBEA] text-sm text-[#6B6B6B] font-medium">
        <div className="p-2 flex items-center gap-1 border-r border-[#EBEBEA]">
          <span>№ заявки:</span>
          <Filter className="w-4 h-4 text-[#6B6B6B]" />
        </div>
        <div className="p-2 flex items-center gap-1 border-r border-[#EBEBEA]">
          <span>Тема:</span>
        </div>
        <div className="p-2 flex items-center gap-1 border-r border-[#EBEBEA]">
          <span>Ответственный сотрудник:</span>
          <Filter className="w-4 h-4 text-[#6B6B6B]" />
        </div>
        <div className="p-2 flex items-center gap-1 border-r border-[#EBEBEA]">
          <span>Клиент:</span>
          <Filter className="w-4 h-4 text-[#6B6B6B]" />
        </div>
        <div className="p-2 flex items-center gap-1">
          <span>Статус:</span>
          <Filter className="w-4 h-4 text-[#6B6B6B]" />
          <Settings className="w-4 h-4 text-[#6B6B6B] ml-auto" />
        </div>
      </div>

      {/* Table content remains the same, but will be styled by the updated ticket-row component */}
      <div className="flex-1 overflow-auto bg-white">
        <TicketRow
          id="000042"
          priority="high"
          expanded
          subject="Выезд на 10.11.2021"
          assignee="Ионников Ф. И."
          client="АгроПром Посев"
          clientColor="green"
          status="Открыта"
          statusColor="orange"
        />
        <TicketRow
          id="000041"
          priority="high"
          subject="Заявка на установку датчика движения"
          assignee="Ионников Ф. И."
          client="Агрокомплект"
          clientColor="red"
          status="Открыта"
          statusColor="orange"
        />
        <TicketRow
          id="000040"
          priority="medium"
          subject="Изменить параметры настройки"
          assignee="Ионников Ф. И."
          client="Не указано"
          clientColor="gray"
          status="Закрыта"
          statusColor="gray"
        />
        <TicketRow
          id="000039"
          subject="Превышен интервал запроса"
          assignee="Ивановский С. Ф."
          client="Не указано"
          clientColor="gray"
          status="Открыта"
          statusColor="orange"
        />
        <TicketRow
          id="000038"
          subject="Заявка на закупку"
          assignee="Ионников Ф. И."
          client="Клиент Omnicomm интеграция"
          status="Открыта"
          statusColor="orange"
        />
        <TicketRow
          id="000037"
          subject="Поломка"
          assignee="Ивановский С. Ф."
          client="Супер Логистик Плюс"
          clientColor="red"
          status="Открыта"
          statusColor="orange"
        />
        <TicketRow
          id="000036"
          subject="Нет доступа к серверу"
          assignee="Ивановский С. Ф."
          client="Супер Логистик Плюс"
          clientColor="red"
          status="Открыта"
          statusColor="orange"
        />
        <TicketRow
          id="000034"
          priority="high"
          subject="Проверить датчик топлива"
          assignee="Ивановский С. Ф."
          client="АгроПром Посев"
          clientColor="green"
          status="Открыта"
          statusColor="orange"
        />
        <TicketRow
          id="000033"
          priority="high"
          subject="Подготовить доп. соглашение и выставить счет..."
          assignee="Ивановский С. Ф."
          client="Супер Логистик Плюс"
          clientColor="red"
          status="Открыта"
          statusColor="orange"
        />
        <TicketRow
          id="000032"
          expanded
          subject="Не работает датчик"
          assignee="Ионников Ф. И."
          client="АгроПром Посев"
          clientColor="green"
          status="Открыта"
          statusColor="orange"
        />
        <TicketRow
          id="000030"
          subject="Провести обучение по Виалону для нового сотруд..."
          assignee="Ивановский С. Ф."
          client="Супер Логистик Плюс"
          clientColor="red"
          status="Закрыта"
          statusColor="gray"
        />
        <TicketRow
          id="000029"
          subject="Подключение нового ТС Камаз"
          assignee="Ивановский С. Ф."
          client="Агро-Нова"
          clientColor="yellow"
          status="Выезд на объект"
          statusColor="blue"
        />
        <TicketRow
          id="000028"
          subject="Замена датчика пробега"
          assignee="Свиридов Т. И."
          client="АгроПром Посев"
          clientColor="green"
          status="Выезд на объект"
          statusColor="blue"
        />
        <TicketRow
          id="000027"
          subject="Нас интересует решение по отслеживанию манёвр..."
          assignee="Ионников Ф. И."
          client="АгроПром Посев"
          clientColor="green"
          status="Закрыта"
          statusColor="gray"
        />
        <TicketRow
          id="000026"
          priority="medium"
          subject="В��грузка маршрута"
          assignee="Свиридов Т. И."
          client="АгроПром Посев"
          clientColor="green"
          status="Открыта"
          statusColor="orange"
        />
      </div>
    </>
  )
}
