"use client" // Make it a client component

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation" // Import usePathname
import { AlertCircle, BarChart2, BookOpen, FileText, Grid, Layers, PieChart, Settings, User, Users } from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()

  const sidebarLinks = [
    { icon: <AlertCircle className="w-5 h-5" />, label: "Заявки", href: "/ticket" },
    { icon: <User className="w-5 h-5" />, label: "Клиенты", href: "/clients" },
    // { icon: <FileText className="w-5 h-5" />, label: "Договоры", href: "#" },
    { icon: <Grid className="w-5 h-5" />, label: "Объекты", href: "#" },
    { icon: <Layers className="w-5 h-5" />, label: "Оборудование", href: "#" },
    // { icon: <BookOpen className="w-5 h-5" />, label: "База знаний", href: "#" },
    { icon: <Users className="w-5 h-5" />, label: "Сотрудники", href: "#" },
    // { icon: <BarChart2 className="w-5 h-5" />, label: "Бенчмаркинг", href: "#" },
    { icon: <PieChart className="w-5 h-5" />, label: "Отчеты", href: "#" },
  ]

  const settingsLink = { icon: <Settings className="w-5 h-5" />, label: "Настройки", href: "#" }

  return (
    <div className="w-24 bg-[#F7F7F7] flex flex-col border-r border-[#EBEBEA]">
      {sidebarLinks.map((link) => (
        <SidebarItem
          key={link.href + link.label}
          icon={link.icon}
          label={link.label}
          href={link.href}
          active={link.href !== "#" && pathname.startsWith(link.href)}
        />
      ))}
      <div className="mt-auto">
        <SidebarItem
          icon={settingsLink.icon}
          label={settingsLink.label}
          href={settingsLink.href}
          active={settingsLink.href !== "#" && pathname.startsWith(settingsLink.href)}
        />
      </div>
    </div>
  )
}

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  href: string
  active?: boolean
}

function SidebarItem({ icon, label, href, active = false }: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center py-3 text-xs ${
        active ? "bg-[#EBEBEA] text-[#37352F] font-medium" : "text-[#6B6B6B] hover:bg-[#EBEBEA] hover:text-[#37352F]"
      }`}
    >
      <div className="w-10 h-10 rounded-md flex items-center justify-center mb-1">{icon}</div>
      <span>{label}</span>
    </Link>
  )
}
