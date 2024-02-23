import redPlus from "../../assets/images/icon-plus-red.svg";
import { buynowHandle } from "../buyNow";

const PlanFour = () => {
  return (
    <div>
      <div className="emirati_card_container">
        <div className="emirati_card_header">
          <h5 className="emirati">
            Emirati Freedom <br />
            Unlimited Local Data & Calls Plan <br />
            1500
          </h5>
          <p className="commitment">12-month Commitment</p>
          <h1 className="price">AED 250.00/Month</h1>
          <p className="vat">5% VAT excl</p>
        </div>
        <div className="emirati_offer_container">
          <div className="offer_description">
            <div className="emirati_offer">
              <p>Local Data</p>
              <h5>
                <span className="strike_plan">200GB</span> Unlimited Local data
                <br />
                12months*
              </h5>
            </div>
          </div>

          <div className="offer_description">
            <div className="offer">
              <p>Flexi minutes (Loal & Intl.)</p>
              <h5>Unlimited Flexi minutes (Local & Intl.)</h5>
            </div>
          </div>

          <div className="offer_description">
            <div className="offer">
              <p>Roam like Home GCC & RoW</p>
            </div>
          </div>
        </div>

        <div className="emirati_plan_1500">
          <ul className="desc_details">
            <li>20% off monthly rental**</li>
            <li>Gold Plus Number</li>
            <li>
              **Applicable for new customers & prepaid customers switching to
              postpaid
            </li>
            <li>
              <img src={redPlus} alt="icon" /> More benefits with this plan
            </li>
          </ul>
        </div>
        <div className="emirati_footer-btns last_child_button">
          <button className="buyButton" onClick={buynowHandle}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanFour;
