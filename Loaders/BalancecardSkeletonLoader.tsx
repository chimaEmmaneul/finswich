export default function BalanceCardSkeleton() {
  return (
    <div className="w-full my-4 h-fit py-8 sm:h-[175px] rounded-3xl border bg-[#0B112F] max-[375px]:px-2 px-8 flex items-center overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 justify-between items-center w-full">
        <div className="xl:px-14">
          <div className="h-5 bg-gray-300 rounded w-28 mb-1 lg:mb-4 lg:mx-auto xl:mx-0 animate-pulse"></div>
          <div className="flex lg:flex-col xl:flex-row gap-4 justify-between lg:items-center">
            <div className="h-9 bg-gray-300 rounded w-32 animate-pulse"></div>
            <div className="flex gap-3 flex-shrink-0">
              <div className="h-10 bg-gray-400 rounded-[10px] w-20 animate-pulse"></div>
              <div className="h-10 bg-gray-400 rounded-[10px] w-20 animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="xl:px-16">
          <div className="h-5 bg-gray-300 rounded w-20 mb-1 lg:mb-4 lg:mx-auto xl:mx-0 animate-pulse"></div>
          <div className="flex lg:flex-col xl:flex-row gap-4 justify-between lg:items-center">
            <div className="h-9 bg-gray-300 rounded w-24 animate-pulse"></div>
            <div className="h-10 bg-gray-300 rounded-[10px] w-24 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}



