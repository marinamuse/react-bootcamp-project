import React from "react";
import "../App.css";
import { Breadcrumb, BreadcrumbItem, Table, Badge } from "reactstrap";
import { EXPENSES } from "../data/expenses";
import { Button } from "reactstrap";

class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: EXPENSES,
    };
  }

  render() {
    return (
      <>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/home">BudgetPlanner</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Manage expenses</BreadcrumbItem>
        </Breadcrumb>
        <div class="income-div">
          <h3 class="text-center m-4">
            My expenses
            <Badge className="ml-4" color="danger">
              $370
            </Badge>
          </h3>
          <Table size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Amount, $</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.expenses.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.date}</td>
                    <td>{item.amount}</td>
                    <td>{item.description}</td>
                    <td>
                      <Button color="success">delete</Button>
                      <Button outline>update</Button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td>
                  <button className="btn btn-danger">add</button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}

export default Expenses;
