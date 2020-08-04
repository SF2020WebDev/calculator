import React from 'react';
import ReactDOM from 'react-dom';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: "",
      secondNumber: "",
    };
  }
  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
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
    );
  }
}

export default class KeyPad extends Component{
    buttonPressed = (event) => {
        this.props.buttonPressed(event.target.name);
    };
    render() {
        return(
            <div>
                <Buttons>
                    <Button onClick = {this.handleClick} label = "+" value = "+"/>
                    <Button onClick = {this.handleClick} label = "-" value = "-"/>
                    <Button onClick = {this.handleClick} label = "/" value = "/"/>
                    <Button onClick = {this.handleClick} label = "x" value = "*"/>

                </Buttons>
            </div>
        )
    }
}

export default class Output extends Component{
    render () {
        return(
            <div>
                <p>{this.props.result}</p>
            </div>
        )
    }
}


ReactDOM.render(<Calculator />, document.getElementById('root'));