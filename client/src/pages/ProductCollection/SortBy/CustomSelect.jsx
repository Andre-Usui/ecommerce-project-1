import { useDispatch, useSelector } from 'react-redux';
import { setLocalFilter, setMultipleFilters } from '../../../Redux/actions/filterAction';
import { filterActions } from '../../../Redux/reducers/filterReducer';


export default function CustomSelect() {

  const dispatch = useDispatch();

  const {
    category,
    priceMin,
    priceMax,
    sortBy,
    review,
    order,
    page,
    expandSort,
    sortName
  } = useSelector((state) => state.filter);

  const options = ["Relevância", "Mais Recentes", "Mais Bem Avaliado", "Mais Vendidos", "Menor Preço", "Maior Preço"];

  const handleExpand = () => {
    if (expandSort === 'false') {
      dispatch(filterActions.setFilter({ name: 'expandSort', value: 'true' }));
    } else {
      dispatch(filterActions.setFilter({ name: 'expandSort', value: 'false' }));
    }
  }

  const handleSortBy = (e) => {
    e.preventDefault();
    const sort = e.target.innerText;
    console.log(sort);
    if(sort === sortName){
      dispatch(filterActions.setFilter({name: 'expandSort', value: 'false'}));
      return
    }
    dispatch(setMultipleFilters([
      { name: 'expandSort', value: 'false' },
      sort === "Relevância"
        ? { name: 'sortBy', value: 'pop' }
        : sort === "Mais Recentes"
          ? { name: 'sortBy', value: 'recent' }
          : sort === "Mais Bem Avaliado"
            ? { name: 'sortBy', value: 'rating' }
            : sort === "Mais Vendidos"
              ? { name: 'sortBy', value: 'numSells' }
              : { name: 'sortBy', value: 'price' },
      sort === "Menor Preço" || sort === "Mais Recentes"
        ? { name: 'order', value: '1' }
        : { name: 'order', value: '-1' },
      { name: 'sortName', value: sort },
    ]));
    dispatch(setLocalFilter({
      category,
      priceMin,
      priceMax,
      sortBy,
      review,
      order,
      page: 1,
    }))

  }

  return (
    <div className="relative mr-none lg:mr-12 ml-4 w-48 lg:w-64 z-30">
      <button
        className="w-full border border-orange-400 p-2 focus:ring-orange-400 rounded-md text-left bg-white flex justify-between items-center"
        onClick={handleExpand}
      >
        {sortName}
        <img
          src="/down-arrow.svg"
          className={`h-8 ${expandSort === 'true' ? 'rotate-180' : ''}`}
          alt="Arrow pointing down and up"
        />
      </button>
      {expandSort === 'true' && (
        <div className="absolute w-full border border-orange-400 bg-white mt-1 rounded-md shadow-md">
          {options.map((option, index) => (
            <div
              key={index}
              className="p-2 hover:bg-orange-400 hover:text-white cursor-pointer"
              onClick={(e) => handleSortBy(e)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};