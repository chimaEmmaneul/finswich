export function TransactionTableSkeleton() {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Records</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-3">
          <thead>
            <tr>
              {["Amount", "Exchange rate", "Reference", "Sender's Email", "Timestamp", "Balance", "Fee"].map((header) => (
                <th key={header} className="text-left px-4 py-2 text-sm font-bold text-[#5B5B5B]">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(3)].map((_, index) => (
              <tr key={index} className="bg-white">
                <td className="px-4 py-4 border border-gray-100 rounded-l-2xl">
                  <div className="h-5 w-20 bg-gray-200 rounded animate-pulse"></div>
                </td>
                <td className="px-4 py-4 border-t border-b border-gray-100">
                  <div className="h-5 w-24 bg-gray-200 rounded animate-pulse"></div>
                </td>
                <td className="px-4 py-4 border-t border-b border-gray-100">
                  <div className="flex items-center gap-1">
                    <div className="h-5 w-28 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </td>
                <td className="px-4 py-4 border-t border-b border-gray-100">
                  <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
                </td>
                <td className="px-4 py-4 border-t border-b border-gray-100">
                  <div className="h-5 w-24 bg-gray-200 rounded animate-pulse"></div>
                </td>
                <td className="px-4 py-4 border-t border-b border-gray-100">
                  <div className="h-5 w-16 bg-gray-200 rounded animate-pulse"></div>
                </td>
                <td className="px-4 py-4 border-t border-r border-b border-gray-100 rounded-r-2xl">
                  <div className="h-5 w-12 bg-gray-200 rounded animate-pulse"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}