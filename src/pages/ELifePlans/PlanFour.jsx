import internet from "../../assets/images/ic-internet.png";
import tv from "../../assets/images/ic-tv.png";
import starzPlay from "../../assets/images/starzplay.png";
import osn from "../../assets/images/osn.png";
import smiles from "../../assets/images/smiles.png";
import prime from "../../assets/images/amazon-prime.png";
import { useState } from "react";

const PlanFour = ({handleCallbackButtonClick}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseHover = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <div className="elife_container">
      <div
        className="elife_mini_container"
        onMouseOver={handleMouseHover}
        onMouseLeave={handleMouseLeave}
      >
        <div className="elife_title">
          <h6 className="main">eLife</h6>
          <h4 className="sub">Ultra Fusion</h4>
        </div>
        <section className="section_device">
          <p className="small_title">INTERNET</p>
          <div className="elife_speed">
            <img src={internet} alt="" />
            <h6>1 Gbps</h6>
          </div>
          <p className="para_content" style={{ visibility: "hidden" }}>
            Free Limited Time Promo: 1 Gbps
          </p>
        </section>
        <section className="section_device">
          <p className="small_title">TV</p>
          <div className="elife_speed">
            <img src={tv} alt="" />
            <h6>300+</h6>
          </div>
          <p className="para_content_channel">HD TV Channels</p>
          <div className="channels">
            <img src={starzPlay} alt="icon" />
            <img src={osn} alt="icon" style={{ width: "30px" }} />
            <span>+1</span>
          </div>
        </section>
        <section className="section_device">
          <p className="small_title">PREMIUM</p>
          <div className="premium_channels">
            <img src={prime} alt="icon" />
            <img src={smiles} alt="icon" />
          </div>
        </section>
        <section className="section_price">
          <p className="para_content">
            4K TV Box, Premium Wi-fi Router & Phone OnDemand Movies & Regional
            TV AddOn Free Calls to UAE Landlines
          </p>
          <p className="band">24-month commitment</p>

          <p className="price">
            815.00 <span>AED/month</span>
          </p>
          <span className="vat">5% VAT excluded</span>
        </section>
      </div>
      <div>
      <button
          className={isHovering ? "callback_btn active" : "callback_btn"}
          onClick={handleCallbackButtonClick}
        >
          ASK FOR CALL BACK
        </button>
      </div>
    </div>
  );
};

export default PlanFour;
