import React from "react";
import { createStore } from "redux";

const actionINC = () => {
  return {
    type: "INCREMENT",
    payload: null
  };
};

const actionDEC = () => {
  return {
    type: "DECREMENT",
    payload: null
  };
};

//Setup Reducer
const initialState = {
  number: 0
};

function counter(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        number: state.number + 1
      };
    case "DECREMENT":
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
}

//initial store
let store = createStore(counter);

//listen value global state, with `store.subscibe`
//global state can be access to `store.getState()`
store.subscribe(() => {
  console.log(store.getState().number);
});

//function Component
const Home = () => {
  return (
    <div>
      <h1>COUNTER</h1>
      <button onClick={() => store.dispatch(actionINC())}>INCREMENT</button>
      <button onClick={() => store.dispatch(actionDEC())}>DECREMENT</button>
    </div>
  );
};

export default Home;
