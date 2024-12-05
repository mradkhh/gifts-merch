import HeroPlaceholder from "../(assets)/icons/hero-placeholder";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="bg-gradient-to-b from-purple-200 to-purple-100 min-h-[600px]">
        {/* Content container */}
        <div className="container mx-auto px-4 pt-12 pb-24">
          <div className="flex items-center justify-between gap-12">
            {/* Text content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                СВЕЖЕЕ ДЫХАНИЕ В КОРПОРАТИВНОЙ ЖИЗНИ
              </h1>
              <p className="text-lg text-gray-600">
                Ми вдосконалили процес замовлення продукції для того, щоб Ви і Ваша компанія сконцентрувались на основних задачах і досягали поставлених цілей.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-purple-200 rounded-full" />
                  </div>
                  <p className="font-semibold text-gray-800">
                    Высокое качество ONLY
                  </p>
                </div>

                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-purple-200 rounded-full" />
                  </div>
                  <p className="font-semibold text-gray-800">
                    Поддержка менеджера 24/7
                  </p>
                </div>

                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-purple-200 rounded-full" />
                  </div>
                  <p className="font-semibold text-gray-800">
                    Выполнение заказа в TURBO-режиме
                  </p>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="relative h-[400px] lg:h-[500px]">
              <HeroPlaceholder />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
