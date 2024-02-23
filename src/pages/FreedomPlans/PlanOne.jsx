import "../NewFreedomPlans/NewFreedom.css";
import { buynowHandle } from "../buyNow";
import localDataArrow from "../../assets/images/ic-data-3x.png";
import flexi from "../../assets/images/ic-flexi-minutes-3x.png";
import UAEwifi from "../../assets/images/ic-wifi-3x.png";
import contract from "../../assets/images/ic-contract-3x.png";
import mobileSim from "../../assets/images/icon-mobile-sim-3x.png";
import tick from "../../assets/images/icon-tick-new.svg";

const PlanOne = () => {
  return (
    <div>
      <div className="freedom_container">
        <div className="freedom_topper_section">
          <div className="freedom_card_header">
            <h5 className="freedom">Freedom Plan 225</h5>
            <p className="commitment">12-month Commitment</p>
            <h1>AED 225.00/month</h1>
            <p className="vat">5% VAT excluded</p>
          </div>

          <div className="offer_container">
            <div className="offer_description">
              <div>
                <img src={localDataArrow} alt="icon" />
              </div>
              <div className="offer">
                <p>Local Data</p>
                <h5>15GB</h5>
              </div>
            </div>

            <div className="offer_description">
              <div>
                <img src={flexi} alt="icon" />
              </div>
              <div className="offer">
                <p>Flexi Minutes (Local & Intl.)</p>
                <h5>500</h5>
              </div>
            </div>

            <div className="offer_description">
              <div>
                <img src={UAEwifi} alt="icon" />
              </div>
              <div className="offer">
                <p>UAE Wi-Fi hours</p>
                <h5>100</h5>
              </div>
            </div>
            <div className="offer_description">
              <div>
                <img src={contract} alt="icon" />
              </div>
              <div className="offer">
                <p>Contract</p>
                <h5>12-month commitment</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="freedom_middle_section">
          <div className="offer_lists live_125">
            <ul className="middle_details">
              <li>
                <img src={tick} alt="icon" />
                Online Only: Free SIM
              </li>
              <li>
                <img src={tick} alt="icon" />
                Free delivery within 24 hrs
              </li>
            </ul>
          </div>
        </div>
        <div className="freedom_footer_section">
          <div className="footer-btns">
            <button className="buyButton" onClick={buynowHandle}>Buy</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanOne;
