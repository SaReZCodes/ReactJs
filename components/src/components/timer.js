import React from "react";
import { Component } from "react";

class Timer extends Component {
    state = {
        timer: 0
    }

    constructor(props) {
        super(props);
        this.tick();
    }

     tick() {
         setInterval(() => {
             var i = this.state.timer + 1;
             this.setState({ timer: i });
         }, 1000);
     }

    render() {
        return (
            <div>
                    {this.state.timer}
            </div>
        );
    }
}

export default Timer;