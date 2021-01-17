import React from "react";
import { Breadcrumb, BreadcrumbItem, Badge } from "reactstrap";

function Budget() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/home">BudgetPlanner</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Available budget</BreadcrumbItem>
      </Breadcrumb>
      <div className="text-center">
        <h4 className="text-primary">
          Budget available to spend now
          <Badge className="ml-4" color="success">
            ${1290 - (1290 / 100) * 40}
          </Badge>
        </h4>
      </div>
    </div>
  );
}

export default Budget;
