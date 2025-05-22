import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Search } from "lucide-react"
import Link from "next/link"

export interface TicketRowProps {
  id: string
  subject: string
  assignee: string
  client: string
  status: string
  priority?: "high" | "medium" | "normal"
  clientColor?: "red" | "green" | "yellow" | "gray" | "default"
  statusColor?: "blue" | "gray" | "orange"
  expanded?: boolean
}

export function TicketRow({
  id,
  subject,
  assignee,
  client,
  status,
  priority = "normal",
  clientColor = "default",
  statusColor = "blue",
  expanded = false,
}: TicketRowProps) {
  // Notion-like muted colors for priorities
  const priorityColor = {
    high: "text-[#E03E3E]",
    medium: "text-[#D9730D]",
    normal: "text-[#6B6B6B]",
  }

  // Notion-like muted colors for client dots
  const clientDotColor = {
    red: "bg-[#E03E3E]",
    green: "bg-[#0F7B6C]",
    yellow: "bg-[#D9730D]",
    gray: "bg-[#9B9A97]",
    default: "hidden",
  }

  // Notion-like muted colors for status badges
  const statusBgColor = {
    blue: "bg-[#E6F2FF] text-[#2383E2] border border-[#D3E5FD]",
    gray: "bg-[#F1F1F0] text-[#787774] border border-[#E3E3E2]",
    orange: "bg-[#FAEBDD] text-[#D9730D] border border-[#F7E2CF]",
  }

  return (
    <Link href={`/ticket/${id}`} className="block">
      <div
        className={`grid grid-cols-5 border-b border-[#EBEBEA] text-sm hover:bg-[#F7F7F7] ${
          expanded ? "bg-[#F7F7F7]" : ""
        }`}
      >
        <div className="p-2 flex items-center gap-2 border-r border-[#EBEBEA]">
          {expanded && <ChevronDown className="w-4 h-4 text-[#6B6B6B]" />}
          {!expanded && <span className="w-4"></span>}
          <span className={`${priorityColor[priority]}`}>! {id}</span>
        </div>
        <div className="p-2 border-r border-[#EBEBEA] text-[#37352F]">{subject}</div>
        <div className="p-2 flex items-center gap-1 border-r border-[#EBEBEA]">
          <span className="text-[#37352F]">{assignee}</span>
          <div className="w-4 h-4 rounded-full border border-[#EBEBEA] flex items-center justify-center ml-1">
            <div className="w-2 h-2 rounded-full bg-[#0F7B6C]"></div>
          </div>
        </div>
        <div className="p-2 flex items-center gap-1 border-r border-[#EBEBEA]">
          <div className={`w-2 h-2 rounded-full ${clientDotColor[clientColor]} mr-1`}></div>
          <span className="text-[#37352F]">{client}</span>
        </div>
        <div className="p-2 flex items-center justify-between">
          <Badge className={`font-normal ${statusBgColor[statusColor]} rounded px-2 py-0.5`}>{status}</Badge>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-6 w-6 text-[#6B6B6B] hover:bg-[#EBEBEA]">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}
