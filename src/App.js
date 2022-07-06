import React from 'react';
import Counter from './features/Counter';
import Counter1 from "./features/Counter1";
import NewCounter from "./features/NewCounter";
import './App.css';
function App() {
  return (
    <div className="App">
    <Counter /> 
    <Counter1 /> 
    <NewCounter />
    </div>
  );
}

export default App;
