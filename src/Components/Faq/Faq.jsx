import SectionTitle from "../SectionTitle";
import FaqItem from "./FaqItem";
import SectionIntro from "../SectionIntro";
import faqData from "./faqData";
const Faq = () => {
  return (
    <section className="page-container faq bg-dark" id="faq">
      <SectionTitle title="frequently asked" dark />
      <SectionIntro
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos illo
      mollitia quo, molestiae saepe totam iste nulla exercitationem unde maxime!"
        dark
      />

      <div className="w-full mx-auto accordion md:w-3/4 lg:w-1/2">
        {faqData.map((question) => {
          return <FaqItem key={question.id} {...question} />;
        })}
      </div>
    </section>
  );
};

export default Faq;
