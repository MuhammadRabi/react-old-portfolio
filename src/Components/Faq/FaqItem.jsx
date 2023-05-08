import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function FaqItem({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <article className="accordion-item rounded-md bg-[#fdfdfd] mb-5 p-3">
      <div
        className="flex items-center justify-between p-4 border-2 border-transparent cursor-pointer accordion-header dounded-lg "
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <h2 className="font-semibold">{question}</h2>
        {showAnswer ? (
          <AiOutlineMinus className="text-2xl" />
        ) : (
          <AiOutlinePlus className="text-2xl" />
        )}
      </div>
      <div
        className={`accordion-body grid grid-rows-[0] duration-700 ${
          showAnswer ? "active" : ""
        }`}
      >
        <p className="overflow-hidden px-5 leading-relaxed text-[#646464]">
          {answer}
        </p>
      </div>
    </article>
  );
}

export default FaqItem;

//
