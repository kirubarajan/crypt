import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import AccountsUIWrapper from './accounts';

class Navigation extends Component {

  constructor(props) {

    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {

      dropdownOpen: false

    };

  }

  toggle() {

    this.setState({

      dropdownOpen: !this.state.dropdownOpen

    });

  }

  render() {

    return (

      <Navbar color="faded" light>

        <NavbarBrand href="/">elore</NavbarBrand>

        <Nav className="float-xs-left" navbar>

          <NavItem>

            <NavLink href="/gary"> Gary </NavLink>

          </NavItem>

          <NavItem>

            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>

              <DropdownToggle caret>

                Account

              </DropdownToggle>

              <DropdownMenu>

                <DropdownItem header> <AccountsUIWrapper /> </DropdownItem>

              </DropdownMenu>

            </Dropdown>

          </NavItem>

        </Nav>

      </Navbar>

    );

  }

}

export default Navigation;
