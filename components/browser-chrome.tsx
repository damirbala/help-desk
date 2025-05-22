export function BrowserChrome() {
  return (
    <div className="bg-gray-100 p-1 border-b border-gray-200">
      <div className="flex items-center gap-1">
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="mx-auto bg-white rounded-md px-2 py-0.5 text-xs text-gray-500 border border-gray-200">
          okdesk.com
        </div>
      </div>
    </div>
  )
}
