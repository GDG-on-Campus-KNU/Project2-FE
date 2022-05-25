import React from "react";
import useAuth from "../../../hooks/Auth/useAuth";
import { apiOrigin, apiRoute, requestGet } from "../../../lib/api/api";
import {
  BasicAPIResponseType,
  getBlockResponseType,
} from "../../../typedef/common/common.types";
import SideNavigation from "../SideNavigation";

type Props = {
  editItemList: any;
  editLink: any;
};

const SideNavigationContainer = ({ editItemList, editLink }: Props) => {
  const { token } = useAuth();

  return <SideNavigation editLink={editLink} />;
};

export default SideNavigationContainer;
