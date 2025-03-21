"use client"

import Link from "next/link"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"


import { cn } from "@/lib/utils"
import { LogoutIcon } from "@/icon/icon"
import { usePathname } from "next/navigation"
import { ChevronRight, ChevronsRight } from "lucide-react"
import { MENU_ITEMS } from "@/constants/menuitems"
import MobileSidebar from "../MobileSidebar/MobileSidebar"

export default function SidebarNavigation() {
  const pathname = usePathname()
  const [isOpen, setIsopen] = useState(false)

  return (
    <div className="relative md:static">
      <div className="absolute left-4 top-1  md:hidden">
        <ChevronsRight onClick={() => setIsopen(true)} className=" bg-[#0B112F] rounded-[50%] text-white cursor-pointer" size={25} />
      </div>

      <MobileSidebar isopen={isOpen} setIsOpen={setIsopen} />

      <div className="md:flex flex-col h-[calc(100vh-80px)] hidden sticky left-0 top-[80px] px-4 w-72 ">
        <div className=" mb-4 mt-3 ">
          <div className="flex items-center gap-2 px-4 py-2 rounded-[12px] border ">
            <Image src="/img/Qproject.png" alt="Qproject" width={28} height={28} />
            <span className="font-medium whitespace-nowrap">Q-Project Limited</span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {MENU_ITEMS.map((item) => {
              const activeItem = pathname.split("/").includes(item.path ? item.path : "")
              return (
                <li key={item.id}>
                  {item.subItems ?
                    (
                      <Accordion
                        type="single"
                        collapsible
                        className="border-none"
                      >
                        <AccordionItem value={item.id} className="border-none">
                          <AccordionTrigger
                            className={cn(
                              "flex items-center gap-3 px-3 py-2 hover:no-underline rounded-md text-gray-500 hover:bg-gray-100 transition-colors",
                              activeItem && "text-[#0B112F] font-bold",
                            )}
                          >
                            <item.icon />
                            <span className="flex-1 text-left">{item.label}</span>
                          </AccordionTrigger>
                          <AccordionContent className="pt-1 pb-0">
                            <ul className="pl-8 ">
                              {item.subItems.map((subItem) => {
                                const subItemActiveItem = pathname === subItem.path
                                return (
                                  <li key={subItem.id}>
                                    <Link
                                      href={`${subItem.path}`}
                                      className={cn(
                                        "flex items-center py-1.5 text-gray-500  border-l-[3px] border-[#EFF1F7] pl-3  hover:text-blue-600 transition-colors",
                                        subItemActiveItem && "text-[#0B112F] font-bold border-[#0A59F3]",
                                      )}
                                    >
                                      {subItem.label}
                                    </Link>
                                  </li>
                                )
                              })}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <Link
                        href={item.path}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 rounded-md text-gray-500 hover:bg-gray-100 transition-colors",
                          activeItem && "text-[#0B112F] font-bold",
                        )}
                      >
                        <item.icon />
                        <span>{item.label}</span>
                        <span className="ml-auto"><ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" /></span>
                      </Link>
                    )}
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="p-2">
          <button className="flex items-center gap-3 w-full px-3 py-2 text-red-500 font-medium rounded-md hover:bg-gray-100 transition-colors">
            <LogoutIcon />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>

  )
}

