import { buynowHandle } from "../buyNow";

const PlanSix = () => {
  return (
    <div>
      <div className="emirati_card_container">
        <div className="emirati_card_header">
          <h5 className="emirati">
            Emirati Freedom <br />
            Plan 450
          </h5>
          <p className="commitment">No Commitment</p>
          <h1 className="price">AED 450.00/Month</h1>
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
            <li>Online Only: Free SIM</li>
            <li>Carry over up to 50% data for 1 month</li>
          </ul>
        </div>
        <div className="emirati_footer-btns">
          <button className="buyButton" onClick={buynowHandle}>Buy</button>
       
        </div>
      </div>
    </div>
  );
};

export default PlanSix;
