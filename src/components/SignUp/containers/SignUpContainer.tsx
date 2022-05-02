import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/Auth/useAuth";
import { isSetAccessor } from "typescript";
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
  // const {token, setAccess} = useAuth();

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    const signupData = {
      username: id,
      password: password,
      email: email,
      profile: {
        count: 0,
      },
    };
    //console.log(signupData);
    const { data } = await requestPost<
    BasicAPIResponseType<SignUpType>
    >(`${apiOrigin}${apiRoute.register}`, {}, signupData);

    console.log(`data : ${data}`);

    navigate("/"); 
    window.confirm("회원가입이 완료되었습니다.");
  }, [id, password, email, navigate]); 
  
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
