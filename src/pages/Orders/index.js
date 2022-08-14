import React from "react";
import { Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import ProductCard from "../../components/ProductCard";

const Orders = () => {
  const [orders, setOrders] = React.useState([]);

  const navigate = useNavigate();

  setInterval(window.location.reload, 10000);

  const updateStatusApi = (oid) => {
    fetch(process.env.REACT_APP_BASE_URL + "/sale", {
      method: "PUT",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ oid }),
    }).then((res) => {
      if (res.status === 200) window.location.reload();
      else if (res.status === 404) return alert("Order not found!");
      else if (res.status === 401 || res.status === 405)
        return navigate("/login");
      else return alert("Something went wrong! Please try again.");
    });
  };

  React.useEffect(() => {
    if (!localStorage.getItem("token")) return navigate("/login");

    fetch(process.env.REACT_APP_BASE_URL + "/sale", {
      method: "GET",
      headers: { Authorization: localStorage.getItem("token") },
    }).then((res) => {
      if (res.status === 200) res.json().then((data) => setOrders(data));
      else if (res.status === 401 || res.status === 405)
        return navigate("/login");
      else return alert("Something went wrong! Please try again.");
    });
  }, [navigate]);

  return (
    <div className="p-2">
      {orders.map((order, index) => (
        <div
          className="border border-1 mb-3 rounded d-flex flex-wrap p-2"
          key={index}
        >
          <div className="w-100 p-2 fs-5 d-flex flex-wrap">
            <Alert className="ms-2 p-1 px-2 fs-6">
              {new Date(order.date).toLocaleString()}
            </Alert>
            <Alert variant="danger" className="ms-2 p-1 px-2 fs-6">
              Token: {order.token.toString().padStart(3, "0")}
            </Alert>
            <hr className="w-100 my-0" />
          </div>
          {order.items.map((item, index) => (
            <ProductCard
              key={index}
              pid={item.item._id}
              name={item.item.name}
              qnt={item.quantity}
            />
          ))}
          <div className="w-100 d-flex justify-content-center mt-2">
            <Button
              variant={
                order.status === 0 ? "outline-danger" : "outline-success"
              }
              onClick={() => updateStatusApi(order._id)}
            >
              {order.status === 0 ? "Complete" : "Collected"}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
