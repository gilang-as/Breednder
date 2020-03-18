import React, { Component } from "react";
import { connect } from "react-redux";

//import action
import { actionIncrement } from "../_actions/counter";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h2>{this.props.conter.number}</h2>
        <button onClick={() => this.props.dispatch(actionIncrement())}></button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

export default connect(mapStateToProps)(Counter);
