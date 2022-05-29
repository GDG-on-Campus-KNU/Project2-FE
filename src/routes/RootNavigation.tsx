import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginNavigationContainer from "./containers/LoginNavigationContainer";
import MainNavigationContainer from "./containers/MainNavigationContainer";

type Props = {
  root: "login" | "main";
};
const RootNavigation = ({ root }: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            sessionStorage.getItem("@route") === "login" ? (
              <LoginNavigationContainer />
            ) : (
              <MainNavigationContainer />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigation;
