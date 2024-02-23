import "../NewFreedomPlans/NewFreedom.css";
import { buynowHandle } from "../buyNow";
import localDataArrow from "../../assets/images/ic-data-3x.png";
import flexi from "../../assets/images/ic-flexi-minutes-3x.png";
import roaming from "../../assets/images/ic-roaming-data-3x.png";
import promoGift from "../../assets/images/ic-gift-3x.png";
import contentPass from "../../assets/images/ic-content-pass-3x.png";
import smiles from "../../assets/images/smiles-icon.png";
import tick from "../../assets/images/icon-tick-new.svg";
import plus from "../../assets/images/icons8-plus.svg";

const PlanFive = () => {
  return (
    <div>
      <div className="freedom_container">
        <div className="topper_section">
          <div className="freedom_card_header">
            <h5 className="freedom">Freedom Live 1250 Flexi</h5>
            <p className="commitment">12-month Commitment</p>
            <h1>AED 1,000.00.00/month</h1>
            <div className="was_aed">
              <button>
                was AED <span className="strike_plan">1,250.00</span>
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
                  <span className="strike_plan">100GB</span> Unlimited (12
                  months)
                </h5>
              </div>
            </div>
            <div className="offer_description">
              <div>
                <img src={localDataArrow} alt="icon" />
              </div>
              <div className="offer">
                <p>Content Pass Data</p>
                <h5>
                  <span className="strike_plan">100GB</span> Unlimited (12
                  months)
                </h5>
              </div>
            </div>
            <div className="offer_description">
              <div>
                <img src={roaming} alt="icon" />
              </div>
              <div className="offer">
                <p>Roaming Data</p>
                <h5>40GB Roam Like Home</h5>
              </div>
            </div>
            <div className="offer_description">
              <div>
                <img src={flexi} alt="icon" />
              </div>
              <div className="offer">
                <p>Flexi Minutes (Local & Intl.)</p>
                <h5>6000</h5>
              </div>
            </div>
            <div className="offer_description">
              <div>
                <img src={contentPass} alt="icon" />
              </div>
              <div className="offer">
                <p>Content Passes</p>
                <h5>4Free</h5>
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
          </div>
        </div>
        <div className="middle_section">
          <div className="offer_lists">
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
                Carry over up to 50% data for 1 month
              </li>
              <li>
                <img src={tick} alt="icon" />
                <img src={smiles} alt="icon" />
                Smiles Buy 1 get 1 vouchers
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

export default PlanFive;
