import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment2, decrement2 } from "./counterSlice";

const Counter1 = () => {
  const counter = useSelector((state) => state.counter.counter2);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Increment/Decrement Component2</h1>
      <h4>using react and redux</h4>
      <button
        onClick={() => {
          dispatch(increment2());
        }}
      >
        Increment +
      </button>
      <input value={counter} />
      <button
        onClick={() => {
          dispatch(decrement2());
        }}
      >
        Decrement -
      </button>
      <h3>Button3</h3>
      <br />
    </div>
  );
};

export default Counter1;
