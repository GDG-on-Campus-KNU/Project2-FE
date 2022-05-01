import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/Auth/useAuth";
import { apiOrigin, apiRoute, requestFormPost } from "../../../lib/api/api";
import {
  BasicAPIResponseType,
  LoginTokenType,
} from "../../../typedef/common/common.types";
import Login from "../Login";

const LoginContainer = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { token, setAccess } = useAuth();

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("username", id);
      formData.append("password", password);

      const { data } = await requestFormPost<
        BasicAPIResponseType<LoginTokenType>
      >(`${apiOrigin}${apiRoute.login}`, {}, formData);

      console.log(data);
      setAccess(data.access);

      navigate("/home");
    },
    [id, password, navigate]
  );

  return <Login setId={setId} setPassword={setPassword} onSubmit={onSubmit} />;
};

export default LoginContainer;
