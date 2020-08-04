import React, { Component } from "react";

class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Solution: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

    calculate = () => {
        this.setState({
            result: eval(this.state.result)
        })
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

ReactDOM.render(
    Calculator,
    document.getElementById("root")
);