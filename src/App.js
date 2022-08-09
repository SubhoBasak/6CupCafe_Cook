import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Appbar from "./components/Appbar";

import Orders from "./pages/Orders";
import Login from "./pages/Login";

function App() {
  return (
    <MemoryRouter>
      <Appbar />
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </MemoryRouter>
  );
}

export default App;
