import React, { useState } from "react"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

function FaqItem({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false)
  return (
    <article className="accordion-item rounded-md bg-[#fdfdfd] mb-5">
      <div
        className="flex items-center justify-between p-4 border-2 border-transparent cursor-pointer accordion-header dounded-lg "
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <h2 className="text-sm font-semibold md:text-base text-slate-600">
          {question}
        </h2>
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
        <p className="overflow-hidden px-5 py-2 leading-relaxed text-sm md:text-base text-[#646464]">
          {answer}
        </p>
      </div>
    </article>
  )
}

export default FaqItem

//
