import React, { Component } from "react";
import endPoint from "../../Data/api";
import { Router, Link } from "@reach/router";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

import "./index";
import ArticalHeader from "../../Components/ArticalHeader";

class Article extends Component {
  state = {
    error: false,
    post: false,
    fontSizeP: 19,
    fontSizeH1: 45,
    nightmodeActive: false
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
          post: data
        });
      });
  }

  incFontSize = () => {
    console.log(this.state.fontSizeP);
    this.setState({
      fontSizeP: this.state.fontSizeP + 4,
      fontSizeH1: this.state.fontSizeH1 + 4
    });
  };
  decFontSize = () => {
    console.log(this.state.fontSizeP);
    this.setState({
      fontSizeP: this.state.fontSizeP - 4,
      fontSizeH1: this.state.fontSizeH1 - 4
    });
  };

  render() {
    const { post, error } = this.state;
    const fontSizeP = {
      fontSize: `${this.state.fontSizeP}px`
    };
    const fontSizeH1 = {
      fontSize: `${this.state.fontSizeH1}px`
    };

    const nightmode_active = {};

    return (
      <div className="articleContainer">
        <Helmet>
          <title>Filter - Artikel</title>
        </Helmet>
        <ArticalHeader
          incFontSize={this.incFontSize}
          decFontSize={this.decFontSize}
          nightmode={this.nightmode}
        />
        {post && (
          <div>
            <img
              className="article_featured_image"
              src={post.featured_image}
              alt={post.post_title}
            />
            <article>
              <h1 style={fontSizeH1}>{post.headline}</h1>
              <p className="article_readtime">Reportage 19 min lästid</p>
              <p className="article_contributors">
                <i>Text:</i>
                <span> {post.contributors.author}</span>
              </p>
              <p className="article_contributors">
                <i>Foto:</i> <span> {post.contributors.photo}</span>
              </p>

              <p className="article_published">
                Publicerad i Filter #63 (16 juli 2018)
              </p>
              <i
                className="article_lead"
                dangerouslySetInnerHTML={{ __html: post.lead }}
              />
              <hr />
              <p
                style={fontSizeP}
                className="article_body"
                dangerouslySetInnerHTML={{ __html: post.body }}
              />
            </article>
          </div>
        )}
        {/* end post*/}
      </div>
    );
  }
}

export default Article;
