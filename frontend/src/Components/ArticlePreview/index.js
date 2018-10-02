import React, { Component } from "react";
import "./index";
import ReadMoreButton from "../ReadMoreButton";
import { Router, Link } from "@reach/router";

class ArticlePreview extends Component {
  render() {
    const { headline, featured_image, lead, post_title } = this.props;

    return (
      <div className="article-preview-container">
        <div className="article-preview-image">
          <div className="overlay" />
          <img src={featured_image} alt={post_title} />
        </div>
        <div>
          <h1>{headline}</h1>
        </div>
        <p className="article-preview-category">Reportage • 19 min lästid</p>
        <p dangerouslySetInnerHTML={{ __html: lead }} />
        <Link to="Article">
          <ReadMoreButton />
        </Link>
      </div>
    );
  }
}

export default ArticlePreview;
