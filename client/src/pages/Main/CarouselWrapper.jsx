
import { Carousel, } from "flowbite-react";
import CarouselItemEntry from "./CarouselItemEntry";
import CarouselItemImgLeft from "./CarouselItemImgLeft";
import CarouselItemImgRight from "./CarouselItemImgRight";
import CarouselItemProduct from "./CarouselItemProduct.jsx";


const customCarousel = {
  root: {
    base: "relative h-full w-full",
    leftControl: "absolute left-0 top-0 flex h-full items-center justify-center focus:outline-none",
    rightControl: "absolute right-0 top-0 flex h-full items-center justify-center focus:outline-none"
  },
  indicators: {
    wrapper: "absolute bottom-3 md:bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
  },
  control: {
    base: "inline-flex h-10 w-5 items-center justify-around rounded-none bg-orange-200/30 group-hover:bg-orange-100/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-20 sm:w-8",
    icon: "h-10 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
    snap: "snap-x"
  }

};

const wrapperItem = 'h-20 md:size-auto px-2 py-2 flex flex-col grow justify-center items-stretch col-span-3 md:col-span-1 bg-orange-500 border-t-2 border-t-slate-50 md:border md:border-slate-300';
const innerWrapperItem = 'font-sans text-xs sm:text-sm lg:text-xl antialiased font-semibold text-center align-middle text-slate-50'

export default function CarouselWrapper() {

  return (
    <div className="
    my-0
    lg:my-12
    mx-auto
    w-full
    lg:w-11/12
    h-80 
    grid
    grid-rows-4
    md:grid-rows-2
    grid-cols-3
    sm:h-64 
    xl:h-80 
    2xl:h-96
    ">
      <Carousel
        slideInterval={5000}
        theme={customCarousel}
        className="
      row-span-2
      col-span-3
      md:col-span-2
      ">
        <CarouselItemEntry />
        <CarouselItemImgLeft
          img="/foto-natal-crianca.jpg"
          text="Presentes que encantam, marcam histórias para sempre! Venha viver a magia do Natal! 🎄✨🎁"
          alt="Uma foto de uma criança negra na neve com tema natalino"
        />
        <CarouselItemImgRight
          img="/foto-natal-presentes.jpg"
          text="Presentes que encantam, marcam histórias para sempre! Venha viver a magia do Natal! 🎄✨🎁"
          alt="Uma foto de com presentes de tema natalino"
        />
        <CarouselItemProduct
          position="0"
          text="Liquidação!!"
        />
        <CarouselItemProduct
          position="1"
          text="Você não pode perder esta oportunidade!"
          textSmall={true}
        />
      </Carousel>
      <a href="" className={wrapperItem}>
        <div className={innerWrapperItem}>
          <h1>Saiba todas funcionalidades do <br />
            <span className="text-base md:text-xl lg:text-3xl"> Lojinha Livre</span>
            <br />clicando aqui!
          </h1>
        </div>
      </a>

      <a href="" className={wrapperItem}>
        <div className={innerWrapperItem}>
          <h1>Registre-se e comece agora mesmo a comprar e vender!</h1>
        </div>
      </a>
    </div >
  );
}