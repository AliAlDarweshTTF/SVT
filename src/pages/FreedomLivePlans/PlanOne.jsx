import "../NewFreedomPlans/NewFreedom.css";
import { buynowHandle } from "../buyNow";
import localDataArrow from "../../assets/images/ic-data-3x.png";
import flexi from "../../assets/images/ic-flexi-minutes-3x.png";
import promoGift from "../../assets/images/ic-gift-3x.png";
import smiles from "../../assets/images/smiles-icon.png";
import goChat from "../../assets/images/gochat.png";
import tick from "../../assets/images/icon-tick-new.svg";
import plus from "../../assets/images/icons8-plus.svg";

const PlanOne = () => {
  return (
    <div>
      <div className="freedom_container">
        <div className="topper_section">
          <div className="freedom_card_header">
            <h5 className="freedom">Freedom Live 125 Flexi</h5>
            <p className="commitment">12-month Commitment</p>
            <h1>AED 125.00/month</h1>
            <p className="vat">5% VAT excluded</p>
          </div>

          <div className="offer_container">
            <div className="offer_description">
              <div>
                <img src={localDataArrow} alt="icon" />
              </div>
              <div className="offer">
                <p>Local Data</p>
                <h5>6GB</h5>
              </div>
            </div>

            <div className="offer_description">
              <div>
                <img src={flexi} alt="icon" />
              </div>
              <div className="offer">
                <p>Flexi Minutes (Local & Intl.)</p>
                <h5>100</h5>
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
          <div className="offer_lists live_125">
            <ul className="middle_details">
              <li>
                <img src={tick} alt="icon" />
                Top Seller
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
                <img src={goChat} alt="icon" />
                Gochat Exclusive Benefits
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

export default PlanOne;
