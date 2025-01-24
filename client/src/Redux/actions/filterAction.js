import { filterActions } from '../reducers/filterReducer'

export function setLocalFilter(filters) {

  return async (dispatch) => {
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