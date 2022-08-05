import React from "react";
import { useSelector } from "react-redux";
import { Route, useHistory } from "react-router-dom";

const AuthRoute = ({ component: Component, ...rest }) => {
  const userData = useSelector((state) => state.Users);
  // console.log(userData);
  const history = useHistory();
  return (
    <Route
      {...rest}
      render={(props) =>
        userData ? history.goBack() : <Component {...props} />
      }
    />
  );
};

export default AuthRoute;
