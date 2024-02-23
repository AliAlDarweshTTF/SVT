import "./NewFreedom.css";
import { buynowHandle } from "../buyNow";
import localDataArrow from "../../assets/images/ic-data-3x.png";
import speed from "../../assets/images/ic-speed-3x.png";
import flexi from "../../assets/images/ic-flexi-minutes-3x.png";
import roaming from "../../assets/images/ic-roaming-data-3x.png";
import promoGift from "../../assets/images/ic-gift-3x.png";
import localSMS from "../../assets/images/ic-sms-3x.png";
import switchTV from "../../assets/images/switchtv-48.jpg";
import tick from "../../assets/images/icon-tick-new.svg";
import plus from "../../assets/images/icons8-plus.svg";

const PlanTwo = () => {
  return (
    <div>
      <div className="freedom_container">
        <div className="topper_section">
          <div className="freedom_card_header">
            <h5 className="freedom">New Freedom Data Plan 500</h5>
            <p className="commitment">12-month Commitment</p>
            <h1>AED 400.00/month</h1>
            <div className="was_aed">
              <button>
                was AED <span className="strike_plan">500.00</span>
              </button>
              <p className="vat">5% VAT excluded</p>
            </div>
          </div>
          <div className="offer_container">
            <div className="offer_description">
              <div>
                <img src={localDataArrow} alt="icon" />
              </div>
              <div className="offer">
                <p>Local Data</p>
                <h5>Unlimited</h5>
              </div>
            </div>

            <div className="offer_description">
              <div>
                <img src={speed} alt="icon" />
              </div>
              <div className="offer">
                <p>Speed</p>
                <h5>Full Speed*</h5>
              </div>
            </div>

            <div className="offer_description">
              <div>
                <img src={flexi} alt="icon" />
              </div>
              <div className="offer">
                <p>Flexi Minutes (Local & Intl.)</p>
                <h5>1500</h5>
              </div>
            </div>

            <div className="offer_description">
              <div>
                <img src={roaming} alt="icon" />
              </div>
              <div className="offer">
                <p>Roaming Data</p>
                <h5>10GB</h5>
              </div>
            </div>

            <div className="offer_description">
              <div>
                <img src={promoGift} alt="icon" />
              </div>
              <div className="offer">
                <p>Promo</p>
                <h5>Choose your own gift</h5>
              </div>
            </div>
            <div className="offer_description">
              <div>
                <img src={localSMS} alt="icon" />
              </div>
              <div className="offer">
                <p>Local SMS (12 months)*</p>
                <h5>100</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="middle_section">
          <div className="offer_lists live_125">
            <ul className="middle_details">
              <li>
                <img src={tick} alt="icon" />
                20% off monthly rental**
              </li>
              <li>
                <img src={tick} alt="icon" />
                **Applicable for new customers & prepaid customers switching to
                postpaid
              </li>
              <li>
                <img src={tick} alt="icon" />
                <img src={switchTV} alt="icon" />
                Free Switch TV subscription
              </li>
              <li>
                <img src={tick} alt="icon" />
                Best Value
              </li>
              <li>
                <img src={tick} alt="icon" />
                Silver Number
              </li>

              <li>
                <img src={plus} alt="icon" />
                More benefits with this plan
              </li>
            </ul>
          </div>
        </div>

        <div className="footer_section">
          <div className="footer-btns">
            <button className="buyButton" onClick={buynowHandle}>
              Buy
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanTwo;
