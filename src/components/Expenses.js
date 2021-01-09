import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

function Expenses() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/home">BudgetPlanner</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Manage expenses</BreadcrumbItem>
      </Breadcrumb>
      <h1>My expenses</h1>
    </div>
  );
}

export default Expenses;
