import React, { useState } from "react"
import FaqItem from "./FaqItem"
import "./faq.scss"
import faqData from "./faqData"

function Faq() {
  const [questions, setQuestions] = useState(faqData)
  return (
    <section className="faq" id="faq">
      <div className="container">
        <h2 className="main-text main-heading special-heading-dark">
          frequently asked
        </h2>
        <p className="main-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos illo
          mollitia quo, molestiae saepe totam iste nulla exercitationem unde
          maxime!
        </p>
        <div className="accordion">
          {questions.map((question) => {
            return <FaqItem key={question.id} {...question} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Faq
