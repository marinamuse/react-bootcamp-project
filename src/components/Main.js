import React from "react";
import { Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Income from "./Income";
import Expenses from "./Expenses";
import Savings from "./Savings";
import Budget from "./Budget";
import Footer from "./Footer";

function Main() {
  return (
    <>
      <Nav />
      <Route path="/home" component={Home} />
      <Route path="/income" component={Income} />
      <Route path="/expenses" component={Expenses} />
      <Route path="/savings" component={Savings} />
      <Route path="/budget" component={Budget} />
      <Footer />
    </>
  );
}

export default Main;
