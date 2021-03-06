import React from 'react'
import { Nav, NavItem, Navbar } from 'react-bootstrap'
// import LoginButton from './LoginButton'
// import { Link } from 'react-router-dom'

const NavbarHeader = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#brand">MyNews</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1}>
          {/* <Link to="/">Home</Link> */}
        </NavItem>
        <NavItem eventKey={2}>
          {/* <Link to="/category">Category</Link> */}
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem>
          Login
        </NavItem>
        <NavItem >
          Register
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default NavbarHeader