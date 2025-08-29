'use client';
import Link from "next/link";
import React, {useEffect, useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import {removeToken, setAuth } from "@/util/cookies";


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const[scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isAuth = "true" 

   
   const navItems = [
    
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Gallery", href: "/gallery" },
            { name: "Contact", href: "/contact" },
            { name: "Login", href: "/login" },
            { name: "Register", href: "/register" }

   ]



   const handleLogOut = () =>{
    setAuth(false);
    // router.push('/');
     removeToken();
   }
  

    useEffect(() => {
        const handleScroll = () => {
           setScrolled(window.scrollY > 50);
        };
        

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })


    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md text-black" : "bg-transparent text-black"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-bold bg-gradient-to-r from-green-500 to-black bg-clip-text text-transparent"
                    >
                        <Link href="/">WATCH HUB</Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                  <div className="hidden md:flex space-x-8">
                    { (
 navItems.map((item) => (
    <motion.div
      key={item.name}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
   <Link
  href={item.href}
  className={`relative px-3 py-2 text-sm font-medium text-black
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
    after:bg-emerald-400 after:transition-all after:duration-300
    ${pathname === item.href ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
  `}
>
        {item.name}
      </Link>
    </motion.div>))
                    )}


 

     {isAuth === 'true' && (  
       <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300" onClick={handleLogOut}>
        Logout
      </button>)}
     
</div>


                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            whileTap={{ scale: 0.9 }}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                            aria-expanded="false"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-gray-800 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navItems.map((item) => (
                                <motion.div
                                    key={item.name}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                   <Link
  href={item.href}
  className={`relative px-3 py-2 text-sm font-medium text-white
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
    after:bg-emerald-400 after:transition-all after:duration-300
    ${pathname === item.href ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
  `}
  onClick={() => setIsOpen(false)}
>
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <button className="
                            px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300
                            " onClick={handleLogOut}>
                                Logout
                            </button>
                            
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}