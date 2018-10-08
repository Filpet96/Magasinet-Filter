import React, { Component } from "react";
import endPoint from "../../Data/api";
import Helmet from "react-helmet";
import ArticlePreview from "../../Components/ArticlePreview";
import Header from "../../Components/Header";

import "./index";

class Home extends Component {
  state = {
    error: false,
    article: false
  };

  componentDidMount() {
    fetch(`${endPoint}/article/10`)
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

  render() {
    const { article } = this.state;

    return (
      <div>
        <Header />
        <Helmet>
          <title>Filter - start</title>
        </Helmet>
        <div>
          <ArticlePreview
            headline={article.headline}
            lead={article.lead}
            featured_image={article.featured_image}
          />
          <h2 className="sub_headline">Utvalt för dig</h2>
          <h2 className="sub_headline">Från nya numret</h2>
          <h2 className="sub_headline">Palmemordet: Den osannolika mördaren</h2>
        </div>
      </div>
    );
  }
}
export default Home;
