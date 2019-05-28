import React, { Component } from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

export default class App extends Component {

  //This is where we will handle calculator logic

  // Expression will be stored in one string inside of our state. We will call 'eval()' on this later!
  state = {
    expression: '0'
  }

  calculate = async () => {
    let newExpression = this.state.expression.toString();
    newExpression = newExpression.replace('÷', '/');
    newExpression = newExpression.replace('×', '*');
    newExpression = newExpression.replace('−', '-');

    try {
      newExpression = eval(newExpression);
      await this.setState({expression: newExpression});
    } catch (e){
      console.error("Failed to evaluate expression.");
      console.error(e);
    }
  }

  input = async event => {
    event.persist();

    //Handle zeroes cuz they can be ugly... Also octal literals not allowed :)
    if(this.state.expression === "0") {
      await this.setState({expression: ''});
    }
    const newExpression = this.state.expression + event.target.textContent;
    await this.setState({expression: newExpression})
  }

  clear = () => {
    this.setState({expression: '0'});
  }

  render (){
  return (
    <div className="app">
      <CalculatorDisplay value={this.state.expression}/>
      <div className='row'>
        <NumberButton click={this.clear} value="clear" />
        <ActionButton click={this.input} value="&divide;" />
      </div>
      <div className='row'>
        <NumberButton click={this.input} value="7" />
        <NumberButton click={this.input} value="8" />
        <NumberButton click={this.input} value="9" />
        <ActionButton click={this.input} value="&times;" />
      </div>
      <div className='row'>
        <NumberButton click={this.input} value="4" />
        <NumberButton click={this.input} value="5" />
        <NumberButton click={this.input} value="6" />
        <ActionButton click={this.input} value="&minus;" />
      </div>
      <div className='row'>
        <NumberButton click={this.input} value="1" />
        <NumberButton click={this.input} value="2" />
        <NumberButton click={this.input} value="3" />
        <ActionButton click={this.input} value="+" />
      </div>
      <div className='row'>
        <NumberButton click={this.input} value="0" />
        <ActionButton click={this.calculate} value="=" />
      </div>
    </div>
  );
  }
};