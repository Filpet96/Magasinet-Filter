import React, { Component } from "react";
import endPoint from "../../Data/api";
import Helmet from "react-helmet";
import "./index";

class Article extends Component {
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
        console.log(data);
      });
  }

  render() {
    const { article } = this.state;

    return (
      <div className="articleContainer">
        <Helmet>
          <title>Filter - Artikel</title>
        </Helmet>
        <div>
          <img src={article.featured_image} alt={article.post_title} />
          <h1>{article.headline}</h1>
          <p>Reportage • 19 min lästid</p>
          <p>
            <i>Text:</i> MOHAMED YUSSUF
          </p>
          <p>
            <i>Foto:</i> MAGNUS BERGSTRÖM
          </p>
          <p>Publicerad i Filter #63 (16 juli 2018)</p>
          <i dangerouslySetInnerHTML={{ __html: article.lead }} />
          <hr />
          <p dangerouslySetInnerHTML={{ __html: article.body }} />
        </div>
      </div>
    );
  }
}

export default Article;
