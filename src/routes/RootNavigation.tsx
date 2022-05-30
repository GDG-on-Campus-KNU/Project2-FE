import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import LoginNavigationContainer from "./containers/LoginNavigationContainer";
import MainNavigationContainer from "./containers/MainNavigationContainer";

type Props = {
  root: "login" | "main";
};
const RootNavigation = ({ root }: Props) => {
  const getRoute = useCallback(() => {
    return sessionStorage.getItem("@route") || "login";
  }, [sessionStorage]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            getRoute() === "login" ? (
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
