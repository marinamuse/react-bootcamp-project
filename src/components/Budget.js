import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

function Budget() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/home">BudgetPlanner</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Available budget</BreadcrumbItem>
      </Breadcrumb>
      <h1>Budget available</h1>
    </div>
  );
}

export default Budget;
