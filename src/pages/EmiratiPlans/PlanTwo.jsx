import redPlus from "../../assets/images/icon-plus-red.svg";
import { buynowHandle } from "../buyNow";

const PlanTwo = () => {
  return (
    <div>
      <div className="emirati_card_container">
        <div className="emirati_card_header">
          <h5 className="emirati">
            Emirati Freedom <br />
            Plan 400
          </h5>
          <p className="commitment">12-month Commitment</p>
          <h1 className="price">AED 400.00/Month</h1>
          <p className="vat">5% VAT excl</p>
        </div>
        <div className="emirati_offer_container">
          <div className="offer_description">
            <div className="emirati_offer">
              <p>Local Data</p>
              <h5>40GB</h5>
            </div>
          </div>

          <div className="offer_description">
            <div className="offer">
              <p>Local Minutes</p>
              <span className="infinite">&#8734;</span>
            </div>
          </div>

          <div className="offer_description">
            <div className="offer">
              <p>Roaming Data RoW</p>
              <h5>1GB</h5>
            </div>
          </div>
        </div>

        <div className="emirati_description">
          <ul className="desc_details">
            <li>Best Value</li>
            <li>Online Only: Free SIM</li>
            <li>Silver Plus Number</li>
            <li>
              <img src={redPlus} alt="icon" /> More benefits with this plan
            </li>
          </ul>
        </div>
        <div className="emirati_footer-btns">
          <button className="buyButton" onClick={buynowHandle}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanTwo;
