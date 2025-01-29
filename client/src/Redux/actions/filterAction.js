import { filterActions } from '../reducers/filterReducer'

export function setLocalFilter(filters) {

  return (dispatch) => {
    try {
      const query = new URLSearchParams(
        Object.fromEntries(
          Object.entries(filters).filter(([_, value]) => value !== null && value !== '')
        )
      ).toString();

      dispatch(filterActions.setFilter({
        name: "localFilter",
        value: query || ''
      }))
    } catch (err) {
      console.log(err)
      dispatch(filterActions.setFilter({
        name: "localFilter",
        value: ''
      })
      )
    };
  };
};

export function setMultipleFilters(filters) {

  return (dispatch) => {
    try {
      console.log(filters)
      filters.map(async (filter) => (
        await dispatch(filterActions.setFilter({
          name: filter.name,
          value: filter.value
        }))

      ))

      
    } catch (err) {
      console.log(err)
      
      
    };
  };
};