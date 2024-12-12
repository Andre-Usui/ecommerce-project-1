import ItemsCard from "./ItemsCard.jsx";
import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { productsListAction } from "../../Redux/actions/product.js";

export default function ItemsList() {
  const dispatch = useDispatch();
  const productsListReducer = useSelector((state) => state.productsListReducer);
  const { loading, error, products, page, totalPages } = productsListReducer;

  useEffect(() => {
    dispatch(productsListAction());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <h1>loading</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {products.map((product) => (
                <Fragment key={product._id}>
                  <ItemsCard
                    name={product.name}
                    image={product.image}
                    price={product.price}
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