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
    fontSizeP: 19,
    fontSizeH1: 45
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

  /*{ FONT SIZE }*/
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

  /*{ NIGHTMODE }*/
  nightmode = () => {
    this.setState({ className: "nightmode" });

    if (this.state.className === "nightmode") {
      this.setState({ className: false });
    }
  };

  render() {
    const { post, error } = this.state;
    const fontSizeP = {
      fontSize: `${this.state.fontSizeP}px`
    };
    const fontSizeH1 = {
      fontSize: `${this.state.fontSizeH1}px`
    };

    return (
      <div className="articleContainer">
        <Helmet>
          <title>Filter - Artikel</title>
        </Helmet>
        <ArticalHeader
          incFontSize={this.incFontSize}
          decFontSize={this.decFontSize}
          nightmode={this.nightmode}
          pctScrolled={this.pctScrolled}
        />
        {post && (
          <div className={this.state.className}>
            <img
              className="article_featured_image"
              src={post.featured_image}
              alt={post.post_title}
            />
            <article>
              <h1 style={fontSizeH1}>{post.headline}</h1>
              <p className="article_readtime">
                Reportage • {post.read_time} min lästid
              </p>
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
                style={fontSizeP}
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
