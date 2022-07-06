import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./CounterButtonSlice";

const NewCounter = () => {
  const counter = useSelector((state) => state.AnyName.counter);
  console.log("NewCounter", counter);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  return (
    <div>
      <h1>Increment/Decrement Component3 With separate createSlice</h1>
      <h4>using react and redux</h4>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment +
      </button>
      <input value={counter} />
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement -
      </button>
      <h3>Button3</h3>
      <input
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(incrementByAmount(Number(incrementAmount)));
        }}
      >
        Increment By Ammount
      </button>
      <h3>Button</h3>
      <br />
    </div>
  );
};

export default NewCounter;
