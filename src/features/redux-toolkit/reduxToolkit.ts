import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  counter: 12,
};

export const increment = createAction("INCREMENT");
export const decrement = createAction("DECREMENT");
export default createReducer(initialState, {
  [String(increment)]: function (state) {
    state.counter = state.counter + 1;
  },
  [String(decrement)]: (state) => {
    state.counter = state.counter - 1;
  },
});
