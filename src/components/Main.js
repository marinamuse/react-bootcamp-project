import React from "react";
import { Route } from "react-router-dom";
import "../App.css";
import Nav from "./Nav";
import Home from "./Home";
import Income from "./Income";
import Expenses from "./Expenses";
import Savings from "./Savings";
import Budget from "./Budget";

function Main() {
  return (
    <div className="main">
      <Nav />

      <Route path="/home" component={Home} />
      <Route path="/income" component={Income} />
      <Route path="/expenses" component={Expenses} />
      <Route path="/savings" component={Savings} />
      <Route path="/budget" component={Budget} />
    </div>
  );
}

export default Main;
