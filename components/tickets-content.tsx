import { TicketsFilter } from "@/components/tickets-filter"
import { TicketsTable } from "@/components/tickets-table"

export function TicketsContent() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <TicketsFilter />
      <TicketsTable />
    </div>
  )
}
