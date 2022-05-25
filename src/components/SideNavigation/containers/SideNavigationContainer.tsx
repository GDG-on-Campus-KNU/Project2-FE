import React, { useState } from "react";
import SideNavigation from "../SideNavigation";

type Props = {
  editLink: any;
};

const SideNavigationContainer = ({ editLink }: Props) => {
  return <SideNavigation editLink={editLink} />;
};

export default SideNavigationContainer;
