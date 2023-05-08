import ServiceItem from "./ServiceItem";
import SectionTitle from "../SectionTitle";
import { services } from "./ServicesData";
import SectionIntro from "../SectionIntro";

const Services = () => {
  return (
    <section className="page-container our-services">
      <SectionTitle title="our services" />
      <SectionIntro
        content=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos illo
        mollitia quo, molestiae saepe totam iste nulla exercitationem unde
        maxime!"
      />
      <div className="grid gap-16 card-container grid-cols-300">
        {services.map((service) => {
          return <ServiceItem key={service.id} {...service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
