import React, { Component } from "react";
import Pizza from '../../components/pizza/pizza';
class PizzaBuilder extends Component {

    state = {
        doughType: 0,
        sauceType: 0,
        cheesetype: 0,
        ingredientList: {
            meets: [],
            vegetables: []
        }
    }

    render() {
        return (
            <React.Fragment>
                <Pizza list={this.state.pizzaList} myClick={this.clickHandler} />
            </React.Fragment>
        );
    }

    clickHandler = () => {
        this.state.ingredientList.meets.push(
            { title: 'MinceMeat', value: 10, unit: 'g' },
            { title: 'GrillOrder', value: 5, unit: 'g' },
        )
        this.setState({ 'ingredientList': this.state.ingredientList });
    }
}

export default PizzaBuilder