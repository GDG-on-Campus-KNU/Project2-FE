import React, { useCallback, useEffect, useState } from "react";
import useAuth from "../../../hooks/Auth/useAuth";
import useRootRoute from "../../../hooks/useRootRoute";
import {
  apiOrigin,
  apiRoute,
  requestDelete,
  requestGet,
} from "../../../lib/api/api";
import {
  BasicAPIResponseType,
  RemoveUserType,
  UserType,
} from "../../../typedef/common/common.types";
import UserInfo from "../components/UserInfo";

const UserInfoContainer = () => {
  const { token } = useAuth();
  const { __updateRootFromHooks } = useRootRoute();
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

  const onRemoveUser = useCallback(async () => {
    const response = window.confirm("회원탈퇴 하시겠습니까?");
    if (response) {
      const { data } = await requestDelete<
        BasicAPIResponseType<RemoveUserType>
      >(apiOrigin + apiRoute.delete_user, {
        Authorization: `Bearer ${token}`,
      });

      if (data) {
        alert("회원탈퇴가 완료되었습니다.");
      }
      __updateRootFromHooks("login");
    }
  }, [__updateRootFromHooks]);

  return <UserInfo userInfo={userInfo} onRemoveUser={onRemoveUser} />;
};

export default UserInfoContainer;
