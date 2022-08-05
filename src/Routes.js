import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WritePost from "./React/Components/WritePost";
import Login from "./React/Pages/Login";
import Signup from "./React/Pages/Signup";
// import ForgotPasswordForm from "./React/Pages/ForgotPasswordForm";
// import ResetPasswordForm from "./React/Pages/ResetPasswordForm";
import Account from "./React/Pages/Account";
import ViewPost from "./React/Components/ViewPost";
import Home from "./React/Pages/Home";
import SearchResults from "./React/Pages/SearchResults";

const Paths = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={Home} />
      </Switch>
      <Route path="/search/searchPost" component={SearchResults} />
      <Route path="/posts/:postId" component={ViewPost} />
      <Route path="/write" component={WritePost} />
      <Route path="/account/:id" component={Account} />
      {/* <Route path="/forgot-password" component={ForgotPasswordForm} />
        <Route
          path="/reset-password/:resetToken"
          component={ResetPasswordForm}
        /> */}
    </Router>
  );
};

export default Paths;
