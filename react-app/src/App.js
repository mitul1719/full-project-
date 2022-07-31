import React, { useState,Suspense } from "react";
import "./App.css";
import { Login, Registration } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedLayout from "./components/Protected/ProtectedLayout";

const DashBoard = React.lazy(() => import("./components/Dashboard/DashBoard"));
//process.env.REACT_APP_USERNAME
function App() {
  const [isLogin, setLogin] = useState(false);

  return (
    <div className="App">
      {/* {isLogin ? <Login login={setLogin}/>: <Registration  login={setLogin}/>}
      {console.log(process.env.REACT_APP_USERNAME)} */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/resgister" element={<Login />} />
          <Route
            path="/*"
            element={
              <h1>Navigate to '/login' to Login or '/register' to register</h1>
            }
          />

          <Route path="/dashboard" element={<ProtectedLayout />}>
            <Route path="home" element={<DashBoard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
