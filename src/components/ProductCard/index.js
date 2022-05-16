import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <img
        src={process.env.REACT_APP_BASE_URL + "/static/" + props.pid + ".jpg"}
        alt="product"
      />
      <p>{props.name}</p>
      <p className="fw-bold text-danger">Qnt. {props.qnt}</p>
    </div>
  );
};

export default ProductCard;
