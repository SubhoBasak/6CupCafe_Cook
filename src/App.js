import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Appbar from "./components/Appbar";

import Orders from "./pages/Orders";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/" exact element={<Orders />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
