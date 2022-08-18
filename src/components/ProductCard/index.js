import React from "react";
import "./style.css";

const ProductCard = (props) => {
  return (
    <div className="position-relative">
      <div className="product-card">
        <img
          src={process.env.REACT_APP_BASE_URL + "/static/" + props.pid + ".jpg"}
          alt="product"
        />
        <p>{props.name}</p>
        <p className="fw-bold text-danger">Qnt. {props.qnt}</p>
      </div>
      {props.comb ? (
        <button onClick={props.showCombo} className="prod-info-btn">
          i
        </button>
      ) : null}
    </div>
  );
};

export default ProductCard;
