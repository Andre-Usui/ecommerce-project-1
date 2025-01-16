export default function CarouselItemImgLeft({img, text, alt}) {
  const wrapper = 'size-full flex flex-row justify-center items-center bg-slate-50 border-none md:border md:border-slate-300'
  const wrapperItem = 'pr-6 md:pr-12 lg:pr-12 flex flex-col grow justify-center items-stretch';
  const h2Item = 'font-sans text-sm sm:text-lg lg:text-xl antialiased font-semibold text-end align-middle text-orange-500'

  return (
    <div className={wrapper}>
      <img
        src={img}
        className="w-32 md:w-64 lg:w-96 h-full object-cover rounded-tr-full"
        alt={alt}
      />
      <div className={wrapperItem}>
        <h2 className={h2Item}>{text}</h2>
      </div>
    </div>
  )
}