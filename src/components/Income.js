import React from "react";
import "../App.css";
import { Breadcrumb, BreadcrumbItem, Table, Badge } from "reactstrap";
import { INCOME } from "../data/income";
import { Button } from "reactstrap";

class Income extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      income: INCOME,
    };
  }

  render() {
    return (
      <>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/home">BudgetPlanner</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Manage income</BreadcrumbItem>
        </Breadcrumb>
        <div class="income-div">
          <h3 class="text-center m-4">
            My income
            <Badge className="ml-4" color="success">
              $1590
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
              {this.state.income.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.date}</td>
                    <td>{item.amount}</td>
                    <td>{item.description}</td>
                    <td>
                      <Button color="danger">delete</Button>
                      <Button outline>update</Button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td>
                  <button className="btn btn-success">add</button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}

export default Income;
