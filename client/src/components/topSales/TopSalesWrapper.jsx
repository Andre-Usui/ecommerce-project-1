import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { productsTopSalesAction } from "../../Redux/actions/productAction.js";
import TopSalesItem from "./TopSalesItem";

export default function TopSalesWrapper({ category, limit }) {

  const dispatch = useDispatch();
  const { productsTopSales, loadingTopSales, message } = useSelector((state) => state.productsList);


  useEffect(() => {
    dispatch(productsTopSalesAction({ category, limit }));
  }, [dispatch, category, limit]);


  return (
    <div className="mx-auto mt-0 mb-3 lg:mb-6 w-full lg:w-11/12 bg-white border-b-4 border-b-slate-500/25">
      <h1 className="
      text-center
      pt-6
      text-lg
      lg:text-2xl
      antialiased
      text-slate-950">
        ⚡ Nossos produtos mais Tops ! ⚡
      </h1>
      {loadingTopSales==='true' ? (
        <h1>loading</h1>
      ) : (
        <section className="text-gray-600 body-font w-full px-auto lg:px-8 overflow-x-scroll lg:overflow-hidden">

          <div className="container py-6 mx-none md:mx-auto w-full">
            <div className="w-full flex flex-row flex-nowrap justify-between content-stretch ">
              {productsTopSales.map((product) => (
                <Fragment key={product._id}>
                  <TopSalesItem 
                  _id={product._id}
                  name={product.name}
                  price={product.price}
                  image={product.image[0]}
                  rating={product.rating}
                  impulse={product.impulse}
                  />
                </Fragment>
              ))}

            </div>
          </div>
        </section>
      )}
    </div>
  )
}