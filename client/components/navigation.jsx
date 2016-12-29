import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Navigation extends Component {

  render() {

    return (

      <Navbar color="faded" light>
        <NavbarBrand href="/">elore</NavbarBrand>
        <Nav className="float-xs-right" navbar>
        <NavItem>
          <NavLink href="">About</NavLink>
        </NavItem>
          <NavItem>
            <NavLink href="">Sign In</NavLink>
          </NavItem>
        </Nav>
      </Navbar>

    );

  }

}

export default Navigation;
