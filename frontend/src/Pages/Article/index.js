import React, { Component } from "react";
import endPoint from "../../Data/api";
import Helmet from "react-helmet";

import "./index";
import ArticalHeader from "../../Components/ArticalHeader";
import BottomMenu from "../../Components/BottomMenu";

class Article extends Component {
  state = {
    error: false,
    post: false,
    fontSizeClass: ''
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
          post: data
        });
      });
  }


  fontSizeHandler = (data, value) => {
      this.setState({
        fontSizeClass: value
      });
  };

  /*{ NIGHTMODE }*/
  nightmode = () => {
    this.setState({ className: "nightmode" });

    if (this.state.className === "nightmode") {
      this.setState({ className: "daymode" });
    }
  };

  render() {
    const { post, error } = this.state;

    return (
      <div className="articleContainer">
        <Helmet>
          <title>Filter - Artikel</title>
        </Helmet>
        <ArticalHeader
          FontSize={this.fontSizeHandler}
          nightmode={this.nightmode}
        />
        {post && (
          <div className={this.state.className}>
            <img
              className="article_featured_image"
              src={post.featured_image}
              alt={post.post_title}
            />
          <article className={this.state.fontSizeClass}>
              <h1 className="large">{post.headline}</h1>
              <p className="article_readtime">Reportage • {post.read_time} min lästid</p>
              <p className="article_contributors">
                <em>Text: </em>
                <span className="article_contributors_item uppercase bold underline">
                  {post.contributors.author}
                </span>
              </p>
              <p className="article_contributors">
                <em>Foto: </em>
                <span className="article_contributors_item uppercase bold underline">
                  {post.contributors.photo}
                </span>
              </p>

              <span className="published uppercase">
                Publicerad i Filter #63 (16 juli 2018)
              </span>
              <em
                className="article_lead"
                dangerouslySetInnerHTML={{ __html: post.lead }}
              />
              <hr />
              <p
                className="article_body"
                dangerouslySetInnerHTML={{ __html: post.body }}
              />
            </article>
          </div>
        )}
        {/* end post*/}
        <BottomMenu />
      </div>
    );
  }
}

export default Article;
