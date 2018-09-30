import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import "./App.css";

import Home from "./Pages/Home";
import Article from "./Pages/Article";
import Header from "./Components/Header";
import BottomMenu from "./Components/BottomMenu";

class App extends Component {
  render() {
    <Router>
      <Home path="/" />
      <Article path="/article/:articleId" />
    </Router>;

    return (
      <div className="pages">
        <Header />
        <Home />
        <BottomMenu />
      </div>
    );
  }
}
export default App;
