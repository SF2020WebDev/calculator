import React from 'react';
import ReactDOM from 'react-dom';



export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        firstNumber: "",
        secondNumber: "",
        total: "",
    };
  }


  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val}); 
    
  }

  changeHandler(){
    const add = () => {
        console.log (this.state.firstNumber) + (this.state.secondNumber);
    }
        <button onClick= {this.handleClick} value = "+"> + </button>
    
    let subtract = () => {
        console.log(this.state.firstNumber) - (this.state.secondNumber);
      } 
      <button onClick= {this.handleClick} value = "-"> - </button>
    
    let multiply = () => {
        console.log(this.state.firstNumber) * (this.state.secondNumber);
    }
        <button onClick= {this.handleClick} value = "*"> x </button>
    
    let divide = () => {
        console.log(this.state.firstNumber) / (this.state.secondNumber);
    }
        <button onClick= {this.handleClick} value = "/"> / </button>
  }
  render() {
    return (
        <div>
      <form>
      <h1>Calculator {this.state.firstNumber} {this.state.secondNumber}</h1>
      <p>Enter first number:</p>
      <input
        type='number'
        onChange={this.changeHandler}
      />
      <p>Enter second number:</p>
      <input
        type='number'
        onChange={this.changeHandler}
      />
      </form>


      

      </div>
    );
  }
}

/*class KeyPad extends Component{
    buttonPressed = (event) => {
        this.props.buttonPressed(event.target.name);
    };
    render() {
        return(
            <div>
                <p>{this.props.result}</p>
                <Buttons>
                    <Button onClick = {this.handleClick} label = "+" value = "+"/>
                    <Button onClick = {this.handleClick} label = "-" value = "-"/>
                    <Button onClick = {this.handleClick} label = "/" value = "/"/>
                    <Button onClick = {this.handleClick} label = "x" value = "*"/>

                </Buttons>
            </div>
        )
    }
}*/



