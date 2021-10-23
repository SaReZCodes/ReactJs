import react, { Component } from "react";
import './user-output.css';
class UserOutput extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <p className='user-output'> welcome {this.props.username}</p>
        )
    }
}

export default UserOutput;