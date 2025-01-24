import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import ProductDetailComp from './ProductDetailComp';
import { useDispatch, useSelector } from 'react-redux';
import { productDetailAction } from "../../Redux/actions/productAction.js";


export default function ProductDetail() {
  let params = useParams();
  const dispatch = useDispatch();
  const { productDetail, loadingDetail } = useSelector((state) => state.productsList);

  useEffect(() => {
    console.log('useEffect in product detail was called')
    dispatch(productDetailAction(params.id));
  }, [dispatch, params.id]);

  return (
    <>
      <Layout>
        {loadingDetail === 'true' ? <h1>loading</h1> :
          <ProductDetailComp
            _id={productDetail._id}
            type={productDetail.type}
            variables={productDetail.variables}
            name={productDetail.name}
            image={productDetail.image}
            description={productDetail.description}
            price={productDetail.price}
            countInStock={productDetail.countInStock}
            rating={productDetail.rating}
            numReviews={productDetail.numReviews}
            _user_id={productDetail._user_id}
          />
        }
      </Layout>
    </>
  )
}