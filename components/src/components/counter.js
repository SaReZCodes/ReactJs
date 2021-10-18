import react from "react";
import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.incHandler = this.incHandler.bind(this);
    }

    render() {
        return (
            <div style={{ border: '2px solid red' }}>
                <div><button onClick={this.incHandler}>+</button></div>
                <div>
                    {this.state.counter}
                </div>
                <div><button onClick={this.decHandler}>-</button></div>
            </div>);
    }

    incHandler() {
        console.log(this.state.counter);
        let val = this.state.counter;
        this.setState({ counter: ++val });
        //  console.log(value);
    }

    decHandler = () => {
        let val = this.state.counter;
        this.setState({ counter: --val });
        // console.log(value);
    }

}

export default Counter;