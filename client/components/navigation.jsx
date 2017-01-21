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

            <NavLink href="/browse"> Browse </NavLink>

          </NavItem>

          <NavItem>

            <NavLink href="/portfolio"> Portfolio </NavLink>

          </NavItem>

          <NavItem>

            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>

              <DropdownToggle caret>

                Arun

              </DropdownToggle>

              <DropdownMenu>

                <DropdownItem header> Account </DropdownItem>

                <DropdownItem> Messages </DropdownItem>

                <DropdownItem> Profile </DropdownItem>

                <DropdownItem> Settings </DropdownItem>

                <DropdownItem divider />

                <DropdownItem> <AccountsUIWrapper /> </DropdownItem>

              </DropdownMenu>

            </Dropdown>

          </NavItem>

        </Nav>

      </Navbar>

    )

  }

}

export default Navigation;
