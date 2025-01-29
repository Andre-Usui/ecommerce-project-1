import Layout from '../../components/Layout/Layout';
import TypeWrapper from '../../components/Type/TypeWrapper';
import CarouselWrapper from './CarouselWrapper';
import ItemsList from './ItemsList';
import TopSalesWrapper from '../../components/topSales/TopSalesWrapper';


export default function Main() {


/*

ajustar para que TopSalesWrapper, TypeWrapper e
ItemsList sejam enclausurados em um div que terá
w-11/12, flex
        flex-col
        justify-center
        items-center
        content-stretch
        gap-0
ajustar Pastas dos componentes 
*/
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
        
        ">
          <TopSalesWrapper
            text='⚡ Nossos produtos mais Tops ! ⚡'
          />
          <TypeWrapper />
          <ItemsList />
        </div>
      </Layout>
    </>
  )
}

