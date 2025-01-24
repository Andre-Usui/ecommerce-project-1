import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Fragment } from 'react';
import { filterActions } from '../../Redux/reducers/filterReducer';
import { productsCollectionAction } from "../../Redux/actions/productAction.js";
import CollectionProduct from './CollectionProduct.jsx'
import FilterWrapper from './Filter/FilterWrapper';


export default function CollectionList() {

  const { products, loading } = useSelector((state) => state.productsList)
  const {
    mainCategory,
    currentPage,
    localFilter
  } = useSelector((state) => state.filter);

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(productsCollectionAction(localFilter));
  }, [dispatch, localFilter]);

  return (
    <>
      {loading === 'true' ? (
        <h1>loading</h1>
      ) : (
        <>
          <div className="bg-white w-full lg:w-11/12 mx-auto h-full my-4 grid grid-col-7 justify-stretch pb-4 lg:my-12 gap-2">


            <FilterWrapper />

            <section className="col-span-4 col-start-4 text-gray-600 body-font w-full lg:w-full mt-3 lg:mt-6">
              <div className="w-full">

                <h1
                  className="
            text-start
            px-5
            py-4
            text-lg
            lg:text-2xl
            antialiased
            text-slate-950
            bg-white
            rounded-sm
            border-b-4 border-b-slate-500/25"
                > {mainCategory}
                </h1>
              </div>
              <div className="w-full pt-6 lg:pt-12 mx-none ">
                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-stretch content-stretch gap-2 lg:gap-4">
                  {products.map((product) => (
                    <Fragment key={product._id}>
                      <CollectionProduct
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
            <div className="bg-red-200 h-20 w-full col-span-7">
                  <h1>Páginas: em construção</h1>
            </div>
          </div>
        </>
      )}

    </>
  )
}