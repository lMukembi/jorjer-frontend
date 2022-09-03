import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./React/Pages/Login";
import Signup from "./React/Pages/Signup";
import Account from "./React/Pages/Account";
import ViewPost from "./React/Components/ViewPost";
import Home from "./React/Pages/Home";
import SearchResults from "./React/Pages/SearchResults";
import PageNotFound from "./React/Pages/PageNotFound";
import WritePost from "./React/Components/WritePost";
import PostOptions from "./React/Components/PostOptions";

const Paths = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/create" component={WritePost} />
        <Route path="/choose" component={PostOptions} />
        <Route path="/account/:id" component={Account} />
        <Route path="/posts/:postId" component={ViewPost} />
        <Route path="/search/searchPost" component={SearchResults} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default Paths;
