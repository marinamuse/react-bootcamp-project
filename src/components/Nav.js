import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Collapse,
  NavbarToggler,
} from "reactstrap";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark className="nav-bar" sticky="top" expand="md">
      <Link to="/home">
        <NavbarBrand>BudgetPlanner</NavbarBrand>
      </Link>
      <NavbarToggler onClick={toggle} color="white" />
      <Collapse isOpen={isOpen} navbar>
        <Link to="/income">
          <NavItem className="navbar-item px-3">Income</NavItem>
        </Link>
        <Link to="/expenses">
          <NavItem className="navbar-item px-3">Expenses</NavItem>
        </Link>
        <Link to="/savings">
          <NavItem className="navbar-item px-3">Savings</NavItem>
        </Link>
        <Link to="/budget">
          <NavItem className="navbar-item px-3">Available Budget</NavItem>
        </Link>
      </Collapse>
    </Navbar>
  );
}

export default Nav;
