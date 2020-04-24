import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";

import Home from "./views/Home";
import User from "./views/User";
import About from "./views/About";

import Header from "./components/Header";
import Blog from "./components/Blog";

const Routes = () => {
  return (
    <Router history={ history }>
      <div className="Router">
        <Header />
        <Switch>
          <Route path="/" component={ Home } exact />
          <Route path="/user" component={ User } exact />
          <Route
            path="/user/blogs/:blogId"
            render={ props => <Blog { ...props } /> }
            exact
          />
          <Route path="/about" component={ About } exact />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;