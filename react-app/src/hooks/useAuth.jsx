import React, { createContext, useState, useContext } from "react";

const Auth = createContext({});

export function AuthProvider({ children }) {
  const [authlogin, setLogin] = useState(false);

  const login = () => {
    setLogin(true);
  };
  const logout = () => {
    setLogin(false);
  };

  const authDetails = { authlogin, login, logout };
  return <Auth.Provider value={authDetails}>{children}</Auth.Provider>;
}
export default function useAuth() {
  return useContext(Auth);
}
