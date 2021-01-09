import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Navbar, NavbarBrand, NavItem } from "react-bootstrap";

function Nav() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="nav-bar justify-content-between"
      sticky="top"
    >
      <Link to="/home">
        <NavbarBrand>BudgetPlanner</NavbarBrand>
      </Link>
      <Link to="/income">
        <NavItem>Income</NavItem>
      </Link>
      <Link to="/expenses">
        <NavItem>Expenses</NavItem>
      </Link>
      <Link to="/savings">
        <NavItem>Savings</NavItem>
      </Link>
      <Link to="/budget">
        <NavItem>Available Budget</NavItem>
      </Link>
    </Navbar>
  );
}

export default Nav;
