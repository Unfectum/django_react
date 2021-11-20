import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
