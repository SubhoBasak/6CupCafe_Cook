import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductStockCard = (props) => {
  const navigate = useNavigate();

  const inStock = () => {
    fetch(process.env.REACT_APP_BASE_URL + "/product/stock_in", {
      method: "PUT",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pid: props.pid }),
    }).then((res) => {
      if (res.status === 200) props.update(true);
      else if (res.status === 404)
        return alert("Product not found! Please refresh the page.");
      else if (res.status === 401 || res.status === 405)
        return navigate("/login");
      else return alert("Something went wrong! Please try again.");
    });
  };

  const outStock = () => {
    fetch(process.env.REACT_APP_BASE_URL + "/product/stock_out", {
      method: "PUT",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pid: props.pid }),
    }).then((res) => {
      if (res.status === 200) props.update(false);
      else if (res.status === 404)
        return alert("Product not found! Please refresh the page.");
      else if (res.status === 401 || res.status === 405)
        return navigate("/login");
      else return alert("Something went wrong! Please try again.");
    });
  };

  return (
    <div className="product-card">
      <img
        src={process.env.REACT_APP_BASE_URL + "/static/" + props.pid + ".jpg"}
        alt="product"
      />
      <p>{props.name}</p>
      {props.stock ? (
        <Button variant="danger" onClick={outStock}>
          Out of Stock
        </Button>
      ) : (
        <Button variant="success" onClick={inStock}>
          In Stock
        </Button>
      )}
    </div>
  );
};

export default ProductStockCard;
