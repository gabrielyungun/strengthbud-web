// This template is used for making a single request
import API from "../API";

function makeLoad({ name, url }) {
  const constants = {
    LOAD: `${name}/LOAD`
  };

  const actions = {
    load: () => {
      return async dispatch => {
        const data = await API.get(url);
        if (data) {
          dispatch({ type: constants.LOAD, payload: data });
        }
      };
    }
  };

  // Reducer
  const initialState = {
    data: []
  };
  const reducer = {
    [constants.LOAD]: (state, { payload }) => ({
      ...state,
      data: payload
    })
  };

  // Selectors
  const selectors = {
    get: state => state[name].data
  };

  return {
    name,
    constants,
    actions,
    reducer,
    initialState,
    selectors
  };
}

export { makeLoad };
