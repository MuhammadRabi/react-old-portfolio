import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function FaqItem({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <article className="accordion-item">
      <div
        className="accordion-header"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <h2>{question}</h2>
        {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
      <div className={`accordion-body ${showAnswer ? "active" : ""}`}>
        <p>{answer}</p>
      </div>
    </article>
  );
}

export default FaqItem;

//
