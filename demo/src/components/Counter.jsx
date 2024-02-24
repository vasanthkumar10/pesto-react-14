import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    console.log("constructor");
    super(); // parent's constructor
    this.state = {
      count: 0,
    };
    // this.handleIncrement = this.handleIncrement.bind(this);
    // this.handleDecrement = this.handleDecrement.bind(this);
  }

  static getDerivedStateFromProps(props) {
    console.log("getDerivedStateFromProps", props);
    return props;
  }

  shouldComponentUpdate() {
    console.log("should component update");
    return true;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleIncrement = (step) => {
    // console.log("increment fn", this);
    this.setState({
      count: this.state.count + step,
    });
  };

  handleDecrement = () => {
    // console.log("decrement fn", this);
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    console.log("rendering....");
    return (
      <>
        <h1>Counter - {this.state.count}</h1>
        <button onClick={() => this.handleIncrement(1)}>increment by 1</button>
        <button onClick={() => this.handleIncrement(5)}>increment by 5</button>
        <button onClick={this.handleDecrement}>decrement</button>
      </>
    );
  }
}
