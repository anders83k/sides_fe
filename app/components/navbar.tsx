"use client";//Client side rendering, allt är öppet, inga hemligheter/ses ej på server side rendering.
import { useState } from "react";//allt som är synligt och ej behöver skyddas. "javascript setter är use state"
import Link from "next/link";  

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {    //skiftar mellan sant & falskt, öppnar och stänger menyn i detta fall.
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
        
        {/* LOGO */}
        <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-wider text-orange-500">
              Sides
            </Link>
        </div>
          
        
        <button
          className="md:hidden"
          onClick={toggleMenu}
        >
          ☰
        </button>
        
        {/* DESKTOP MENU */}
        <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="hover:bg-slate-700 px-3 py-2 rounded-md transition">Hem</Link>
              <Link href="/menu" className="hover:bg-slate-700 px-3 py-2 rounded-md transition">Meny</Link>
              <Link href="/om-oss" className="hover:bg-slate-700 px-3 py-2 rounded-md transition">Om oss</Link>
            </div>
          </div>
        
      </div>
      </div>
      
    </nav>
  );
}