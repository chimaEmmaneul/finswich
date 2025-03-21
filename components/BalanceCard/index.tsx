'use client'
import { useQuery } from "@tanstack/react-query";

import { BalanceRecords } from "@/types/types";
import { fetchBalanceData } from "@/app/api/fetchBalanceData";
import BalanceCardSkeleton from "@/Loaders/BalancecardSkeletonLoader";

export default function BalanceCard() {

  const { data, isLoading, isError, error } = useQuery<BalanceRecords, Error>({
    queryKey: ["balanceData"],
    queryFn: fetchBalanceData,
  })
  console.log(data, "data", isLoading)

  if (isLoading) {
    return (
      <BalanceCardSkeleton />
    )
  }

  if (isError) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    )
  }

  return (
    <div className="w-full py-4">
      <div className="w-full h-fit py-8 sm:h-[175px] rounded-3xl border  bg-[#0B112F] max-[375px]:px-2 px-8  flex items-center overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 justify-between items-center w-full ">

          <div className=" xl:px-14">
            <h2 className="text-white  font-medium mb-1 lg:mb-4 lg:text-center xl:text-left">
              NGN Balance</h2>
            <div className="flex lg:flex-col xl:flex-row  gap-4 justify-between lg:items-center ">
              <p className="text-white text-2xl md:text-3xl font-bold h-full">{`₦${data?.balance}`}</p>

              <div className="flex  gap-3 flex-shrink-0">
                <button className="px-6 md:px-8 py-2 md:py-2.5 bg-[#1A3C5B] text-white text-sm rounded-[10px] hover:bg-[#234a5d] transition-colors ">
                  Fund
                </button>

                <button className="px-6 md:px-8 py-2 md:py-2.5 bg-[#44CF95] text-white text-sm rounded-[10px] hover:bg-[#34c087] transition-colors ">
                  Swap
                </button>
              </div>
            </div>
          </div>

          <div className=" xl:px-16">
            <h2 className="text-white  font-medium mb-1 lg:mb-4 lg:text-center xl:text-left">
              Earnings</h2>
            <div className="flex lg:flex-col xl:flex-row  gap-4 justify-between lg:items-center ">
              <p className="text-white text-2xl md:text-3xl font-bold">{`₦${data?.earnings}`}</p>

              <button className="px-6  md:px-8 py-2 md:py-2.5 bg-[#1A3C5B] text-white text-sm rounded-[10px] hover:bg-[#234a5d] transition-colors ">
                Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



