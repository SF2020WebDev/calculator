import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './pages/home/index.js';
import Adder from './adder.js';

function App() {
  return (
    <div className="App">
      <Calculator />
      <Adder number1={1} number2={2} />
      <Adder number1={5} number2={8} />
    </div>
  );
}

export default App;
