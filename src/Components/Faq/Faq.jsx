import SectionTitle from "../SectionTitle"
import FaqItem from "./FaqItem"
import SectionIntro from "../SectionIntro"
import faqData from "./faqData"
const Faq = () => {
  return (
    <section className="page-container faq bg-dark" id="faq">
      <SectionTitle title="frequently asked" dark />
      <SectionIntro
        content="Have questions? Find answers to common inquiries about my services, expertise, and process below."
        dark
      />

      <div className="w-full mx-auto accordion md:w-3/4 lg:w-1/2">
        {faqData.map((question) => {
          return <FaqItem key={question.id} {...question} />
        })}
      </div>
    </section>
  )
}

export default Faq
