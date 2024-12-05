import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { AtlasLogo, CocaColaLogo, CrazyboxLogo, MegogoLogo, NikeLogo } from "../(assets)/icons/icons"


const PartnersSection = () => {
  return (
    <div className="container py-32">
      <h2 className="text-[48px] font-bold mb-12">С нами соотрудничают</h2>
      <Carousel
      >
        <CarouselContent>
          <CarouselItem className="basis-1/5">
            <NikeLogo />
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <CocaColaLogo />
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <AtlasLogo />
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <MegogoLogo />
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <CrazyboxLogo />
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <NikeLogo />
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <CocaColaLogo />
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <AtlasLogo />
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <MegogoLogo />
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <CrazyboxLogo />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default PartnersSection
