import React, { Component } from "react";
import "./index";

class ArticlePreviewSmall extends Component {
  render() {
    const { headline, featured_image, lead, post_title } = this.props;

    return (
      <div className="small-article-preview-container">
        <img
          className="small-article-preview-image"
          src={featured_image}
          alt={post_title}
        />
        <h1>{headline}</h1>
        <p dangerouslySetInnerHTML={{ __html: lead }} />
      </div>
    );
  }
}

export default ArticlePreviewSmall;
