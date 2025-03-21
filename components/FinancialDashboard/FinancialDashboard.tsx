"use client"
import { useQuery } from "@tanstack/react-query"
import { ArrowLeft, ArrowUp, ArrowDown } from "lucide-react"
import Image from "next/image"

import { CoppyIcon, RecordIcon, WalletBalanceIcon, } from "@/icon/icon"
import { ChartDataItem, FinancialData } from "@/types/types"
import FinancialChart from "./Chart"
import BottomTabNavigator from "./BottomTabNavigator"



const fetchFinancialData = async (): Promise<FinancialData> => {
  const [userResponse, postsResponse] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1"),
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1"),
  ])

  if (!userResponse.ok || !postsResponse.ok) {
    throw new Error("Failed to fetch data")
  }

  const user = await userResponse.json()

  return {
    user: {
      name: user.name,
      uid: "2348101010181",
    },
    balance: {
      available: 20000.32,
      income: 20000.32,
      expense: 20000.32,
    },
    transactions: {
      months: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
      income: [20000, 25000, 18000, 30000, 22000, 25000, 20000],
      expense: [15000, 20000, 12000, 25000, 15000, 20000, 15000],
    },
  }
}


const formatChartData = (data: FinancialData): ChartDataItem[] => {
  return data.transactions.months.map((month, index) => ({
    month,
    income: data.transactions.income[index],
    expense: data.transactions.expense[index],
  }))
}

const skeletonChartData: ChartDataItem[] = [
  { month: "JAN", income: 15000, expense: 10000 },
  { month: "FEB", income: 20000, expense: 15000 },
  { month: "MAR", income: 18000, expense: 12000 },
  { month: "APR", income: 25000, expense: 20000 },
  { month: "MAY", income: 22000, expense: 15000 },
  { month: "JUN", income: 20000, expense: 18000 },
  { month: "JUL", income: 18000, expense: 12000 },
]
//for creating skeleton loader

export default function FinancialDashboard(): JSX.Element {

  const { data, isLoading, isError } = useQuery<FinancialData, Error>({
    queryKey: ["financialData"],
    queryFn: fetchFinancialData,
  })

  const chartData = data ? formatChartData(data) : skeletonChartData



  return (
    <div className="w-full max-w-full max-lg:mx-auto lg:max-w-[300px] mt-8 lg:mt-0  min-h-screen">
      <div className="bg-[#0037A1] text-white p-6 pt-2  pb-8 rounded-[20px] bg-shadow relative">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <ArrowLeft className="mr-3" size={20} />
            {isLoading ? (
              <div className="h-6 w-40 bg-white/20 rounded-md animate-pulse"></div>
            ) : (
              <h1 className="text-sm font-medium">Hi {data?.user.name}</h1>
            )}
          </div>
          <Image src="/img/financialdashboard.png" alt="FinancialIcon" width={50} height={50} />

        </div>

        <div className="flex flex-col items-center text-center mb-6">
          <p className="text-[10px] opacity-80 mb-1">Available Balance</p>
          {isLoading ? (
            <div className="h-9 w-36 bg-white/20 rounded-md animate-pulse"></div>
          ) : (
            <h2 className="text-lg font-bold">${data?.balance.available.toFixed(2)}</h2>
          )}

          <button className=" flex items-center mt-4 gap-2">
            <span className="bg-[#206CFF70] h-[30px] w-[30px] rounded-full flex items-center justify-center">
              <WalletBalanceIcon />
            </span>

            <span className="text-sm font-bold">Fund</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[20px] -mt-10 relative z-10 p-5 pb-24 shadow-lg">
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6 flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500 mb-1">Finswitch UID</p>
            {isLoading ? (
              <div className="h-5 w-28 bg-gray-200 rounded-md animate-pulse"></div>
            ) : (
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-[#6F6F6F]" >{data?.user.uid}</p>
                <CoppyIcon />
              </div>
            )}
          </div>
          <div className="flex flex-col items-center">
            <RecordIcon />
            <span className="text-sm text-[#6F6F6F]">Records</span>
          </div>
        </div>

        {/* Overview Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xs font-medium text-[#6F6F6F] ">Overview</h3>
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-sm mr-1"></div>
                <span className="text-xs text-gray-600">Income</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#0a2463] rounded-sm mr-1"></div>
                <span className="text-xs text-gray-600">Expense</span>
              </div>
            </div>
          </div>

          <FinancialChart chartData={chartData} />

          <div className="grid grid-cols-2 gap-4">
            {isLoading ? (
              <>
                <div className="bg-gray-200 rounded-xl p-4 animate-pulse h-24"></div>
                <div className="bg-gray-300 rounded-xl p-4 animate-pulse h-24"></div>
              </>
            ) : (
              <>
                <div className="bg-[#0A59F3] text-white rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <ArrowUp className="bg-white/20 p-1 rounded-full" size={20} />
                  </div>
                  <p className="text-sm mb-1">Income</p>
                  <p className=" font-bold">${data?.balance.income.toFixed(2)}</p>
                </div>

                <div className="bg-[#022578] text-white rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <ArrowDown className="bg-white/20 p-1 rounded-full" size={20} />
                  </div>
                  <p className="text-sm mb-1">Expense</p>
                  <p className=" font-bold">${data?.balance.expense.toFixed(2)}</p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Error state */}
        {isError && (
          <div className="bg-red-50 text-red-500 p-4 rounded-lg mb-6">
            <p className="font-medium">Error loading data</p>
            <p className="text-sm">Please try again later</p>
          </div>
        )}

        <BottomTabNavigator />
      </div>
    </div>
  )
}

