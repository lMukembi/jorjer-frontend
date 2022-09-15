import React from "react";
import { Route } from "react-router";

export default (
  <Route>
    <Route path="/" />
    <Route path="/login" />
    <Route path="/signup" />
    <Route path="/create" />
    <Route path="/choose" />
    <Route path="/account/:id" />
    <Route path="/posts/:postId" />
    <Route path="/search/searchPost" />
  </Route>
);
