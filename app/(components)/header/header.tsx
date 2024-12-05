'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Search, Menu, X, UserRound } from 'lucide-react'
import Logo from '../../(assets)/icons/logo'
import Navbar from './navbar'

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-purple-200">
      <div className="container px-4 py-11 mx-auto max-w-[1600px]">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-wider text-white">
            <Logo />
          </Link>

          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Поиск"
                className="w-full font-gilroy pl-10 py-6 text-neutral-800 border-2 border-black placeholder:text-zinc-400 rounded-full"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              className="bg-[#1FAB8A] hover:bg-[#1FAB8A] text-white font-medium text-[18px] rounded-full px-12 h-12"
            >
              +380 630 130 103
            </Button>

            <UserRound className="h-10 w-10" />

            <div className="flex items-center gap-2 text-sm text-white">
              <span>RU</span>
              <span className="text-zinc-500">/</span>
              <span>ENG</span>
            </div>

          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Поиск"
                className="w-full bg-zinc-900 pl-9 text-white border-zinc-800 placeholder:text-zinc-400"
              />
            </div>
            <Button
              className="w-full mb-4 bg-gradient-to-r from-emerald-500 to-purple-400 hover:from-emerald-600 hover:to-purple-500 text-white font-medium"
            >
              +380 630 130 103
            </Button>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-sm text-white">
                <span>RU</span>
                <span className="text-zinc-500">/</span>
                <span>ENG</span>
              </div>
              <Button variant="ghost" size="icon" className="text-white">
                <UserRound className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
      </div>
      <Navbar />
    </header>
  )
}
