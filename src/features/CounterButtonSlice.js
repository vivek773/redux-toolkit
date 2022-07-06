import { createSlice } from "@reduxjs/toolkit";
const states = {
  counter: 0,
};
export const CounterButtonSlice = createSlice({
  name: "counter2",
  initialState: states,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload;
    },
  },
});
export const { increment, decrement, incrementByAmount } =
  CounterButtonSlice.actions;

export default CounterButtonSlice.reducer;
