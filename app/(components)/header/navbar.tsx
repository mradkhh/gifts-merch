'use client'

import { useState } from "react"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-[#FAFBFD] py-4">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between h-16">
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-lg">Наборы</a>
                <a href="#" className="text-lg">Все товары</a>
                <a href="#" className="text-lg">Пошив</a>
                <a href="#" className="text-lg">Производство</a>
                <a href="#" className="text-lg">Информация</a>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium hover:text-primary">Наборы</a>
            <a href="#" className="text-sm font-medium hover:text-primary">Все товары</a>
            <a href="#" className="text-sm font-medium hover:text-primary">Пошив</a>
            <a href="#" className="text-sm font-medium hover:text-primary">Производство</a>
            <a href="#" className="text-sm font-medium hover:text-primary">Информация</a>
          </div>

          {/* Promo Banner */}
          <div className="hidden md:block">
            <div className="text-[3C336C] px-4 py-2 rounded-md">
              <span className="font-black text-[38px]">ШОППЕРЫ СО СКИДКОЙ - 25%</span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
