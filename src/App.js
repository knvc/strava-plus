import "./App.css";
import Login from "./components/Login.jsx";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <div className="App">
              <header className="App-header">
                <Route exact path="/">
                  <Login />
                </Route>
              </header>
            </div>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
