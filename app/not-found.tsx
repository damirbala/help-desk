import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="bg-white rounded-lg border border-[#EBEBEA] p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-[#37352F] mb-4">404</h1>
        <h2 className="text-xl font-medium text-[#37352F] mb-4">Страница не найдена</h2>
        <p className="text-[#6B6B6B] mb-6">Запрашиваемая страница не существует или была перемещена.</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-4 py-2 bg-[#2383E2] hover:bg-[#1B76D4] text-white rounded"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  )
}
