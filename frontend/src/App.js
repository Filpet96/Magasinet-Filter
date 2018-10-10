import React, {Component} from "react";
import {Router} from "@reach/router";
import Loading from "./loading.mp4";
import "./App";

import Home from "./Pages/Home";
import Article from "./Pages/Article";
import Quiz from "./Pages/Quiz/index.jsx";

class App extends Component {

  state = {
    loading: true,
    fading: false
  };

  componentDidMount() {
    setTimeout(() => this.setState({
        fading: true
      }), 200);
    setTimeout(() => this.setState({
        loading: false
      }), 500);
  }

  render() {
    return (
      <div className={'app ' + (this.state.loading ? 'loading-screen' : ' loading-fade')}>
        <div className={'loading-screen-container ' + (this.state.fading ? 'fade' : '')}>
          <video className="loading-screen-animation" autoPlay="autoplay" muted loop="loop" width="400" height="300">
            <source src={Loading} type="video/mp4" /> </video>
        </div>
      <main>
        <Router>
          <Home path="/"/>
          <Article path="/article"/>
          <Quiz path="/quiz"/>
        </Router>
      </main>
    </div>);
  }
}

export default App;
