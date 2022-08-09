import React from "react";
import { Route, Routes } from "react-router-dom";
import AllCountry from "../pages/AllCountry";
import Country from "../pages/Country";
import SingleCountry from "../pages/SingleCountry";

const RouterController = () => {
  return (
    <Routes>
      <Route path="/country/:countryCode" element={<SingleCountry />} />
      <Route path="/search-country" element={<Country />} />
      <Route path="/" element={<AllCountry />} />
    </Routes>
  );
};

export default RouterController;
