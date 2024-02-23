import "./EmiratiPlan.css";
import { useState } from "react";

import EmiratiPlanTwo from "./EmiratiPlanTwo";
import EmiratiPlanOne from "./EmiratiPlanOne";

const EmiratiPlan = ({ inputElement }) => {
  const [showContractPlans, setShowContractPlans] = useState(false);

  return (
    <div ref={inputElement}>
      <EmiratiPlanOne />
      {!showContractPlans && (
        <div className="no_contract_plans">
          <button
            className="no_contract_plans_btn"
            onClick={() => setShowContractPlans(true)}
          >
            Show No Contract Plans
          </button>
        </div>
      )}
      {showContractPlans && (
        <EmiratiPlanTwo showContractPlans={showContractPlans} />
      )}
    </div>
  );
};

export default EmiratiPlan;
