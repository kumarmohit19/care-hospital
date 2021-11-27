import React, { useState } from "react";
import Medilogo from "../images/Medi-Logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Example = props => {
  /*should have a Navbar brand, toggler and the NavItem (logout) should be linked to sign-in page */
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">DMRD</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/addPatient" className="nav-link">Add Patient</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/allPatients" className="nav-link">All Patients</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/bookAppointment" className="nav-link">Book Appointments</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/allAppointments/" className="nav-link">All Appointments</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  User
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to="/viewProfile" className="nav-link">
                    ViewProfile
                  </Link>
                  <DropdownItem divider />
                  <Link to="/" className="nav-link">
                    Logout
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    
  );
};
export default Example;
