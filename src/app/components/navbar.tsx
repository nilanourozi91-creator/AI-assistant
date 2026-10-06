'use client'
import { motion } from "motion/react";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import  ThemeToggle from "@/app/components/ThemeToggle";
import React from 'react'
import { Sparkles } from "lucide-react";

function Navebar() {
    const navItem=[
      {
        id:1,
        name:'Home',
        href:"/",
      },
      {
        id:2,
        name:'Features',
        href:"/features",
      },
      {
        id:3,
        name:'How it works',
        href:"/howitworks",
      },
      {
        id:4,
        name:'subjects',
        href:"/subjects",
      },
      {
        id:5,
        name:'Testmonials',
        href:"/testmonials",
      },
    ]
      const pathName= usePathname();
      
  return (
      
     <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#0B1020]/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-600 text-white shadow-lg shadow-purple-600/20">
              <Sparkles size={19} />
            </div>

            <span className="text-xl font-bold tracking-tight">
              Day<span className="text-purple-600 dark:text-purple-400">AI</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex dark:text-slate-300">
          {navItem.map((x)=>(
              <Link key={x.id} href={x.href} className="transition hover:text-purple-600">{x.name}</Link>
          ))}
            {/* <a href="#features" className="transition hover:text-purple-600">
              Features
            </a>

            <a href="#how-it-works" className="transition hover:text-purple-600">
              How it works
            </a>

            <a href="#assistant" className="transition hover:text-purple-600">
              AI Assistant
            </a>

            <a href="#pricing" className="transition hover:text-purple-600">
              Pricing
            </a> */}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
    <div className="hidden text-sm font-medium text-slate-600 sm:block dark:text-slate-300">
      <ThemeToggle />
    </div>
         
  <motion.button
  whileHover={{
    scale: 1.04,
  }}
  whileTap={{
    scale: 0.97,
  }}
  transition={{
    type: "spring",
    stiffness: 400,
    damping: 20,
  }}
  className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-500/20"
>
  <Link href='/register'>Get Started</Link>
</motion.button>
          </div>
        </div>
      </nav>
    
  )
}

export default Navebar
