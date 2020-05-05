import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import "../assets/style.css";
const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light className="navColor">
        <NavbarBrand href="/" className="mr-auto">BML</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#projects" className="navText">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/blaurel93" className="navText">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact" className="navText">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
