import React, { useCallback, useEffect, useState } from "react";
import useAuth from "../../../hooks/Auth/useAuth";
import { apiOrigin, apiRoute, requestGet } from "../../../lib/api/api";
import {
  BasicAPIResponseType,
  UserType,
} from "../../../typedef/common/common.types";
import UserInfo from "../components/UserInfo";

const UserInfoContainer = () => {
  const { token } = useAuth();
  const [userInfo, setUserInfo] = useState<UserType>({
    username: "",
    email: "",
    profile: {
      count: 0,
      votedBoards: "",
      image: "",
    },
  });

  const onload = useCallback(async () => {
    const { data } = await requestGet<BasicAPIResponseType<UserType>>(
      apiOrigin + apiRoute.current_user,
      { Authorization: `Bearer ${token}` }
    );
    console.log(data);
    setUserInfo(data);
  }, [userInfo]);

  useEffect(() => {
    onload();
  }, []);
  return <UserInfo userInfo={userInfo} />;
};

export default UserInfoContainer;
