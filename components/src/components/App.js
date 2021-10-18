import React from "react";
import Timer from './timer';
import Counter from './counter';
const App = (props) => {
    return (
        <div>
            <h1>
                <Timer></Timer>
                <Counter></Counter>
                <Counter></Counter>
                <Counter></Counter>
            </h1>
        </div>
    );

   
}
export default App;