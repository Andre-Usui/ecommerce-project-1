import { productsActions } from "../../Redux/reducers/productReducer"
import { filterActions } from "../../Redux/reducers/filterReducer"
import { setLocalFilter } from "../../Redux/actions/filteraction"
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'

export default function TypeItem({ name, left, right, mainValue }) {
  const buttonClass = `rounded-none border-t-2 border-t-slate-300 lg:border-y-0 lg:border-x-2 ${left ? "lg:border-l-0" : ""} ${right ? "lg:border-r-0" : ""} lg:border-slate-300 h-20 text-slate-50 bg-orange-500 focus:ring-slate-500 enabled:hover:bg-orange-400 dark:bg-slate-300 dark:focus:ring-slate-400 dark:enabled:hover:bg-slate-400`
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const typeHandler = async () => {
    dispatch(productsActions.loadingList());
    dispatch(filterActions.resetFilters())
    dispatch(filterActions.setFilter({ name: 'mainCategory', value: mainValue }));
    dispatch(filterActions.setCategory(mainValue));
    dispatch(setLocalFilter({ mainCategory: mainValue }))
    navigate("/collections");
  }

  return (
    <>
      <button className={buttonClass} onClick={typeHandler}>{name}</button>
    </>
  )
}