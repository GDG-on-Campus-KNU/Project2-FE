import React from "react";
import useRootRoute from "../../hooks/useRootRoute";
import RootNavigation from "../RootNavigation";

const RootNavigationContainer = () => {
  const { root } = useRootRoute();
  return <RootNavigation root={root} />;
};

export default RootNavigationContainer;
