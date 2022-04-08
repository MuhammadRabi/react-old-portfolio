import React, { useState } from "react"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

function FaqItem({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false)
  return (
    <div className="accordion-item">
      {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
      <div
        className="accordion-header"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <p>{question}</p>
      </div>
      <div className="accordion-body">{showAnswer && <p>{answer}</p>}</div>
    </div>
  )
}

export default FaqItem

//
