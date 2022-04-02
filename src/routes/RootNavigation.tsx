import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginNavigationContainer from "./containers/LoginNavigationContainer";
import MainNavigationContainer from "./containers/MainNavigationContainer";
import SignUpContainer from "../components/SignUp/containers/SignUpContainer";

const RootNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginNavigationContainer />} />
        <Route path="/home" element={<MainNavigationContainer />} />
        <Route path="/signup" element={<SignUpContainer />} />
        <Route path="/home/*" element={<MainNavigationContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigation;
