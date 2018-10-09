import React, { Component } from "react";
import Helmet from "react-helmet";
import endPoint from "../../Data/api";
import ArticlePreview from "../../Components/ArticlePreview";
import Header from "../../Components/Header";
import BottomMenu from "../../Components/BottomMenu";
import ArticlePreviewSlider from "../../Components/ArticlePreviewSlider";

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
        <section className="homeContainer">
          <ArticlePreview
            headline={article.headline}
            lead={article.lead}
            featured_image={article.featured_image}
          />
          <section>
            <ArticlePreviewSlider
              tag="filterbubblan"
              headerText="Utvalt för dig"
            />
            <ArticlePreviewSlider
              tag="tunga-granskningar"
              headerText="Tunga granskningar"
            />
          </section>
        </section>
        <BottomMenu />
      </div>
    );
  }
}
export default Home;
