import React from "react";

import "App.css";
import "App.js";
import "App.test.js";
import "index.css";
import "index.js";
import "logo.svg";
import "setupTests.js";
import ".gitignore";
import "package.json";
import "package-lock.json";
import { render } from "@testing-library/react";

const calculator = () => <main className = "calculator"></main>;

export default calculator;

let.calculator{
    height = 500 px;
    width = 300 px;
    background-color = black;

    display = flex;
    justify content = center;
    align-items = center;

}

render () {
    return(
        <div className = "Calculator">
            <Buttons>
                <Button onClick = {this.handleClick} label = "1" value = "1"/>
                <Button onClick = {this.handleClick} label = "2" value = "2"/>
                <Button onClick = {this.handleClick} label = "3" value = "3"/>
                <Button onClick = {this.handleClick} label = "4" value = "4"/>
                <Button onClick = {this.handleClick} label = "5" value = "5"/>
                <Button onClick = {this.handleClick} label = "6" value = "6"/>
                <Button onClick = {this.handleClick} label = "7" value = "7"/>
                <Button onClick = {this.handleClick} label = "8" value = "8"/>
                <Button onClick = {this.handleClick} label = "9" value = "9"/>
                <Button onClick = {this.handleClick} label = "0" value = "0"/>
                <Button onClick = {this.handleClick} label = "C" value = "Clear"/>
                <Button onClick = {this.handleClick} label = "+" value = "+"/>
                <Button onClick = {this.handleClick} label = "-" value = "-"/>
                <Button onClick = {this.handleClick} label = "/" value = "/"/>
                <Button onClick = {this.handleClick} label = "x" value = "*"/>
                <Button onClick = {this.handleClick} label = "." value = "."/>
                <Button onClick = {this.handleClick} label = "=" value = "="/>
            </Buttons>
        </div>
    )
}

handleClick{
    const value = target.getAttribute("data-value")
}

