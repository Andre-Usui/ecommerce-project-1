import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '../../../Redux/reducers/filterReducer';
import { setLocalFilter } from '../../../Redux/actions/filterAction';
import FilterCategory from './FilterCategory';
import FilterReview from './FilterReview';
import FilterPriceSlider from './FilterPriceSlider';

export default function Filter() {

  const dispatch = useDispatch();

  const {
    mainCategory,
    category,
    priceMin,
    priceMax,
    sortBy,
    review,
    order,
    page,
    expandFilter
  } = useSelector((state) => state.filter);

  function handleFilterExpand() {
    if (expandFilter === 'false') {
      dispatch(filterActions.setFilter({ name: 'expandFilter', value: 'true' }));
    } else {
      dispatch(filterActions.setFilter({ name: 'expandFilter', value: 'false' }));
    }
  }

  function handleSubmitFilter() {
    dispatch(filterActions.setFilter({ name: 'expandFilter', value: 'false' }));
    dispatch(filterActions.setFilter({ name: 'currentPage', value: '1' }));

    const filters = {
      category,
      priceMin,
      priceMax,
      sortBy,
      review,
      order,
      page,
    }
    dispatch(setLocalFilter(filters));
  }

  const handleReset = () => {
    dispatch(filterActions.resetFilters());
    dispatch(filterActions.setCategory(mainCategory));
  };



  return (
    <>

      <div className={`z-40 relative h-full xl:h-min bg-white flex flex-row justify-between row-span-4 xl:mt-10 w-[50px] lg:w-[300px] overflow-visible"`}>
        <button
          data-collapse-toggle="filter-default"
          type="button"
          onClick={handleFilterExpand}
          className="z-50 flex flex-col justify-evenly items-center bg-orange-500 self-stretch items-center p-2 w-10 h-9/12 justify-center text-sm lg:hidden rounded-br-lg outline-none focus:outline-none focus:ring-none" aria-controls="filter-default" aria-expanded={expandFilter === 'true'}
        >
          <p
            className=" tracking-widest writing-mode-vertical text-slate-50"
          >
            {`${expandFilter === 'true' ? `< < < <` : `> > > >`}`}
          </p>
          <p
            className=" tracking-wide writing-mode-vertical text-slate-50"
          >
            F i l t r o s
          </p>
          <p
            className=" tracking-widest writing-mode-vertical text-slate-50"
          >
            {`${expandFilter === 'true' ? `< < < <` : `> > > >`}`}
          </p>
          <p
            className=" tracking-wide writing-mode-vertical text-slate-50"
          >
            F i l t r o s
          </p>
          <p
            className=" tracking-widest writing-mode-vertical text-slate-50"
          >
            {`${expandFilter === 'true' ? `< < < <` : `> > > >`}`}
          </p>
        </button>
        <form
          className={`z-40 h-full bg-white xl:h-fit w-[320px] transition-transform duration-2000 ease-in-out flex flex-col items-between lg:items-start gap-4 ${expandFilter === 'false' ? "translate-x-[-320px]" : " translate-x-[0px]"} lg:translate-x-[0px]`}
          onSubmit={handleSubmitFilter}
          id="filter-default"
        >
          <h1 className="mt-10 xl:mt-none text-lg font-bold self-center">
            Filtros
          </h1>
          <hr className=" h-px w-48 bg-slate-300 self-center" />
          <FilterCategory />
          <hr className=" h-px w-48 bg-slate-300 self-center" />
          <FilterReview />
          <hr className=" h-px w-48 bg-slate-300 self-center" />
          <FilterPriceSlider />
          <hr className=" h-px w-48 bg-slate-300 self-center" />
          <input
            id='submit'
            className='self-center m-4 text-slate-50 text-sm rounded-lg bg-orange-500 py-2 px-4 hover:cursor-pointer'
            type='submit'
            value="aplicar filtros"
          />
          <input
            id='reset'
            className='self-center m-4 text-slate-50 text-sm rounded-lg  bg-orange-500 py-2 px-4 hover:cursor-pointer'
            type='button'
            onClick={handleReset}
            value="resetar filtros" />
        </form>


      </div>
    </>
  )
}