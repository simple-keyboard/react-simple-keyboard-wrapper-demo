import React, { Component } from "react";
import { render } from "react-dom";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "./index.css";

class KeyboardWrapper extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.stateToIgnore !== this.props.stateToIgnore) return false;
    else return true;
  }

  render() {
    return <Keyboard ref={r => (this.keyboard = r)} {...this.props} />;
  }
}

export default KeyboardWrapper;
