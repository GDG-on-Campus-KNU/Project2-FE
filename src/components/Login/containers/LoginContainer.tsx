import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import useRootRoute from "../../../hooks/useRootRoute";
import { apiOrigin, apiRoute, requestPost } from "../../../lib/api/api";
import {
  BasicAPIResponseType,
  LoginTokenType,
} from "../../../typedef/common/common.types";
import Login from "../Login";

const LoginContainer = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isFailed, setIsFailed] = useState(false);
  const { __updateRootFromHooks } = useRootRoute();
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const {
        data: { access },
        status,
      } = await requestPost<BasicAPIResponseType<LoginTokenType>>(
        apiOrigin + apiRoute.login,
        {},
        { username: id, password: password }
      );

      if (status) {
        sessionStorage.setItem("@access", access);
        __updateRootFromHooks("main");
        navigate("/home");
      }
    },
    [id, password, isFailed, __updateRootFromHooks]
  );
  const onSignup = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <Login
      setId={setId}
      setPassword={setPassword}
      onSubmit={onSubmit}
      onSignup={onSignup}
    />
  );
};

export default LoginContainer;
