import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '../../../Redux/reducers/filterReducer';
import { productsActions } from '../../../Redux/reducers/productReducer';
import { setLocalFilter } from '../../../Redux/actions/filterAction';
import { Button } from "flowbite-react";





export default function PageButton({ number }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    category,
    priceMin,
    priceMax,
    sortBy,
    review,
    order,
    page
   } = useSelector((state) => state.filter);

  const handlePageChange = (e) => {
    console.log(e)
    const pageButton = Number(e.target.outerText);
    const filters = {
      category,
      priceMin,
      priceMax,
      sortBy,
      review,
      order,
      page:pageButton
    }
    dispatch(filterActions.setFilter({ name: 'expandFilter', value: 'false' }));
    dispatch(setLocalFilter(filters));
    

  };


  return (
    <>
      <Button
        className={`h-12 w-12 bg-orange-500 border-2 border-orange-300 text-slate-50 enabled:hover:bg-orange-400 focus:ring-2 focus:ring-orange-300 ${+number === page? 'border-4': ''}`}
        onClick={+number === page? (e) => e.preventDefault() : handlePageChange}
      >
        {number}
      </Button>
    </>
  )
}