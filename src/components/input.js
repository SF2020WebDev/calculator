import React from 'react'

const Input = () => {
    return (
        <div>
        <form>
        <h1>Calculator</h1>
        <p>Enter first number:</p>
        <input
            type='number'
            onChange={(event) => this.updateFirstNumber(event)}
            value={this.state.firstNumber}
        />
        <p>Enter second number:</p>
        <input
            type='number'
            onChange={(event) => this.updateSecondNumber(event)}
            value={this.state.secondNumber}
        />
        </form>
        </div>
    )
}

export default Input
