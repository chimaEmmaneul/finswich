"use client"

import { useState } from "react"
import { Copy } from "lucide-react"

export interface TransactionRecord {
  id: string
  amount: number
  exchangeRate: string
  reference: string
  senderEmail: string
  timestamp: string
  balance: number
  fee: number
}

interface TransactionRecordsTableProps {
  records: TransactionRecord[]
}

export default function TransactionRecordsTable({ records }: TransactionRecordsTableProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Records</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full  border-separate border-spacing-y-3">
          <thead>
            <tr>
              <th className="text-left px-4 py-2 text-sm font-medium text-gray-500">Amount</th>
              <th className="text-left px-4 py-2 text-sm font-medium text-gray-500">Exchange rate</th>
              <th className="text-left px-4 py-2 text-sm font-medium text-gray-500">Reference</th>
              <th className="text-left px-4 py-2 text-sm font-medium text-gray-500">Sender's Email</th>
              <th className="text-left px-4 py-2 text-sm font-medium text-gray-500">Timestamp</th>
              <th className="text-left px-4 py-2 text-sm font-medium text-gray-500">Balance</th>
              <th className="text-left px-4 py-2 text-sm font-medium text-gray-500">Fee</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id} className="bg-white">
                <td
                  className={`px-4 py-4 text-sm border border-gray-100 rounded-l-2xl ${record.amount >= 0 ? "text-blue-600 font-medium" : "text-red-600 font-medium"}`}
                >
                  {record.amount >= 0 ? "+" : "-"}${Math.abs(record.amount).toFixed(2)}
                </td>
                <td className="px-4 py-4 text-sm text-gray-700 border-t border-b border-gray-100">
                  {record.exchangeRate}
                </td>
                <td className="px-4 py-4 text-sm text-gray-700 border-t border-b border-gray-100">
                  <div className="flex items-center gap-1">
                    <span className="truncate max-w-[100px]">{record.reference}</span>
                    <button
                      onClick={() => copyToClipboard(record.reference, record.id)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                    >
                      {copiedId === record.id ? (
                        <span className="text-green-600 text-xs">Copied!</span>
                      ) : (
                        <Copy className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-700 border-t border-b border-gray-100">
                  <span className="truncate max-w-[150px] block">{record.senderEmail}</span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-700 border-t border-b border-gray-100">
                  {record.timestamp}
                </td>
                <td className="px-4 py-4 text-sm text-gray-700 border-t border-b border-gray-100">
                  ${record.balance.toFixed(2)}
                </td>
                <td className="px-4 py-4 text-sm text-gray-700 border-t border-r border-b border-gray-100 rounded-r-2xl">
                  ${record.fee.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

