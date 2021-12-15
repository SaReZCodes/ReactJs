import { Component } from "react";
import { NavMenu } from "../NavMenu";

class AppHeader extends Component {
    constructor(user) {
        super(user);
    }
    render() {
        return (
            <NavMenu user={this.props.user} ></NavMenu>
        );
    }
}
export default AppHeader;