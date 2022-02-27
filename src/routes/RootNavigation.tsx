import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginNavigationContainer from "./containers/LoginNavigationContainer";
import MainNavigationContainer from "./containers/MainNavigationContainer";

const RootNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginNavigationContainer />} />
        <Route path="*" element={<MainNavigationContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigation;
