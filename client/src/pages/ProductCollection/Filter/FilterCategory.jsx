import { Label, Checkbox } from "flowbite-react";
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '../../../Redux/reducers/filterReducer';
import { Fragment } from "react";

export default function FilterCategory() {

  const dispatch = useDispatch();

  const { categoryOptions } = useSelector((state) => state.filter);

  const handleCategoryChange = (e) => {
    dispatch(filterActions.setCategory(e.target.value));
  };


  return (

    <div className="flex w-full flex-col gap-2 px-2" id="checkbox">
      <h1 className='text-lg text-center' >Categorias</h1>
      {categoryOptions.map((category, index) => (
        <Fragment key={index}>
          <div className="flex items-center gap-1" >
            <Checkbox
              id={category}
              checked={index === 0 ? true : undefined}
              onChange={index === 0 ? (e) => e.preventDefault() : handleCategoryChange}
              value={category}
            />
            <Label className={`text-xs ${index === 0 ? 'text-md' : ''}`} htmlFor={category}>{category}</Label>
          </div>
        </Fragment>
      ))
      }
    </div>

  )
}