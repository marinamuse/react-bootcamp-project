import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "../App.css";

function Cards() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../animations/income.json"),
    });
  }, []);

  return (
    <div class="lottie-section">
      <div className="lottie-container" ref={container}></div>
      <h3>
        Managing your cashflows properly is one of the key contributors to
        reaching your financial goals
      </h3>
    </div>
  );
}

export default Cards;
