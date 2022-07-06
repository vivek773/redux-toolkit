import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, increment1, decrement1 } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const count1 = useSelector((state) => state.counter.counter1);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Increment/Decrement Component1</h1>
      <h4>using react and redux</h4>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment +
      </button>
      <input value={count} />
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement -
      </button>
      <h3>Button1</h3>
      <br />
      <button
        onClick={() => {
          dispatch(increment1());
        }}
      >
        Increment +
      </button>
      <input value={count1} />
      <button
        onClick={() => {
          dispatch(decrement1());
        }}
      >
        Decrement -
      </button>
      <h3>Button2</h3>
    </div>
  );
};

export default Counter;
