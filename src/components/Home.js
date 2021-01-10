import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import income from "../images/income.png";
import expenses from "../images/expenses.png";
import savings from "../images/savings.png";
import budget from "../images/budget.png";
import Cards from "./Cards";
import {
  Button,
  Carousel,
  CarouselIndicators,
  CarouselControl,
  CarouselItem,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: income,
    altText: "Income",
    captionHeader: "Income",
    captionText: "Manage your cash inflows efficiently",
  },
  {
    src: expenses,
    altText: "Expenses",
    captionHeader: "Expenses",
    captionText: "Keep track of your expenses",
  },
  {
    src: savings,
    altText: "Savings",
    captionHeader: "Savings",
    captionText: "Grow your savings with higher motivation",
  },
  {
    src: budget,
    altText: "Budget",
    captionHeader: "Budget",
    captionText: "Don't spend more than you need",
  },
];

const Home = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="carousel-img" />
        <CarouselCaption
          captionText={item.captionText}
          captionHeader={item.captionHeader}
        />
      </CarouselItem>
    );
  });

  return (
    <>
      <div className="container text-center mt-4">
        <h2>Welcome to BudgetPlanner</h2>
        <h4>Manage your cashflows easily</h4>
        <p>What would you like to do?</p>
        <Link to="/income">
          <Button color="success" className="m-2">
            Manage income
          </Button>
        </Link>
        <Link to="/expenses">
          <Button color="danger" className="m-2">
            Manage expenses
          </Button>
        </Link>
        <Link to="/savings">
          <Button className="m-2">Manage savings</Button>
        </Link>
        <Link to="/budget">
          {" "}
          <Button className="m-2">Get available budget</Button>
        </Link>
      </div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        className="carousel container text-center mt-4"
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <Cards />
    </>
  );
};

export default Home;
