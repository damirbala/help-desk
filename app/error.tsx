"use client"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="bg-white rounded-lg border border-[#EBEBEA] p-8 max-w-md w-full text-center">
        <h2 className="text-xl font-medium text-[#37352F] mb-4">Что-то пошло не так!</h2>
        <p className="text-[#6B6B6B] mb-6">Произошла ошибка при загрузке страницы. Пожалуйста, попробуйте еще раз.</p>
        <Button onClick={reset} className="bg-[#2383E2] hover:bg-[#1B76D4] text-white">
          Попробовать снова
        </Button>
      </div>
    </div>
  )
}
