import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

function Income() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/home">BudgetPlanner</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Manage income</BreadcrumbItem>
      </Breadcrumb>
      <h1>My income</h1>
    </div>
  );
}

export default Income;
