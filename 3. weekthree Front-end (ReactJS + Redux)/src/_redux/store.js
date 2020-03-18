import { createStore, combineReducers } from "redux";

import counter from "../_reducers/counter";

//setup combine  reducers, for multiple reducer
//ex = reducers articles, categories, comments

const reducers = combineReducers({
  counter
});

const store = createStore(reducers);

export default store;
