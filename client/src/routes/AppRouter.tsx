import React, { useContext } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { HOME_ROUTE } from "../types/consts";

//Routes = Switch, Navigate = Redirect
const AppRouter: React.FunctionComponent = () => {

  //const isAuth = false;
  return (
    <div>
      <Routes>
        <Navigate to={HOME_ROUTE} />
      </Routes>
    </div>
  )
}

export default AppRouter;