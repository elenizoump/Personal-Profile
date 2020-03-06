import React from 'react';
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import logo from './logo.svg';
import './App.css';
import FirstPage from "./FirstPage"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
        <Router>
          <FirstPage path="/" />
        </Router>
      
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
