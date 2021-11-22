import React from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';
import { Component } from 'react';
import { render } from '@testing-library/react';

class person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] render');
    }

    static contextType = AuthContext;
    componentDidMount() {
        console.log(this.context.authenticated);
    }
    render() {
        return (
            <div className={classes.Person}>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>please login</p>}
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
}
export default person;

person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}