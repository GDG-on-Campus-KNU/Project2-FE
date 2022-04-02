import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiOrigin, apiRoute, requestPost } from "../../../lib/api/api";
import {
  BasicAPIResponseType,
  SignUpType,
} from "../../../typedef/common/common.types";
import SignUp from "../SignUp";

const SignUpContainer = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const onSubmit = useCallback(async () => {
    const signupData = {
      username: id,
      password,
      email,
      profile: {
        count: 0,
      },
    };

    const { data } = await requestPost<BasicAPIResponseType<SignUpType>>(
      `${apiOrigin}${apiRoute.register}`,
      {},
      signupData
    );

    navigate("/");
  }, [id, password, email, navigate]); //email도 추가하긴 했는데 요건 무슨 의미죠 . . . ?

  return (
    <SignUp
      setId={setId}
      setPassword={setPassword}
      setEmail={setEmail}
      onSubmit={onSubmit}
    />
  );
};

export default SignUpContainer;
