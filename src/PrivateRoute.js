import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogged = useSelector((state) => state.isLogged);

  return (
    <Route
      {...rest}
      render={(props) => {
        return isLogged ? <Redirect to="/home" /> : <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
