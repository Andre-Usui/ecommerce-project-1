import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '../../../Redux/reducers/filterReducer';
import { setLocalFilter } from '../../../Redux/actions/filterAction';
import FilterCategory from './FilterCategory';
import FilterReview from './FilterReview';
import FilterPriceSlider from './FilterPriceSlider';

export default function FilterWrapper(props) {

  const dispatch = useDispatch();

  const {
    mainCategory,
    category,
    priceMin,
    priceMax,
    sortBy,
    review,
    order,
    currentPage,
  } = useSelector((state) => state.filter);

  function handleSubmitFilter() {
    const filters = {
      category,
      priceMin,
      priceMax,
      sortBy,
      review,
      order,
      currentPage,
    }
    dispatch(setLocalFilter(filters))
  }


  const handleReset = () => {
    dispatch(filterActions.resetFilters());
    dispatch(filterActions.addCategory(mainCategory));
  };

  return (
    <>
      <div className=" w-64 h-fit col-span-3 mt-10 border-r border-r-slate-300">

        <form
          className="h-fit flex flex-col items-start gap-4"
          onSubmit={handleSubmitFilter}
        >
          <h1 className="text-lg font-bold self-center">Filtros</h1>
          <hr className="w-10/12 h-px bg-slate-300 self-center"/>
          <FilterCategory />
          <hr className="w-10/12 h-px bg-slate-300 self-center"/>
          <FilterReview />
          <hr className="w-10/12 h-px bg-slate-300 self-center"/>
          <FilterPriceSlider />
          <hr className="w-10/12 h-px bg-slate-300 self-center"/>
          <input
            id='submit'
            className='self-center text-slate-50 text-sm rounded-lg bg-orange-400 py-2 px-4 hover:cursor-pointer'
            type='submit'
            value="aplicar filtros"
          />
          <input
            id='reset'
            className='self-center text-slate-50 text-sm rounded-lg  bg-orange-400 py-2 px-4 hover:cursor-pointer'
            type='button'
            onClick={handleReset}
            value="resetar filtros" />
        </form>
      </div>
    </>
  )
}