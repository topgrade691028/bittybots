import React from "react";
import { Route, Routes } from "react-router-dom";
import Collection from "../pages/Collection";
import FAQ from "../pages/FAQ";
import Home from "../pages/home";
import PlayGround from "../pages/playground";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/playground" element={<PlayGround />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  );
};

export default Router;
