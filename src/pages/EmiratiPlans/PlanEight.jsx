import { buynowHandle } from "../buyNow";

const PlanEight = () => {
  return (
    <div>
      <div className="emirati_card_container ">
        <div className="emirati_card_header">
          <h5 className="emirati">
            Emirati Freedom <br />
            Unlimited Local Data & Calls Plan <br />
            1600
          </h5>
          <p className="commitment">12-month Commitment</p>
          <h1 className="price">AED 1280.00/Month</h1>
          <p className="vat">5% VAT excl</p>
        </div> 
        <div className="emirati_offer_container">
          <div className="offer_description">
            <div className="emirati_offer">
              <p>Local Data</p>
              <h5>
                <span className="strike_plan">200GB</span> Unlimited Local data{" "}
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
            <li>
              **Applicable for new customers & prepaid customers switching to
              postpaid
            </li>
            <li>Online Only: Free SIM</li>
            <li>Carry over up to 50% data for 1 month</li>
          </ul>
        </div>
        <div className="emirati_footer-btns last_child_button">
          <button className="buyButton" onClick={buynowHandle}>Buy</button>
         
        </div>
      </div>
    </div>
  );
};

export default PlanEight;
