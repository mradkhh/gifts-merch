import { ShoppingCart, X } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function PopularSection() {
  return (
    <div className="relative container mx-auto px-4 py-12">
      {/* Wave decoration */}
      <div className="absolute top-[-110px] left-[-300px] right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-3xl font-semibold flex items-center gap-2">
            Самое популярное
            <Badge variant="secondary" className="bg-emerald-100">
              <svg
                className="w-4 h-4 text-emerald-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </Badge>
          </h1>
          <p className="text-muted-foreground">
            товары, которые наиболее часто заказывают наши клиенты
          </p>
        </div>
        <Button variant="link" className="text-primary">
          Все товары →
        </Button>
      </div>

      <div className="w-full flex gap-6">
        <div className="w-full">
          <Image
            src="/images/p1.png"
            alt="Cotton Tote Bag Mockup"
            width={600}
            height={600}
            className="w-full h-[576px] rounded-lg"
          />
          <h3 className="mt-4 text-lg font-medium text-center">Шопперы</h3>
        </div>

        <div className='w-full max-w-[480px] space-y-4'>
          <div className='relative w-full'>
            <Image
              src="/images/p2.png"
              alt="White Mug Mockup"
              width={280}
              height={280}
              className="w-full h-auto rounded-lg"
            />
            <div className='absolute top-[-24px] right-0 flex items-center justify-between gap-6'>
              <div className="relative bg-white shadow-md rounded-lg p-4 max-w-md mx-auto">
                <div className="absolute top-[-8px] right-[-8px] flex justify-end">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 rounded-full border-2 border-black bg-tra"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>
                <div className="flex justify-between items-center gap-6 px-1 ">
                  <Button
                    variant="link"
                    className="text-base font-normal text-black hover:no-underline hover:text-black focus:text-black p-0"
                  >
                    Продолжить покупки
                  </Button>
                  <Button
                    variant="link"
                    className="text-base font-normal text-teal-500 hover:no-underline hover:text-teal-600 focus:text-teal-600 p-0"
                  >
                    В корзину
                  </Button>
                </div>
              </div>
              <div className="">
                <div className="flex items-center justify-center rounded-full h-16 w-16 relative bg-[#1FAB8A] ">
                  <div className='bg-[#1FAB8A]'>
                    <ShoppingCart className="h-6 w-6 text-white" />
                    <span className="absolute -top-1 -right-1 bg-white text-neutral-800 rounded-full w-5 h-5 text-xs flex items-center justify-center">
                      3
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-between gap-4'>
            <div>
              <Image
                src="/images/p3.png"
                alt="Thermos Mug"
                width={280}
                height={280}
                className="w-full h-[250px] rounded-lg"
              />
            </div>

            <div>
              <Image
                src="/images/p4.png"
                alt="Black T-Shirt"
                width={280}
                height={280}
                className="w-full h-[250px] rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
