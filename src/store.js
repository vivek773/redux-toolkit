import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./features/counterSlice";
import xyz from "./features/CounterButtonSlice";

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    AnyName : xyz,
  },
})