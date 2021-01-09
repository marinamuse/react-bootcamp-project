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
        <NavItem className="text-white">Income</NavItem>
      </Link>
      <Link to="/expenses">
        <NavItem className="text-white">Expenses</NavItem>
      </Link>
      <Link to="/savings">
        <NavItem className="text-white">Savings</NavItem>
      </Link>
      <Link to="/budget">
        <NavItem className="text-white">Available Budget</NavItem>
      </Link>
    </Navbar>
  );
}

export default Nav;
