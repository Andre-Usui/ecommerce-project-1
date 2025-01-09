import { CLIENT_URL } from "../../Redux/constants/BASE_URL";
import { productsActions } from "../../Redux/reducers/productReducer"
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { productsCarouselAction } from "../../Redux/actions/productAction.js";


export default function CarouselItemImgProduct({ position, text, textSmall }) {
  const wrapper = 'size-full flex flex-row justify-center items-stretch bg-gradient-to-tr from-emerald-950 from-5% via-emerald-900 via-50% to-emerald-950 border-none lg:border lg:border-slate-300'
  const wrapperItem = 'pr-8 md:pr-12 lg:pr-12 flex flex-col grow justify-center items-end gap-0';
  const h1Item = 'font-sans pt-2 lg:pt-0 pb-3 md:pb-4 lg:pb-8 text-2xl md:text-4xl lg:text-7xl antialiased font-semibold text-end text-orange-500'
  const h1ItemSmall = 'font-sans pt-1 lg:pt-0 pb-2 lg:pb-4 text-lg md:text-2xl lg:text-4xl antialiased text-balance font-semibold text-end text-orange-500'
  const h2Item = 'font-sans text-xs md:text-lg lg:text-2xl antialiased font-semibold text-end text-slate-50'
  const buttonItem = 'font-sans mb-4 md:mb-6 lg:mb-8 mt-1 md:mt-2 py-1 px-2 text-xs md:text-lg lg:text-2xl antialiased text-center align-middle text-slate-50 bg-orange-500 rounded-lg shadow shadow-slate-50/50'

  const dispatch = useDispatch();

  const { productsCarousel, loadingCarousel, message } = useSelector((state) => state.productsList);


  useEffect(() => {
    console.log('useEffect was called')
    dispatch(productsCarouselAction());
  }, [dispatch]);

  const loadingHandler = async () => {
    console.log("link was clicked");
    dispatch(productsActions.loadingCarousel());
  }

  return (
    <>
      {loadingCarousel ? <h1>Loading</h1> :
        <a onClick={loadingHandler} href={`${CLIENT_URL}/detail/${productsCarousel[position]._id}`}>
          <div className={wrapper}>

            <img
              src={productsCarousel[position].image[0]}
              className="h-5/6 pl-8 lg:pl-10 lg:ml-2 my-auto aspect-square object-cover rounded-full"
              alt={`An image of the product ${productsCarousel[position].name}`}
            />
            <div className={wrapperItem}>
              <h1 className={textSmall? h1ItemSmall:h1Item}>{text}</h1>
              <h2 className={h2Item}>{productsCarousel[position].name}</h2>
              <h2 className={h2Item}><span className="text-xs lg:text-sm">R$</span>{productsCarousel[position].price}</h2>
              <button className={buttonItem}>Compre agora ►</button>
              
            </div>
          </div>
        </a>
      }
    </>
  )
}