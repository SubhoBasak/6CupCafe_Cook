import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const Appbar = () => {
  return (
    <>
      <div className="nav-title-bar d-flex align-items-center">
        <img src={require("../../assets/images/logo-light.png")} alt="logo" />
        <p className="fs-4 text-light my-0 ms-3 fw-light">6 Cups Cafe</p>
      </div>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Link to="/" className="nav-link">
            Orders
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Appbar;
