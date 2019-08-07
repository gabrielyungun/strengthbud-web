import { setItem, getItem } from "../storage";
import API from "../API";
import { urls } from "../urls";

const name = "User";

const constants = {
  LOAD: `${name}/LOAD`,
  IS_LOGGING: `${name}/IS_LOGGING`
};

const login = ({ email, password }) => {
  return async dispatch => {
    dispatch({ type: constants.IS_LOGGING });
    try {
      const { token, id } = await API.post(urls.login, { email, password });
      const data = { email, token, id };
      setItem("@USER", data);
      dispatch({ type: constants.LOAD, payload: data });
      return data;
    } catch (err) {
      dispatch({ type: constants.LOAD, payload: initialState.data });
      throw err;
    }
  };
};

const actions = {
  login
};

// Reducer
const initialState = {
  data: getItem("@USER"),
  isLogging: false
};
const reducer = {
  [constants.LOAD]: (state, { payload }) => ({
    ...state,
    data: payload,
    isLogging: false
  }),
  [constants.IS_LOGGING]: (state, { payload }) => ({
    ...state,
    isLogging: true
  })
};

// Selectors
const selectors = {
  get: (state, params) =>
    params ? state[name].data[params] : state[name].data,
  isLoggedIn: state => state[name].data && state[name].data.token
};

const UserStore = {
  name,
  constants,
  actions,
  reducer,
  initialState,
  selectors
};

export { UserStore };
