"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


import { cn } from "@/lib/utils"
import { LogoutIcon, NeoBanking, PlugInServicesIcon, RiskControlIcon, SettingsIcon, TransactionIcon, UsersIcon, VasServiceIcon, VirtualCard, WalletIcon } from "@/icon/icon"

export default function SidebarNavigation() {
  const [activeItem, setActiveItem] = useState("neo-banking")

  const menuItems = [
    { id: "wallet", label: "Wallet", icon: WalletIcon, path: "/wallet" },
    { id: "transactions", label: "Transactions", icon: TransactionIcon, path: "/transactions" },
    { id: "vas-services", label: "VAS Services", icon: VasServiceIcon, path: "/vas-services" },
    { id: "virtual-cards", label: "Virtual Cards", icon: VirtualCard, path: "/virtual-cards" },
    {
      id: "neo-banking",
      label: "Neo-Banking",
      icon: NeoBanking,
      subItems: [
        { id: "neo-wallet", label: "Wallet", path: "/neo-banking/wallet" },
        { id: "pricing", label: "Pricing", path: "/neo-banking/pricing" },
        { id: "custom-domain", label: "Custom Domain", path: "/neo-banking/custom-domain" },
        { id: "app-branding", label: "App branding", path: "/neo-banking/app-branding" },
      ],
    },
    {
      id: "plugin-service", label: "Plugin Service", icon: PlugInServicesIcon, path: "/plugin-service", subItems: [
        { id: "service", label: "Service", path: "/pluging-service/service" },
        { id: "branding", label: "Branding", path: "/pluging-service/branding" },
      ],
    },
    { id: "users", label: "Users", icon: UsersIcon, path: "/users" },
    { id: "risk-control", label: "Risk Control", icon: RiskControlIcon, path: "/risk-control" },
    { id: "settings", label: "Settings", icon: SettingsIcon, path: "/settings" },
  ];


  return (
    <div className="md:flex flex-col h-[calc(100vh-80px)] hidden sticky left-0 top-[80px] px-4 w-72 ">
      {/* Header */}
      <div className=" mb-4 mt-3 ">
        <div className="flex items-center gap-2 px-4 py-2 rounded-[12px] border ">
          <Image src="/img/Qproject.png" alt="Qproject" width={28} height={28} />
          <span className="font-medium whitespace-nowrap">Q-Project Limited</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              {item.subItems ? (
                <Accordion
                  type="single"
                  collapsible
                  className="border-none"
                >
                  <AccordionItem value={item.id} className="border-none">
                    <AccordionTrigger
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-md text-gray-500 hover:bg-gray-100 transition-colors",
                        activeItem === item.id && "text-[#0B112F] font-bold",
                      )}
                    >
                      <item.icon />
                      <span className="flex-1 text-left">{item.label}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-1 pb-0">
                      <ul className="pl-8 border-l-2 border-blue-600 ml-3 space-y-1">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.id}>
                            <Link
                              href={`${subItem.path}`}
                              className={cn(
                                "flex items-center py-2 text-gray-500 hover:text-blue-600 transition-colors",
                                subItem.id === "neo-wallet" && "text-[#0B112F] font-bold",
                              )}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <Link
                  href={`${item.path}`}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-gray-500 hover:bg-gray-100 transition-colors",
                    activeItem === item.id && "text-[#0B112F] font-bold",
                  )}
                  onClick={() => setActiveItem(item.id)}
                >
                  <item.icon />
                  <span>{item.label}</span>
                  <span className="ml-auto">›</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-2">
        <button className="flex items-center gap-3 w-full px-3 py-2 text-red-500 font-medium rounded-md hover:bg-gray-100 transition-colors">
          <LogoutIcon />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}

