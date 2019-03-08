/**
 * 3/7/2019 Outdated. Please wait for update on 3/8/2019
 */
import React, { Component } from "react";
import { render } from "react-dom";
import KeyboardWrapper from "./KeyboardWrapper.js";
import "./index.css";

class App extends Component {
  state = {
    layoutName: "default",
    input: ""
  };

  onChange = input => {
    this.setState({
      input: input
    });
    console.log("Input changed", input);
  };

  onKeyPress = button => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  handleShift = () => {
    let layoutName = this.state.layoutName;

    this.setState({
      layoutName: layoutName === "default" ? "shift" : "default"
    });
  };

  onChangeInput = event => {
    let input = event.target.value;
    this.setState(
      {
        input: input
      },
      () => {
        this.keyboardWrapper.keyboard.setInput(input);
      }
    );
  };

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          placeholder={"Tap on the virtual keyboard to start"}
          onChange={e => this.onChangeInput(e)}
        />
        <KeyboardWrapper
          ref={r => (this.keyboardWrapper = r)}
          physicalKeyboardHighlight={true}
          layoutName={this.state.layoutName}
          onChange={input => this.onChange(input)}
          onKeyPress={button => this.onKeyPress(button)}
          stateToIgnore={this.state.input}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
