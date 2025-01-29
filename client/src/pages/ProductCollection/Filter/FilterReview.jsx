import { Label, Checkbox } from "flowbite-react";
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '../../../Redux/reducers/filterReducer';

export default function FilterReview() {

    const dispatch = useDispatch();
  
    const { review } = useSelector((state) => state.filter);
  
    const handle = (e) => {

      const { value, checked } = e.target;
      console.log(value, checked)
      if (!checked) {
        dispatch(filterActions.setFilter({name: 'review', value: ''}));
      } else {
        dispatch(filterActions.setFilter({name: 'review', value: value}));
      }
    };

  return (
    <>
      <div className="flex w-[300px] flex-col m-4 gap-2 px-2" id="checkbox">
        <h1 className='text-lg text-center'>Avaliações</h1>
        <div className="flex items-center gap-1" >
          <Checkbox
            id= '1'
            checked={review === '1'}
            onChange={handle}
            value='1'
          />
          <Label htmlFor='1'>⭐</Label>
        </div>
        <div className="flex items-center gap-1" >
          <Checkbox
            id= '2'
            checked={review === '2'}
            onChange={handle}
            value='2'
          />
          <Label htmlFor='2'>⭐⭐</Label>
        </div>
        <div className="flex items-center gap-1" >
          <Checkbox
            id= '3'
            checked={review === '3'}
            onChange={handle}
            value='3'
          />
          <Label htmlFor='3'>⭐⭐⭐</Label>
        </div>
        <div className="flex items-center gap-1" >
          <Checkbox
            id= '4'
            checked={review === '4'}
            onChange={handle}
            value='4'
          />
          <Label htmlFor='4'>⭐⭐⭐⭐</Label>
        </div>
        <div className="flex items-center gap-1" >
          <Checkbox
            id= '5'
            checked={review === '5'}
            onChange={handle}
            value='5'
          />
          <Label htmlFor='5'>⭐⭐⭐⭐⭐</Label>
        </div>
      </div>
    </>
  )
}