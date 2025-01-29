import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '../../../Redux/reducers/filterReducer';
import { useEffect, useState } from "react";
import "./FilterPriceSlider.css";

export default function FilterReview() {

  const dispatch = useDispatch();

  const { priceMin, priceMax, priceMinDefault, priceMaxDefault } = useSelector((state) => state.filter);

  const handleMinChange = (value) => {
    const newValue = Math.min(value, priceMax - 10); // Ensure min < max
    dispatch(filterActions.setFilter({ name: 'priceMin', value: newValue }));
    setMinNum(newValue);
  };


  const handleMaxChange = (value) => {
    const newValue = Math.max(value, priceMin + 10); // Ensure min < max
    dispatch(filterActions.setFilter({ name: 'priceMax', value: newValue }));
    setMaxNum(newValue)
  };

  const [minNum, setMinNum] = useState(priceMin)
  const [maxNum, setMaxNum] = useState(priceMax)

  const handleMinNumChange = (value) => {
    if (isNaN(value) || value < priceMinDefault || value > priceMax - 10) {
      setMinNum(value);
    } else {
      setMinNum(value);
      dispatch(filterActions.setFilter({ name: 'priceMin', value: value }));
    }
  };

  const handleMaxNumChange = (value) => {
    if (isNaN(value) || value < priceMin + 10 || value > priceMaxDefault) {
      setMaxNum(value);
    } else {
      setMaxNum(value);
      dispatch(filterActions.setFilter({ name: 'priceMax', value: value }));
    }
  };


  useEffect(() => {
    dispatch(filterActions.setFilter({ name: 'priceMin', value: priceMinDefault }));
    setMinNum(priceMinDefault);
    setMaxNum(priceMaxDefault);
    dispatch(filterActions.setFilter({ name: 'priceMax', value: priceMaxDefault }));

  }, [dispatch, priceMinDefault, priceMaxDefault])


  return (
    <>
      <div className="flex w-[290px] m-4 flex-col gap-2 px-2">
        <h1 className="text-lg text-center">Preços</h1>
        <div className="relative h-8  text-sm font-medium text-gray-700 dark:text-gray-200">
          <div className="absolute h-8 flex items-center left-0">
            <p className="h-min pr-2 w-content align-middle">
              Min:
            </p>
            <input
              className="text-xs h-8 w-20 text-center"
              type="number"
              value={minNum}
              onChange={(e) => handleMinNumChange(Number(e.target.value))} />
          </div>
          <div className="absolute h-8 flex items-center right-0">
            <p className="h-min pr-2 w-content align-middle">
              Max:
            </p>
            <input
              className="text-xs h-content w-20 text-center"
              type="number"
              value={maxNum}
              onChange={(e) => handleMaxNumChange(Number(e.target.value))} />

          </div>
        </div>
        <div className="w-full">

          <div className="relative h-8 w-full">
            <div
              className="absolute top-1/2 transform -translate-y-1/2 w-full h-[12px] bg-gray-200 dark:bg-gray-700 rounded-lg pointer-events-none"
            >
              <div
                className="absolute h-[12px] bg-orange-400 dark:bg-orange-400 rounded-lg pointer-events-none"
                style={{
                  left: `${((priceMin - priceMinDefault) / (priceMaxDefault - priceMinDefault)) * 100}%`,
                  width: `${((priceMax - priceMin) / (priceMaxDefault - priceMinDefault)) * 100}%`,
                }}
              />
              <input
                type='range'
                id="min"
                min={priceMinDefault}
                max={priceMaxDefault}
                onChange={(e) => handleMinChange(Number(e.target.value))}
                value={priceMin}
              />
              <input
                type='range'
                id="max"
                min={priceMinDefault}
                max={priceMaxDefault}
                onChange={(e) => handleMaxChange(Number(e.target.value))}
                value={priceMax}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

