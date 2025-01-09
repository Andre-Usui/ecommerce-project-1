export default function CarouselItemImgRight({ img, text, alt }) {
  const wrapper = 'size-full flex flex-row justify-center items-center bg-slate-50 border-none lg:border lg:border-slate-300'
  const wrapperItem = 'pl-6 md:pl-12 lg:pl-12 flex flex-col justify-center items-stretch';
  const h2Item = 'font-sans text-sm sm:text-lg lg:text-xl antialiased font-semibold text-start align-middle text-orange-500'

  return (
    <div className={wrapper}>
      <div className={wrapperItem}>
        <h2 className={h2Item}>{text}</h2>
      </div>
      <img
        src={img}
        className="w-32 md:w-64 lg:w-96 h-full object-cover rounded-tl-full"
        alt={alt}
      />
    </div>
  )
}