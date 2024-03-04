import ServiceItem from "./ServiceItem"
import SectionTitle from "../SectionTitle"
import { services } from "./ServicesData"
import SectionIntro from "../SectionIntro"

const Services = () => {
  return (
    <section className="page-container our-services" id="services">
      <SectionTitle title="our services" />
      <SectionIntro content="Discover the tools and techniques I utilize to craft high-quality websites, including React, Next.js, Shopify, and other cutting-edge technologies." />
      <div className="grid gap-16 card-container grid-cols-300">
        {services.map((service) => {
          return <ServiceItem key={service.id} {...service} />
        })}
      </div>
    </section>
  )
}

export default Services
