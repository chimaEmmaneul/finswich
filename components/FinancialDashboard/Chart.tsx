import React from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from "recharts"

import { ChartDataItem } from '@/types/types'

const FinancialChart = ({ chartData }: { chartData: ChartDataItem[] }) => {

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 shadow-md rounded-md border border-gray-100 text-xs">
          <p className="font-medium">{label}</p>
          <p className="text-blue-500">Income: ${payload[0].value.toLocaleString()}</p>
          <p className="text-[#0a2463]">Expense: ${payload[1].value.toLocaleString()}</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="h-[150px] w-full mb-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#9CA3AF" }} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: "#9CA3AF" }}
            tickFormatter={(value) => (value >= 1000 ? `${Math.round(value / 1000)}K` : value.toString())}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="income" fill="#3B82F6" radius={[2, 2, 0, 0]} barSize={6} />
          <Bar dataKey="expense" fill="#0a2463" radius={[2, 2, 0, 0]} barSize={6} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default FinancialChart