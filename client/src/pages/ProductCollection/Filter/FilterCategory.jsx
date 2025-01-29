import { Label, Checkbox } from "flowbite-react";
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '../../../Redux/reducers/filterReducer';
import { Fragment } from "react";

export default function FilterCategory() {

  const dispatch = useDispatch();

  const { category, categoryOptions } = useSelector((state) => state.filter);

  const handleCategoryChange = (e) => {
    dispatch(filterActions.setCategory(e.target.value));
  };


  return (

    <div className="flex w-[300px] m-4 flex-col gap-2 px-2" id="checkbox">
      <h1 className='text-lg text-center' >Categorias</h1>
      {categoryOptions.map((cat, index) => (
        <Fragment key={index}>
          <div className="flex items-center gap-2" >
            <Checkbox
              id={cat}
              checked={category.includes(cat) ? true : ''}
              onChange={index === 0 ? (e) => e.preventDefault() : handleCategoryChange}
              value={cat}
            />
            <Label className={`text-xs ${index === 0 ? 'text-md' : ''}`} htmlFor={cat}>{cat}</Label>
          </div>
        </Fragment>
      ))
      }
    </div>

  )
}