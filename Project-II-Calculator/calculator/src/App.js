import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="app">
      <CalculatorDisplay />
      <div className='row'>
        <NumberButton value="clear" />
        <ActionButton value="&divide;" />
      </div>
      <div className='row'>
        <NumberButton value="7" />
        <NumberButton value="8" />
        <NumberButton value="9" />
        <ActionButton value="&times;" />
      </div>
      <div className='row'>
        <NumberButton value="4" />
        <NumberButton value="5" />
        <NumberButton value="6" />
        <ActionButton value="&minus;" />
      </div>
      <div className='row'>
        <NumberButton value="1" />
        <NumberButton value="2" />
        <NumberButton value="3" />
        <ActionButton value="+" />
      </div>
      <div className='row'>
        <NumberButton value="0" />
        <ActionButton value="=" />
      </div>
    </div>
  );
};

export default App;
