import PlatformItem from "./PlatformItem"
import SectionTitle from "../SectionTitle"
import upwork from "../../assets/images/upwork.png"
import freelancer from "../../assets/images/freelancer.png"
import mostaql from "../../assets/images/mostaql.png"
const Platform = () => {
  return (
    <section className="page-container">
      <SectionTitle title="platforms" />
      <div className="grid items-center justify-center gap-2 mx-auto mt-12 gird-cols-1 sm:grid-cols-2">
        <PlatformItem
          image={freelancer}
          title="freelancer"
          url="https://www.freelancer.com/u/MuhammadRabi"
        />
        <PlatformItem
          image={upwork}
          title="upwork"
          url="https://www.upwork.com/freelancers/~01586210b75f2c3f8f"
        />
      </div>
    </section>
  )
}

export default Platform
