import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/Auth/useAuth";
import { isSetAccessor } from "typescript";
import { apiOrigin, apiRoute, requestPost } from "../../../lib/api/api";
import {
  BasicAPIResponseType,
  SignUpResponseType,
} from "../../../typedef/common/common.types";
import SignUp from "../SignUp";

const SignUpContainer = () => {
  const [id, setId] = useState("");
  const [idState, setIdState] = useState("initial");
  const [isSubmit, setIsSubmit] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isMatch, setIsMatch] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsSubmit(true);

      const signupData = {
        username: id,
        password: password,
        email: email,
        profile: {},
      };

      const { data } = await requestPost<
        BasicAPIResponseType<SignUpResponseType>
      >(`${apiOrigin}${apiRoute.register}`, {}, signupData);

      setIdState("success");
      window.confirm("회원가입이 완료되었습니다.");
      navigate("/");
      window.location.reload();
    },
    [id, password, email, navigate, idState, isSubmit]
  );

  const onComparePassword = useCallback(
    (confirm: string) => {
      password === confirm ? setIsMatch(true) : setIsMatch(false);
      setPasswordConfirm(confirm);
    },
    [isMatch, password, passwordConfirm]
  );

  const onCheckEmail = useCallback(
    (email: string) => {
      const emailReg =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      setEmail(email);

      if (!emailReg.test(email)) {
        setIsEmail(false);
      } else {
        setIsEmail(true);
      }
    },
    [isEmail]
  );

  const onLogin = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <SignUp
      isSubmit={isSubmit}
      setId={setId}
      id={id}
      idState={idState}
      setPassword={setPassword}
      password={password}
      passwordConfirm={passwordConfirm}
      onComparePassword={onComparePassword}
      isMatch={isMatch}
      setEmail={setEmail}
      email={email}
      isEmail={isEmail}
      onCheckEmail={onCheckEmail}
      onSubmit={onSubmit}
      onLogin={onLogin}
    />
  );
};

export default SignUpContainer;
