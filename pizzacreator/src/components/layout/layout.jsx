import React, { Fragment } from "react";
import classes from './layout.module.css';

const Layout = (props) => {
    return (
        <Fragment>
            {/* <div>Toolbar, Side drawer, Backdrop</div> */}
            <main className={classes.content}>
                {props.children}
            </main>
        </Fragment>
    );
}

export default Layout;