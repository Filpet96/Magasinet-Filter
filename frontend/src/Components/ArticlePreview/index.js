import React, { Component } from "react";
import "./index.css";
import ReadMoreButton from "../ReadMoreButton";

class ArticlePreview extends Component {
  render() {
    const { headline, featured_image, lead, post_title } = this.props;

    return (
      <div className="article-preview-container">
        <div className="article-preview-image">
          <div className="overlay"></div>
          <img src={featured_image} alt={post_title} />
        </div>
        <div>
          <h1>{headline}</h1>
        </div>
        <p className="article-preview-category">Reportage • 19 min lästid</p>
        <p dangerouslySetInnerHTML={{ __html: lead }} />
        <ReadMoreButton />
      </div>
    );
  }
}

export default ArticlePreview;
