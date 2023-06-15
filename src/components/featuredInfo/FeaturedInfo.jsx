import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";
import "./featuredInfo.css";
const FeaturedInfo = () => {
  return (
    <div className="featured">
      {/* ======Item=========== */}
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyCotainer">
          <span className="featuredMoney">$2.314 </span>
          <span className="featuredMoneyRate">
            -12.4
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featureSub">Compate to the last month</span>
      </div>

      {/* ============Item ================ */}
      <div className="featuredItem">
        <span className="featuredTitle">Sale</span>
        <div className="featuredMoneyCotainer">
          <span className="featuredMoney">$4.314 </span>
          <span className="featuredMoneyRate">
            -1.4
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featureSub">Compate to the last month</span>
      </div>

      {/* ============Item===================== */}
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyCotainer">
          <span className="featuredMoney">$2.351 </span>
          <span className="featuredMoneyRate">
            +1.4
            <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featureSub">Compate to the last month</span>
      </div>
      {/* ================End =============== */}
    </div>
  );
};

export default FeaturedInfo;
