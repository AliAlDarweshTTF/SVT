import "./NewFreedom.css";
import { buynowHandle } from "../buyNow";
import localDataArrow from "../../assets/images/ic-data-3x.png";
import flexi from "../../assets/images/ic-flexi-minutes-3x.png";
import roaming from "../../assets/images/ic-roaming-data-3x.png";
import switchTV from "../../assets/images/switchtv-48.jpg";
import tick from "../../assets/images/icon-tick-new.svg";
import plus from "../../assets/images/icons8-plus.svg";

const PlanSix = () => {
  return (
    <div style={{ width: "100%" }}>
      <div className="freedom_container">
        <div className="topper_section">
          <div className="freedom_card_header">
            <h5 className="freedom">
              New Freedom Unlimited Local Data & Calls Plan 1200
            </h5>
            <p className="commitment">12-month Commitment</p>
            <h1>AED 960.00/month</h1>
            <div className="was_aed">
              <button>
                was AED <span className="strike_plan">1200.00</span>
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
                <h5>
                  <span className="strike_plan">125GB</span>Unlimited Local Data
                  12 months
                </h5>
              </div>
            </div>

            <div className="offer_description">
              <div>
                <img src={flexi} alt="icon" />
              </div>
              <div className="offer">
                <p>Flexi Minutes (Local & Intl.)</p>
                <h5>Unlimited</h5>
              </div>
            </div>

            <div className="offer_description">
              <div>
                <img src={roaming} alt="icon" />
              </div>
              <div className="offer">
                <p>Roam Like Home Data</p>
                <h5>40GB</h5>
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
                Online Only: Free SIM
              </li>
              <li>
                <img src={tick} alt="icon" />
                <img src={switchTV} alt="icon" />
                Free Switch TV subscription
              </li>
              <li>
                <img src={tick} alt="icon" />
                Exclusive Roam like Home packs
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

export default PlanSix;
