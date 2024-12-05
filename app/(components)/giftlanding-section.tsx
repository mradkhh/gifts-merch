import { Button } from "@/components/ui/button"
import { CreativeImage, CreativeText } from "../(assets)/icons/icons"

export default function GiftLanding() {
  return (
    <div className="min-h-[600px] w-full bg-white px-4 py-12 md:px-6 lg:px-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-8">
          <div className="w-full space-y-8">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              <span className="mb-4 flex items-center justify-center">
                <CreativeText />
              </span>
              <div className="w-full block leading-tight">
                Хотите удивить ваших коллег/партнеров необычными подарками?
              </div>
            </h2>
            <p className="w-full text-lg text-muted-foreground">
              Выбирайте готовые подорочные наборы или укажите критерии по которым мы соберем для Вас уникальный бокс.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-zinc-900 text-white hover:bg-zinc-800 rounded-full">
                Перейти к наборам
              </Button>
              <Button size="lg" variant="outline" className="bg-white  rounded-full">
                Создать свой
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-8 -top-8 h-[120%] w-[120%] rounded-3xl" />
            <div className="relative">
              <CreativeImage />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
