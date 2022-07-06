import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  counter1: 0,
  counter2: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    increment1: (state) => {
      state.counter1 += 1;
    },
    decrement1: (state) => {
      state.counter1 -= 1;
    },
    increment2: (state) => {
      state.counter2 += 1;
    },
    decrement2: (state) => {
      state.counter2 -= 1;
    },
  },
});
export const {
  increment,
  decrement,
  increment1,
  decrement1,
  increment2,
  decrement2,
} = counterSlice.actions;

export default counterSlice.reducer;
