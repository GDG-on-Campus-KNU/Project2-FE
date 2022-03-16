import React from "react";
import usePopUp from "../../hooks/usePopUp";
import MainNavigation from "../components/MainNavigation";

const MainNavigationContainer = () => {
  const { popUp } = usePopUp();
  return <MainNavigation popUp={popUp} />;
};

export default MainNavigationContainer;
