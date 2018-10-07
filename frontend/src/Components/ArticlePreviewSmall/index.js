import React, { Component } from "react";
import "./index";

class ArticlePreviewSmall extends Component {
  render() {
    const { headline, featured_image, lead, post_title } = this.props;

    return (
      <div className="article-preview-container">
        <div className="article-preview-image">
          <img src={featured_image} alt={post_title} />
        </div>
        <section>
          <h1>{headline}</h1>
          <p dangerouslySetInnerHTML={{ __html: lead }} />
        </section>
      </div>
    );
  }
}

export default ArticlePreviewSmall;
