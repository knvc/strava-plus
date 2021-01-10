import "./App.css";
import logo from "./logo/logo.svg";
import Login from "./components/Login.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" width="100" height="100" />
        <h1>Strava Plus</h1>
        <Login />
      </header>
    </div>
  );
}

export default App;
