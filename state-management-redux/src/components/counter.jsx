import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counterReducer: { count }, incrementValue, decrementValue, resetValue } = this.props;

    return (
      <section className="card mt-5">
        <div className="card-body text-center">
          <span className="badge m-2 badge-primary" style={{ color: "gray" }}>{count}</span>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-secondary btn-sm" onClick={incrementValue}>+</button>
            <button className="btn btn-secondary btn-sm m-2" onClick={decrementValue}>-</button>
            <button className="btn btn-danger btn-sm" onClick={resetValue}>Reset</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Counter;