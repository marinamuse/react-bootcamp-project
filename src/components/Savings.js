import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Badge,
  Button,
  Input,
  FormGroup,
} from "reactstrap";

class Savings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desiredSavings: "",
      savedLevel: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.setSavings = this.setSavings.bind(this);
  }

  handleChange = (event) => {
    this.setState({ desiredSavings: event.target.value });
  };

  setSavings = (values) => {
    const savedLevel = JSON.stringify(values);
    alert(savedLevel);
  };

  render() {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString("default", { month: "short" });
    const year = today.getFullYear();
    const date = `${day}-${month}-${year}`;
    return (
      <>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/home">BudgetPlanner</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Manage savings</BreadcrumbItem>
        </Breadcrumb>
        <div className="income-div">
          <h3 class="text-center m-4">
            My savings as of {date}, $
            <Badge className="ml-4" color="success">
              {1590 - 370}
            </Badge>
          </h3>
          <h3 class="text-center m-4">Desired savings % of income</h3>

          <h1 className="text-success text-center">
            {this.state.desiredSavings}
          </h1>
          <FormGroup onSubmit={(values) => this.setSavings(values)}>
            <Input
              className="form-control mx-auto"
              style={{ width: "30%" }}
              placeholder={this.state.savedLevel}
              onChange={this.handleChange}
            ></Input>
            <Button type="submit" values="submit">
              Save
            </Button>
          </FormGroup>
        </div>
      </>
    );
  }
}

export default Savings;
