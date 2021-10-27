import react from "react";

const withClass = props => {
    <div className={props.classes}>
        {props.children};
    </div>
}

export default withClass;

//details
//https://reactjs.org/docs/higher-order-components.html