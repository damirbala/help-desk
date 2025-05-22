export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-[#EBEBEA] border-t-[#2383E2] rounded-full animate-spin"></div>
        <p className="mt-4 text-[#6B6B6B]">Загрузка...</p>
      </div>
    </div>
  )
}
