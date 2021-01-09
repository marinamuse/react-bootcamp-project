import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Register from "./components/Register";
import Login from "./components/Login";
import Income from "./components/Income";
import Expenses from "./components/Expenses";
import Savings from "./components/Savings";
import Budget from "./components/Budget";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/">
          <Nav />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/income">
          <Income />
        </Route>
        <Route path="/expenses">
          <Expenses />
        </Route>
        <Route path="/savings">
          <Savings />
        </Route>
        <Route path="/budget">
          <Budget />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
