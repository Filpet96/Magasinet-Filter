import React, { Component } from "react";

import endPoint from "../../Data/api";
import ArticlePreview from "../../Components/ArticlePreview";

class Home extends Component {
  state = {
    error: false,
    article: false
  };

  componentDidMount() {
    fetch(`${endPoint}/article/` + `10`)
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
    const { article, error } = this.state;

    return (
      <div>
        <div className="Home">
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
