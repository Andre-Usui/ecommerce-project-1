export default function CarouselItemEntry() {
  const wrapper = 'size-full flex flex-row justify-center items-center bg-orange-500 border-none md:border md:border-slate-300'
  const wrapperItem = 'px-6 md:px-12 lg:px-12 flex flex-col grow justify-center items-stretch';
  const h2Item = 'font-sans text-base sm:text-lg lg:text-5xl antialiased font-semibold text-end align-middle text-slate-50'
  const h1Item = 'font-sans text-xl sm:text-2xl lg:text-6xl antialiased font-semibold text-end align-middle text-slate-50'

  return (
    <div className={wrapper}>
      <img
        src="/shop-cart2.svg"
        className="h-20 md:h-40 px-6 md:px-8 lg:px-12"
        alt="Lojinha Livre Logo"
      />
      <div className={wrapperItem}>
        <h2 className={h2Item}>Bem vindo ao </h2>
        <h1 className={h1Item}>Lojinha Livre!</h1>
      </div>
    </div>
  )
}