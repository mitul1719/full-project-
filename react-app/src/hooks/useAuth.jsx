import React, { createContext, useState, useContext, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";

const Auth = createContext({});

export function AuthProvider({ children }) {
  const [authlogin, setLogin] = useLocalStorage(false);

  const login = () => {
    setLogin(true);
  };
  const logout = () => {
    setLogin(false);
  };

  const userDetail = useMemo(
    () => ({
      authlogin,
    }),
    [authlogin]
  );

  const authDetails = { ...userDetail, login, logout };
  return <Auth.Provider value={authDetails}>{children}</Auth.Provider>;
}
export default function useAuth() {
  return useContext(Auth);
}
