"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="sticky w-full top-0 left-0 right-0 flex items-center z-30  px-4 h-16  sm:px-20  text-white" style={{
      backgroundImage: `url("/img/navbcg.png")`,
      backgroundSize: "cover",
    }}>
      <div className="w-full   relative">

        {/* Top blue line */}
        <div className="container mx-auto px-4 py-3 flex justify-between items-center relative z-10">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src={"/img/FinSwich.png"} alt="FinSwich" width={120} height={28} />
              <sup className="text-xs ml-1">®</sup>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">

            {["Help", "Resources", "API Docs"].map((item) => (

              <Link key={item} href="/help" className="text-white hover:text-[#0099ff] transition-colors">
                {item}
              </Link>
            ))}

          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Slides from the bottom of the navbar */}
        <div
          className={`md:hidden absolute left-0 w-full bg-[#0a0e29] z-50 border-t border-[#1a1e39] shadow-lg transition-all duration-300 ease-in-out origin-top ${isMenuOpen ? "opacity-100 max-h-[300px]" : "opacity-0 max-h-0 overflow-hidden"
            }`}
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-4 pb-4">
              <Link
                href="/help"
                className="text-white hover:text-[#0099ff] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Help
              </Link>
              <Link
                href="/resources"
                className="text-white hover:text-[#0099ff] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/api-docs"
                className="text-white hover:text-[#0099ff] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                API Docs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;