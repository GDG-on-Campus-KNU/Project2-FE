import React, { useState } from "react";
import SideNavigation from "../SideNavigation";

type Props = {
  editLink: any;
};

const SideNavigationContainer = ({ editLink }: Props) => {
  const [selected, setSelected] = useState("");

  const setCategory = (category: string) => {
    setSelected(category);
    editLink(category);
  };

  return <SideNavigation selected={selected} setCategory={setCategory}/>;
};

export default SideNavigationContainer;
