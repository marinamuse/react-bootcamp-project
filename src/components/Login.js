import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { USERS } from "../data/users";
import "../App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const users = USERS;
  const history = useHistory();

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    if (
      users.filter((user) => user.email === email && user.password === password)
        .length > 0
    ) {
      setIsAuth(true);
      history.push("/home");
    } else {
      alert("wrong email and/or password");
    }
  }

  //   function authenticate(event) {
  //     event.preventDefault();
  //     if (
  //       users.filter((user) => user.email === email && user.password === password)
  //         .length > 0
  //     ) {
  //       setIsAuth(true);
  //       alert("Authenticated");
  //     } else {
  //       alert("Not authorised");
  //       setEmail("");
  //       setPassword("");
  //     }
  //   }

  return (
    <div className="form-div">
      <Form onSubmit={(event) => handleSubmit(event)}>
        <FormGroup row>
          <Label style={{ color: "grey" }} htmlFor="email" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              className="form-control"
              autoComplete="off"
              onChange={handleEmail}
            ></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label style={{ color: "grey" }} htmlFor="password" sm={2}>
            Password
          </Label>
          <Col sm={10}>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              className="form-control"
              autoComplete="off"
              onChange={handlePassword}
            ></Input>
          </Col>
        </FormGroup>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-10">
            <Button>Login</Button>
          </div>
        </div>
      </Form>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-10">
          <Button outline className="mt-2">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
