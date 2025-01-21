import ItemsCard from "./ItemsCard.jsx";
import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { productsListAction } from "../../Redux/actions/productAction.js";

export default function ItemsList() {
  const dispatch = useDispatch();
  const { products, loadingList, message } = useSelector((state) => state.productsList);


  useEffect(() => {
    dispatch(productsListAction());
  }, [dispatch]);

  return (
    <>
      {loadingList==='true' ? (
        <h1>loading</h1>
      ) : (
        <section className="text-gray-600 body-font w-full lg:w-11/12 mt-3 lg:mt-6">
          <div className="w-full">

            <h1
              className="
            text-center
            px-5
            py-4
            text-lg
            lg:text-2xl
            antialiased
            text-slate-950
            bg-white
            rounded-sm
            border-b-4 border-b-slate-500/25"
            > Veja alguns de nossos produtos ❤️
            </h1>
          </div>
          <div className="w-full pt-6 lg:pt-12 mx-none ">
            <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-stretch content-stretch gap-2 lg:gap-4">
              {products.map((product) => (
                <Fragment key={product._id}>
                  <ItemsCard
                    id={product._id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    rating={product.rating}
                    numSells={product.numSells}
                    impulse={product.impulse}
                  />
                </Fragment>
              ))}

            </div>
          </div>
        </section>
      )}

    </>
  )
}