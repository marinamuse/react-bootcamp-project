import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

function Login() {
  return (
    <div className="form-div">
      <Form className="container">
        <FormGroup row>
          <Label htmlFor="email" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              type="email"
              id="email"
              name="email"
              className="form-control"
            ></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="password" sm={2}>
            Password
          </Label>
          <Col sm={10}>
            <Input
              type="password"
              id="password"
              name="password"
              className="form-control"
            ></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="checkbox2" sm={2}></Label>
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Remember me
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-10">
            <Link to="/home">
              <Button>Login</Button>
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Login;
