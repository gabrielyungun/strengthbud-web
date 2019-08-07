import { combineReducers } from "redux";

import createReducer from "./createReducer.js";

import { UserStore } from "./controllers/User.store";
import { UsersStore } from "./controllers/Users.store";

const transformReducer = ({ initialState, reducer }) =>
  createReducer(initialState, reducer);

const rootReducer = combineReducers({
  [UserStore.name]: transformReducer(UserStore),
  [UsersStore.name]: transformReducer(UsersStore)
});

export default rootReducer;
