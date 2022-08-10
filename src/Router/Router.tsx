import React from "react";
import { Route, Routes } from "react-router-dom";
import AllCountry from "../pages/AllCountry";
import AllLanguage from "../pages/AllLanguage";
import Country from "../pages/Country";
import LanguageSearch from "../pages/LanguageSearch";
import SingleCountry from "../pages/SingleCountry";

const RouterController = () => {
  return (
    <Routes>
      <Route path="/country/:countryCode" element={<SingleCountry />} />
      <Route path="/languages-all" element={<AllLanguage />} />
      <Route path="/search-country" element={<Country />} />
      <Route path="/search-language" element={<LanguageSearch />} />
      <Route path="/" element={<AllCountry />} />
    </Routes>
  );
};

export default RouterController;
