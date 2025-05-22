export interface Ticket {
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

export interface User {
  id: string
  name: string
  avatar?: string
  initials: string
  online: boolean
}

export interface Client {
  id: string
  name: string
  color?: "red" | "green" | "yellow" | "gray" | "default"
}
