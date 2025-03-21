"use client"

import { useState } from "react"
import { Copy } from "lucide-react"
import { TransactionRecords } from "@/types/types";
import { formatDate } from "@/lib/formatDate";
import { TransactionTableSkeleton } from "@/Loaders/TransactionSkeletonLoader";

interface TransactionRecordsTableProps {
  records: TransactionRecords[]
  loading: boolean;
  isError: boolean
}

export default function TransactionRecordsTable({ records, loading, isError }: TransactionRecordsTableProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  if (loading) {
    return (
      <TransactionTableSkeleton />
    )
  }

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Records</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full  border-separate border-spacing-y-3">
          <thead>
            <tr>
              {["Amount", "Exchange rate", "Reference", "Sender's Email", "Timestamp", "Balance", "Fee"].map((header) => (
                <th key={header} className="text-left px-4 py-2 text-sm font-bold text-[#5B5B5B]">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id} className="bg-white">
                <td
                  className={`px-4 py-4 text-sm border border-[#EBE8FF] rounded-l-2xl ${record.amount >= 0 ? "text-blue-600 font-medium" : "text-red-600 font-medium"}`}
                >
                  {record.amount >= 0 ? "+" : "-"}${Math.abs(record.amount).toFixed(2)}
                </td>
                <td className="px-4 py-4 text-sm text-[#797D8C] font-[500] border-t border-b border-[#EBE8FF]">
                  {record.exchangeRate}
                </td>
                <td className="px-4 py-4 text-sm text-[#797D8C] font-[500] border-t border-b border-[#EBE8FF]">
                  <div className="flex items-center gap-1">
                    <span className="truncate max-w-[100px]">{record.reference}</span>
                    <button
                      onClick={() => copyToClipboard(record.reference, record.id)}
                      className="p-1 hover:bg-[#EBE8FF] rounded transition-colors"
                    >
                      {copiedId === record.id ? (
                        <span className="text-green-600 text-xs">Copied!</span>
                      ) : (
                        <Copy className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-[#797D8C] font-[500] border-t border-b border-[#EBE8FF]">
                  <span className="truncate max-w-[150px] block">{record.senderEmail}</span>
                </td>
                <td className="px-4 py-4 text-sm text-[#797D8C] font-[500] border-t border-b border-[#EBE8FF]">
                  {formatDate(record.timestamp)}
                </td>
                <td className="px-4 py-4 text-sm text-[#797D8C] font-[500] border-t border-b border-[#EBE8FF]">
                  ${record.balance.toFixed(2)}
                </td>
                <td className="px-4 py-4 text-sm text-[#797D8C] font-[500] border-t border-r border-b border-[#EBE8FF] rounded-r-2xl">
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


