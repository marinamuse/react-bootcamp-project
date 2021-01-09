import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

function Home() {
  return (
    <div className="container">
      <h2>Welcome to BudgetPlanner</h2>
      <h4>Manage your cashflows easily</h4>
      <p>What would you like to do?</p>
      <Link to="/income">
        <Button color="success" className="m-2">
          Manage income
        </Button>
      </Link>
      <br />
      <Link to="/expenses">
        <Button color="danger" className="m-2">
          Manage expenses
        </Button>
      </Link>
      <br />
      <Link to="/savings">
        <Button className="m-2">Manage savings</Button>
      </Link>
      <br />
      <Link to="/budget">
        {" "}
        <Button className="m-2">Get available budget</Button>
      </Link>
    </div>
  );
}

export default Home;
