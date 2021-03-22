import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  counter: 12,
};

export const increment: any = createAction("INCREMENT");
export const decrement: any = createAction("DECREMENT");
export default createReducer(initialState, {
  [increment]: function (state) {
    state.counter = state.counter + 1;
  },
  [decrement]: (state)=>{
    state.counter = state.counter - 1;
  },
});
