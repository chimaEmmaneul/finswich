export default function BalanceCard() {
  return (
    <div className="w-full py-4">
      <div className="w-full h-fit sm:h-[175px] rounded-3xl border  bg-[#0B112F] px-8  flex items-center overflow-hidden">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 w-full">
          {/* NGN Balance Section */}
          <div className="md:mr-2">
            <h2 className="text-white/80 text-sm font-normal mb-1">NGN Balance</h2>
            <p className="text-white text-2xl md:text-3xl font-bold">₦1,003.94</p>
          </div>

          <div className="flex gap-3 flex-shrink-0">
            <button className="px-6 md:px-8 py-2 md:py-2.5 bg-[#1A3C5B] text-white text-sm rounded-[10px] hover:bg-[#234a5d] transition-colors whitespace-nowrap">
              Fund
            </button>

            <button className="px-6 md:px-8 py-2 md:py-2.5 bg-[#44CF95] text-white text-sm rounded-[10px] hover:bg-[#34c087] transition-colors whitespace-nowrap">
              Swap
            </button>
          </div>

          {/* Earnings Section */}
          <div className="md:ml-auto">
            <h2 className="text-white/80 text-sm font-normal mb-1">Earnings</h2>
            <p className="text-white text-2xl md:text-3xl font-bold">₦100.94</p>
          </div>

          <button className="px-6 md:px-8 py-2 md:py-2.5 bg-[#1A3C5B] text-white text-sm rounded-[10px] hover:bg-[#234a5d] transition-colors whitespace-nowrap md:ml-2">
            Transfer
          </button>
        </div>
      </div>
    </div>
  )
}



