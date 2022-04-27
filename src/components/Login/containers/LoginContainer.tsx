import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const onSubmit = useCallback(async () => {
    const formData = new FormData();
    formData.append("username", id);
    formData.append("password", password);

    // const { data } = await requestFormPost<
    //   BasicAPIResponseType<LoginTokenType>
    // >(`${apiOrigin}${apiRoute.login}`, {}, formData);

    navigate("/home");
  }, [id, password, navigate]);

  return <Login setId={setId} setPassword={setPassword} onSubmit={onSubmit} />;
};

export default LoginContainer;
