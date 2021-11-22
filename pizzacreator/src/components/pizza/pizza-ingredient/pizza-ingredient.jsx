import React, { Component } from "react";
import classes from './pizza-ingredient.module.css';

class PizzaIngredient extends Component {
    render() {
        let ingredient = null;
        switch (this.props.type) {
            case ('usa'):
                ingredient = <img alt="" className={classes.dimg2} />;
                break;
            case ('felfel'):
                console.log(classes.dimg2);
                ingredient = <img alt="" className={classes.saimg2} />;;
                break;
            case ('gharch'):
                ingredient = <div  className={classes.saimg1}></div>;
                break;
            case ('jambon'):
                ingredient = <div className={classes.mimg6}></div>;
                break;
            case ('mexiki'):
                ingredient = <div className={classes.simg2}></div>;
                break;
            case ('goda'):
                ingredient = <div className={classes.simg22}></div>;
                break;
            default:
                ingredient = null;
        }
        return (
            <div className="figure-profile ">
                <figure data-aos-once="true" data-aos="fade-zoom-in" data-aos-offset="600" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    {ingredient}
                </figure>
            </div>
        );

    }

}

export default PizzaIngredient;

// PizzaIngredient.propTypes = {
//     type: PropTypes.string
// }