import React, { useState } from 'react'
import { TabType } from '@/types/types'

import { MoreIcon, PaymentIcon, StoreIcon, WalletBlueIcon } from "@/icon/icon"


const BottomTabNavigator = () => {
  const [activeTab, setActiveTab] = useState<TabType>("wallet")

  const handleTabClick = (tab: TabType): void => {
    setActiveTab(tab)
  }

  return (
    <div className="absolute bottom-0 left-0 right-0  p-3 flex justify-around rounded-b-[30px]">
      {[
        { id: "wallet", icon: WalletBlueIcon, label: "Wallet" },
        { id: "Payment", icon: PaymentIcon, label: "Payment" },
        { id: "Store", icon: StoreIcon, label: "Invoice" },
        { id: "more", icon: MoreIcon, label: "More" },
      ].map((tab) => (
        <div
          key={tab.id}
          className={`flex flex-col gap-1 items-center ${activeTab === tab.id ? "text-blue-500" : "text-gray-500"}`}
          onClick={() => handleTabClick(tab.id as TabType)}
        >
          <span className={`p-2 rounded-full ${activeTab === tab.id ? "bg-[#0A59F3] p-5" : ""}`}>
            <tab.icon />
          </span>
          {activeTab !== tab.id && <span className="text-xs mt-1">{tab.label}</span>}
        </div>
      ))}
    </div>
  )
}

export default BottomTabNavigator