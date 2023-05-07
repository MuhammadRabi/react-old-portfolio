import PlatformItem from "./PlatformItem";
import "./platform.scss";
import SectionTitle from "../SectionTitle";
import upwork from "../../assets/images/upwork.png";
import freelancer from "../../assets/images/freelancer.png";
import mostaql from "../../assets/images/mostaql.png";
const Platform = () => {
  return (
    <section className="page-container platform">
      <SectionTitle title="platforms" />
      <div className="platform-grid">
        <PlatformItem
          image={upwork}
          title="upwork"
          url="https://www.upwork.com/freelancers/~01586210b75f2c3f8f"
        />
        <PlatformItem
          image={freelancer}
          title="freelancer"
          url="https://www.freelancer.com/u/MuhammadRabi"
        />
        <PlatformItem
          image={mostaql}
          title="mostaql"
          url="https://mostaql.com/u/Muhammad_Rabi"
        />
      </div>
    </section>
  );
};

export default Platform;
