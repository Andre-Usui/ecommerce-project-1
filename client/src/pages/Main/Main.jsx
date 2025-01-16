import Layout from '../../components/Layout/Layout';
import TypeWrapper from '../../components/Type/TypeWrapper';
import CarouselWrapper from './CarouselWrapper';
import ItemsList from './ItemsList';
import TopSalesWrapper from '../../components/topSales/TopSalesWrapper';


export default function Main() {



  return (
    <>
      <Layout>
        <CarouselWrapper />
        <div className="
        flex
        flex-col
        justify-center
        items-center
        content-stretch
        gap-0
        w-full
        py-6
        lg:py-12 
        bg-orange-50 
        border-t-4
        border-t-slate-500/25
        border-b-8 
        border-b-orange-500
        ">
          <TopSalesWrapper />
          <TypeWrapper />
          <ItemsList />
        </div>
      </Layout>
    </>
  )
}

