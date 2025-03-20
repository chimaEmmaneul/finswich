import { ApplicationIcon, WelcomeIcon } from "@/icon/icon";

export default function TabNavigation() {
  return (
    <div className="flex items-start gap-4  bg-white my-4 overflow-x-auto">
      <div className="flex items-center gap-2 px-8 py-2.5 rounded-[9px] bg-[#F4F2F2]">
        <WelcomeIcon />
        <span className="text-[#797D8C] text-sm">Welcome</span>
      </div>

      <div className="flex items-center gap-2 px-8 py-2.5 rounded-[9px] bg-[#F4F2F2]">
        <ApplicationIcon />
        <span className="text-[#797D8C] text-sm">Applications</span>
      </div>

      <div className="flex items-center gap-2 px-8 py-2.5 rounded-[9px] bg-white shadow-sm border border-[#F4F2F2]">
        <span className="text-[#797D8C] text-sm whitespace-nowrap">Instance App</span>
        <svg className="w-4 h-4 text-[#797D8C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path strokeLinecap="round" strokeWidth="2" d="M15 9l-6 6M9 9l6 6" />
        </svg>
      </div>

      <div className="flex items-center gap-2 px-8 py-2.5 rounded-[9px] bg-[#F4F2F2]">
        <span className="text-[#797D8C] text-sm whitespace-nowrap">Instance App</span>
      </div>
    </div>
  )
}

