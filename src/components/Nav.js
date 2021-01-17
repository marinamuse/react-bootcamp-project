import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
} from "reactstrap";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark className="nav-bar" sticky="top" expand="md">
      <NavbarBrand href="/home">BudgetPlanner</NavbarBrand>
      <NavbarToggler onClick={toggle} color="white" />
      <Collapse isOpen={isOpen} navbar>
        <NavLink href="/income" className="navbar-item px-3">
          Income
        </NavLink>
        <NavLink href="/expenses" className="navbar-item px-3">
          Expenses
        </NavLink>
        <NavLink href="/savings" className="navbar-item px-3">
          Savings
        </NavLink>
        <NavLink href="/budget" className="navbar-item px-3">
          Available Budget
        </NavLink>
      </Collapse>
    </Navbar>
  );
}

export default Nav;
