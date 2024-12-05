'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="w-full bg-[#f3f0ff] py-32">
      <div className="container">
        {/* Header Section */}
        <div className="space-y-4 mb-36">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 w-[35%]">
            У вас своя УНИКАЛЬНАЯ идея по разработке мерча?
          </h1>
          <p className="text-gray-600 w-[35%]">
            Изготовим мерч по вашему дизайну. Расскажем лайфхаки и ознакомим с технологией производства, предоставим образцы материалов.
          </p>
        </div>

        {/* Form Section */}
        <div className="">
          <p className="mb-6 text-gray-900 text-[24px] font-medium w-[35%]">
            Введите свои контактные данные, и наш менеджер свяжется с Вами в течении 1 часа
          </p>
          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <div className='flex items-center justify-between gap-6'>
              <Input
                placeholder="Ваше Имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 rounded-none bg-transparent focus:border-emerald-500"
              />
              <Input
                placeholder="Ваша електронная почта"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 rounded-none bg-transparent focus:border-emerald-500"
              />
              <Input
                placeholder="Ваш номер телефона"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-b border-t-0 border-l-0 border-r-0 border-gray-300 rounded-none bg-transparent focus:border-emerald-500"
              />
              <Button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-12 py-6 rounded-full min-w-[280px]"
              >
                Заказать
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
