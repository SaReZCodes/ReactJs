import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../NavMenu.css';


class AppAnonymousHeader extends Component {
    constructor(user) {
        super(user);
    }
    render() {
        return (
            <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
              <Container>
                <NavbarBrand tag={Link} to="/">UserManagement.Web</NavbarBrand>
                <NavbarToggler  className="mr-2" />
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse"  navbar>
                 
                </Collapse>
              </Container>
            </Navbar>
          </header>
        );
    }
}
export default AppAnonymousHeader;