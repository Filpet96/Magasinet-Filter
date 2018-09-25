import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import ArticlePreview from './Components/ArticlePreview';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ArticlePreview />
      </div>
    );
  }
}

export default App;
