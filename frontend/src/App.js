import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import ArticlePreview from './Components/ArticlePreview';


class App extends Component {
  state = {
      error: false,
      article: false
  };

  componentDidMount() {
    let dataURL = "http://localhost:8888/wp-json/filter/article/10";

    fetch(dataURL)
      .then(response => response.json())
      .catch(error => {
        this.setState({
          error
        });
      })
      .then(data => {
        this.setState({
          article: data
        });
      });
    }

    selectArticle = id => {
      const article = this.state.article.find(article => article.id === id);

      this.setState({
        article
      });
    };


  render() {
      const { article, error } = this.state;

    return (
        <div className="HomePage">
          <Header />
            <ArticlePreview
              headline={article.headline}
              lead={article.lead}
              featured_image={article.featured_image}
            />
        </div>
    );
  }
}
export default App;
