import { useDispatch, useSelector } from 'react-redux';

import Layout from '../../components/Layout/Layout';
import TopSalesWrapper from '../../components/topSales/TopSalesWrapper';
import CollectionList from './CollectionList';
import FilterWrapper from './Filter/FilterWrapper';


export default function ProductCollection() {

  const { mainCategory } = useSelector((state) => state.filter)


  return (
    <>
      <Layout>
        <TopSalesWrapper category={mainCategory} />
        <div className="w-full h-full bg-orange-50 py-4">

          <CollectionList />

        </div>

      </Layout>
    </>
  )
}
