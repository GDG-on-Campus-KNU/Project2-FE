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
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isMatch, setIsMatch] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const signupData = {
        username: id,
        password: password,
        email: email,
        profile: {
          count: 0,
        },
      };
      const { data } = await requestPost<BasicAPIResponseType<SignUpType>>(
        `${apiOrigin}${apiRoute.register}`,
        {},
        signupData
      );

      console.log(`data : ${data}`);

      navigate("/");
      window.confirm("회원가입이 완료되었습니다.");
    },
    [id, password, email, navigate]
  );
  const onComparePassword = useCallback(
    (confirm: string) => {
      password === confirm ? setIsMatch(true) : setIsMatch(false);
      setPasswordConfirm(confirm);
    },
    [isMatch, password, passwordConfirm]
  );

  const onLogin = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <SignUp
      setId={setId}
      setPassword={setPassword}
      password={password}
      passwordConfirm={passwordConfirm}
      onComparePassword={onComparePassword}
      isMatch={isMatch}
      setEmail={setEmail}
      onSubmit={onSubmit}
      onLogin={onLogin}
    />
  );
};

export default SignUpContainer;
