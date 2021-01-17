import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "../App.css";
import { Container, Row, Col } from "reactstrap";

function Cards() {
  const income = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: income.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../animations/income.json"),
    });
  }, []);
  const savings = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: savings.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../animations/savings.json"),
    });
  }, []);

  return (
    <>
      <div className="lottie-container d-flex justify-content-center">
        <Row className="lottie-row">
          <Col>
            <div ref={income}></div>
          </Col>
          <Col>
            <h4>
              Reach your financial goals through managing your cashflows
              properly
            </h4>
          </Col>
        </Row>

        <Row className="lottie-row">
          <Col>
            <div ref={savings}></div>
          </Col>
          <Col>
            <h4>
              Do not save what is left after spending, spend what is left after
              saving
            </h4>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Cards;
