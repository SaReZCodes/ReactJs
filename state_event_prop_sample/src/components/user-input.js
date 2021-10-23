import react, { Component } from "react";

class UserInput extends Component {
    constructor(props) {
        super(props);
    }

    bootstrapStyle = {
        display: 'block',
        width: '100%',
        padding: '.375rem .75rem',
        fontsize: '1rem',
        lineheight: '1.5',
        color: '#495057',
        backgroundcolor: '#fff',
        backgroundclip: 'padding-box',
        border: '1px solid #ced4da',
        borderradius: '.25rem',
        transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out'
    }

    render() {
        return (<input onChange={this.props.change} value={this.props.newValue} style={this.bootstrapStyle} type='text' />)
    }
}

export default UserInput;