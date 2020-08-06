import React from "react";
import { ChevronDoubleDown, CartPlus } from "react-bootstrap-icons";

import "./Card.css";
import sbimf from "../../assets/sbimf.png";

const Card = () => {
  return (
    <div className="card mb-3" style={{ maxWidth: "500px" }}>
      <div className="row">
        <div className="col-3">
          <img className="card-img" src={sbimf} alt="mf logo" />
        </div>
        <div className="col-8">
          <h5 className="row card-custom-title">SBI Arbitrage Fund</h5>
          <p className="row card-custom-desc">Arbitrage Mid Cap</p>
        </div>
      </div>
      <div className="row">
        <button
          className="btn card-custom-btn btn-light"
          type="button"
          // style={{ marginLeft: "12px" }}
        >
          <div className="btn-text-with-icon">
            <p className="btn-text">Show Performance Details</p>
            <ChevronDoubleDown className="push-right" />
          </div>
        </button>
        <button
          className="card-custom-btn btn btn-info"
          type="button"
          // style={{ marginRight: "12px" }}
        >
          <div className="btn-text-with-icon">
            <CartPlus className="push-left" size={18} />
            <p className="btn-text">Invest Now</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Card;
