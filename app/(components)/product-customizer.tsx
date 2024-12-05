import Image from "next/image"


const ProductCustomizer = () => {
  return (
    <section className="container py-12">
      <div className="flex items-center justify-between gap-4">
        <div className="w-1/2">
          <Image
            src="/images/tshirt.png"
            width={600}
            height={600}
            alt="tshirt"
            className="w-full rounded-lg"
          />
        </div>
        <div className="w-1/2">
          <h3 className="font-bold text-[36px]">Помимо готовой продукции высокого качества, мы можем для Вас произвести одежду, аксессуры, вкусности и другое под заказ.</h3>
          <p className="text-foreground text-lg">
            Благодаря личному производству мы изготавливаем большие партии в короткие сроки, а так же у Вас всегда есть возможность кастомизировать изделия.
          </p>
          <h1 className="text-[90px]">Slider</h1>
        </div>
      </div>
    </section>
  )
}

export default ProductCustomizer
