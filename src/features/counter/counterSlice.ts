import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}
const initialState: CounterState = {
  value: 9
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
  }
})


export const { increment, decrement} = counterSlice.actions

console.log(increment())

export default counterSlice.reducer