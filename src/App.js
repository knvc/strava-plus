import Login from "./components/Login.jsx";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
