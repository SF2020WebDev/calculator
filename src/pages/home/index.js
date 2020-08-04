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
      <h1>Calculator {this.state.first-number} {this.state.second-number}</h1>
      <p>Enter first number:</p>
      <input
        type='numbers'
        onChange={this.changeHandler}
      />
      <p>Enter second number:</p>
      <input
        type='numbers'
        onChange={this.changeHandler}
      />
      </form>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));