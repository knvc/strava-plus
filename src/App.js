import "./App.css";
import Login from "./components/Login.jsx";
import React, { Component } from "react";
import UserConfirm from "./components/UserConfirm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <Login />
            <UserConfirm />
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
