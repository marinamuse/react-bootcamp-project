import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

function Savings() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/home">BudgetPlanner</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Manage savings</BreadcrumbItem>
      </Breadcrumb>
      <h1>My savings</h1>
    </div>
  );
}

export default Savings;
