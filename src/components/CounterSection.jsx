import React, { useEffect, useRef, useState } from "react";
import "./CounterSection.css";

const Counter = ({ end, suffix }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16.67);

          const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(counter);
            } else {
              setCount(Math.floor(start));
            }
          }, 16.67);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
  }, [end]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
};

const CounterSection = () => {
  return (
    <section className="counter-section">
      <div className="counter-wrapper">

        <div className="counter-box">
          <h2><Counter end={400} suffix="+" /></h2>
          <p>Projects Completed</p>
        </div>

        <div className="divider"></div>

        <div className="counter-box">
          <h2><Counter end={15} suffix="+" /></h2>
          <p>Successful Years</p>
        </div>

        <div className="divider"></div>

        <div className="counter-box">
          <h2><Counter end={98} suffix="%" /></h2>
          <p>Client Retention</p>
        </div>

        <div className="divider"></div>

        <div className="counter-box">
          <h2><Counter end={30} suffix="+" /></h2>
          <p>Countries</p>
        </div>

      </div>
    </section>
  );
};

export default CounterSection;
