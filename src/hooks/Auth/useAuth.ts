import React, { useCallback } from "react";

export default function useAuth() {
  let token = sessionStorage.getItem("@access") || "";

  const getAccess = useCallback(() => {
    sessionStorage.getItem("@access");
  }, []);

  const setAccess = useCallback(() => {
    sessionStorage.setItem("@access", token);
  }, [token]);

  const clearAccess = useCallback(() => {
    sessionStorage.setItem("@access", "");
  }, []);

  return { token, clearAccess };
}
