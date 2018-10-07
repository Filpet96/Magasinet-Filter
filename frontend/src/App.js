import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import "./App";

import Home from "./Pages/Home";
import Article from "./Pages/Article";
import BottomMenu from "./Components/BottomMenu";

class App extends Component {
  render() {
    if (!App) {
      return <div>Loading...</div>;
    }
    return (
      <div className="app">
        <main>
          <Router>
            <Home path="/" />
            <Article path="/Article" />
          </Router>
        </main>
        <BottomMenu />
      </div>
    );
  }
}

export default App;
