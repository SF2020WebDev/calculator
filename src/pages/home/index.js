import React from 'react';
import Button from '../../components/button.js';
import Input from '../../components/input.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        firstNumber: 0,
        secondNumber: 0,
        total: 0,
    };
  }
    updateFirstNumber(event){
        this.setState({firstNumber: parseInt(event.target.value)})
    }
    updateSecondNumber(event) {
      this.setState({secondNumber: parseInt(event.target.value)})
    }
    add() {
        this.setState({total:this.state.firstNumber + this.state.secondNumber});
    }
    subtract() {
      this.setState({total:this.state.firstNumber - this.state.secondNumber});
      }
    multiply() {
      this.setState({total:this.state.firstNumber * this.state.secondNumber});
    }
    divide() {
      this.setState({total:this.state.firstNumber / this.state.secondNumber});
    }
  render() {
    return (
      <div>
      <Input />
      <Button onClick={() => this.add()} value={"+"} />
      <Button onClick={() => this.subtract()} value={"-"} />
      <Button onClick={() => this.multiply()} value={"*"} />
      <Button onClick={() => this.divide()} value={"/"} />
      <p>{this.state.total}</p>
      </div>

    );
  }
}






