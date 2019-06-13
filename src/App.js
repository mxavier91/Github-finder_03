import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import User from "./Components/user/User";
import Alert from "./Components/layout/Alert";
import Home from './Components/pages/Home';
import NotFound from './Components/pages/NotFound';
import About from "./Components/pages/About";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import "./App.css";

const App = () => {
  // Search Github Users

  // Get a Single Github User

  // Get Users Repos

  // Clear Users from state

  // Set Alert

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar icon="fab fa-github" title="Github Finder" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/users/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
