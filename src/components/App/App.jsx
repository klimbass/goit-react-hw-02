import { useState, useEffect } from "react";
import Descriptions from "../Descriptions/Descriptions";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

import "./App.css";

function App() {
  const [count, setCount] = useState(() => {
    const savedFeedback = window.localStorage.getItem("savedFeed");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      bad: 0,
      neutral: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("savedFeed", JSON.stringify(count));
  }, [count]);

  const updateFeedback = (event) => {
    const feedbackType = event.target.textContent.toLowerCase();
    setCount({ ...count, [feedbackType]: count[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setCount({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = count.good + count.bad + count.neutral;

  return (
    <>
      <Descriptions />
      <Options
        handleClick={updateFeedback}
        total={totalFeedback}
        reset={resetFeedback}
      />
      <Feedback value={count} total={totalFeedback} />
      <Notification total={totalFeedback} />
    </>
  );
}

export default App;
