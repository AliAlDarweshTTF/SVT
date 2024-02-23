import { buynowHandle } from "../buyNow";

const PlanOne = () => {
  return (
    <div>
      <div className="emirati_card_container first_child">
        <div className="emirati_card_header">
          <h5 className="emirati">
            Emirati Freedom <br />
            Plan 250
          </h5>
          <p className="commitment">12-month Commitment</p>
          <h1 className="price">AED 250.00/Month</h1>
          <p className="vat">5% VAT excl</p>
        </div>
        <div className="emirati_offer_container">
          <div className="offer_description">
            <div className="emirati_offer">
              <p>Local Data</p>
              <h5>20GB</h5>
            </div>
          </div>

          <div className="offer_description">
            <div className="offer">
              <p>Local Minutes</p>
              <h5>1000</h5>
            </div>
          </div>

          <div className="offer_description">
            <div className="offer">
              <p>Roaming Data RoW</p>
              <h5>200MB</h5>
            </div>
          </div>
        </div>

        <div className="emirati_description">
          <ul className="desc_details">
            <li>Online Only: Free SIM</li>
            <li>Silver Number</li>
            <li>Carry over up to 50% data for 1 month</li>
            <li>** Free SIM, Smiles points & more</li>
          </ul>
        </div>
        <div className="emirati_footer-btns">
          <button className="buyButton" onClick={buynowHandle}>Buy</button>
        
        </div>
      </div>
    </div>
  );
};

export default PlanOne;
