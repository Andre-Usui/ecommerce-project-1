import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Fragment } from 'react';
import { productsCollectionAction } from "../../../Redux/actions/productAction.js";
import CollectionProduct from './CollectionProduct.jsx'

export default function CollectionList() {

  const { products, loading } = useSelector((state) => state.productsList)
  const {
    mainCategory,
    
    localFilter
  } = useSelector((state) => state.filter);

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(productsCollectionAction(localFilter));
  }, [dispatch, localFilter]);

  return (
    <>

      <section className="col-start-2 col-span-2 max-w-full h-max mt-3 lg:mt-6">
        <div className="max-w-full mx-none h-full">
          <div className="max-w-full h-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4">
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
      
    </>
  )
}