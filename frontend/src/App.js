import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App";

import Home from "./Pages/Home";
import Article from "./Pages/Article";
import Quiz from "./Pages/Quiz/index.jsx";
import BottomMenu from "./Components/BottomMenu";

class App extends Component {
  render() {
    if (!App) {
      return (
        <div>
          <p>Loading, please wait</p>
        </div>
      );
    }
    return (
      <div className="app">
        <main>
          <Router>
            <Home path="/" />
            <Article path="/article" />
            <Quiz path="/quiz" />
          </Router>
        </main>
        <BottomMenu />
      </div>
    );
  }
}

export default App;
