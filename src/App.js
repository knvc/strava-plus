import "./App.css";
import Login from "./components/Login.jsx";
import React, { Component } from "react";

class App extends Component {
  state = {
    client_id: "",
    client_secret: "",
  };
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <Login />
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
