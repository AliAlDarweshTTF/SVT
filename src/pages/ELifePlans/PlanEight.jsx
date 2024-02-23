import { useState } from "react";
import graph from "../../assets/images/75iconGrpah.png";
import tvBlank from "../../assets/images/tv-blank-consumer.png";

const PlanEight = ({ handleCallbackButtonClick }) => {
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
          <h6 className="main">eLife Lite</h6>
          <h4 className="sub">eLife Lite 12</h4>
        </div>
        <section className="section_streaming">
          <div className="streaming_header">
            <div className="streaming_info">
              <img src={graph} alt="" />
              <h6>
                12
                <br />
                Mbps
              </h6>
            </div>
            <div className="streaming_info">
              <img src={tvBlank} alt="" />
              <h6>
                eLife On
                <br />
                Subscription
              </h6>
            </div>
          </div>

          <p className="streaming_content">Upto 5 Streaming Devices</p>
        </section>
        <section className="section_offers">
          <p>Free Calls to UAE Landlines</p>
          <p>Wi-Fi Router and Regular Phone</p>
        </section>

        <section className="section_price" style={{ marginTop: "20rem" }}>
          <p className="band">12-month commitment</p>
          <p className="price">
            299.00 <span>AED/month</span>
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

export default PlanEight;
