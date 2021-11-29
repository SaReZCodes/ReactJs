import React from "react";

const Like = (props) => {
    let classes = "fa fa-heart";
    if (props.liked === false) {
        classes += "-o";
    }
    return (
        <i className={classes}
            onClick={props.click}
            style={{ cursor: "pointer" }}
        ></i>
    );
}

export default Like;