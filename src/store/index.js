import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";

// Configure store
const configureStore = () => {
  return createStore(rootReducer, compose(applyMiddleware(thunkMiddleware)));
};

export default configureStore;
