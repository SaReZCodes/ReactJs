import React from "react";
import PizzaIngredient from './pizza-ingredient/pizza-ingredient';
import classes from './pizza.module.css';

const pizza = (props) => {
    console.log(props);
    return (
        <div className={classes.pizza}>
            <PizzaIngredient type="usa" />
            <PizzaIngredient type="goda" />
            <PizzaIngredient type="felfel" />
            <PizzaIngredient type="gharch" />
            <PizzaIngredient type="jambon" />
            {/* {
                props.list.map(x =>
                    <PizzaIngredient type={x} />
                )
                }; */}

            <button onClick={props.myClick}>testClick</button>
        </div>

    );

}

export default pizza;