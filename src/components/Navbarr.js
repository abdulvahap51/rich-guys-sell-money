import React from 'react'

import { Navbar,NavbarBrand} from 'reactstrap';

function Navbarr(args) {
  




  return (
    <div>
<Navbar {...args}>
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarBrand href="/crypto">Crypto marketing</NavbarBrand>
        <NavbarBrand href="/marketing">Marketing</NavbarBrand>
        <NavbarBrand href="/cart">Cart</NavbarBrand>
        {/* <NavbarToggler  /> */}
        {/* <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse> */}
      </Navbar>
      
    </div>
  )
}

export default Navbarr
