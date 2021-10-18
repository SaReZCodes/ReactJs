import React, { Component } from 'react';
import './item.css';

class Item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={this.props.className}>{this.props.children}</div>
        );
    }
}

export default Item;