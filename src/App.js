import React from "react";
import "./App.css";
import Login from "./components/Login";
import Main from "./components/Main";
import { Switch, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={Main} />
          <Route path="/" exact component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
