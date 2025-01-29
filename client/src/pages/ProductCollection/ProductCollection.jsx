import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { productsCollectionAction } from "../../Redux/actions/productAction.js";
import { productsActions } from "../../Redux/reducers/productReducer.js";
import Filter from './Filter/Filter.jsx';
import Pages from './Pages/Pages.jsx';
import Layout from '../../components/Layout/Layout';
import CollectionList from './ColletionList/CollectionList';
import SortBy from './SortBy/SortBy';
import TopSalesWrapper from '../../components/topSales/TopSalesWrapper';


export default function ProductCollection() {

  const { loading } = useSelector((state) => state.productsList);
  const {
    mainCategory,
    localFilter
  } = useSelector((state) => state.filter);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productsActions.loadingList())
    const fetchData = async () => {
      await dispatch(productsCollectionAction(localFilter));
    }
    fetchData();
  }, [dispatch, localFilter]);

  return (
    <>
      <Layout>

        {loading === 'true' ? (
          <h1>loading</h1>
        ) : (
          <div className="max-w-svw h-min bg-orange-50 xl:py-4">
            <div className="bg-white min-h-full max-h-full w-full xl:w-11/12 pb-4 my-0 xl:my-12 mx-auto  grid grid-cols-[50px,1fr,1fr] lg:grid-cols-[320px,1fr,1fr] grid-rows-[60px,320px,100px,auto,100px] lg:grid-rows-[100px,360px,100px,auto,100px]">
              <Filter />
              <div className="
                h-[60px]
                lg:h-[100px]
                w-full
                col-start-2
                col-span-2
                "
                >

                <h1
                  className="
                align-text-bottom
                text-center
                px-5
                py-4
                lg:text-xl
                xl:text-4xl
                antialiased
                text-slate-950
                bg-white
                rounded-sm
                border-b-4 border-b-slate-500/25
                "
                > {mainCategory}
                </h1>
              </div>
              <div className="w-full col-start-2 col-span-2 row-span-1 h-min">

                <TopSalesWrapper
                  category={mainCategory}
                  text={`Os melhores produtos`}

                />
              </div>
              <SortBy />
              <CollectionList />
              <div className="h-20 max-w-full mt-8 col-span-3">
                <Pages />
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  )
}
