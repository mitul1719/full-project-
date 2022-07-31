import React from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

const ProtectedLayout = ({ children }) => {
  const { authlogin:login } = useAuth();
  console.log(login)
  if (!login) {
    return <Navigate to="/" />;
  }
/**
 * create layout.js <Layout>{children}</Layout>
 */
  return <div>{children}</div>;
};

export default ProtectedLayout;
