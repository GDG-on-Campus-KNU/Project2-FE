import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginContainer from "../../components/Login/containers/LoginContainer";
import SignUpContainer from "../../components/SignUp/containers/SignUpContainer";

const LoginNavigation = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginContainer />} />
      <Route path="*" element={<Navigate to="/login" />} />
      <Route path="/signup" element={<SignUpContainer />} />
    </Routes>
  );
};

export default LoginNavigation;
