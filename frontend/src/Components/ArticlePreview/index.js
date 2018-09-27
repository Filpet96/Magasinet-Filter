import React, { Component } from 'react';
import './index.css';
import ReadMoreButton from '../ReadMoreButton';

class ArticlePreview extends Component {
  render() {
    const { headline, featured_image, lead, post_title} = this.props;
    const featuredImage = {
      featuredImage: 'url(' + featured_image + ')',
};

    return (
      <div className="article-preview-container">
        <img src={featured_image} alt={post_title}/>
        <div className="article-preview-image" style={featuredImage}></div>
        <div>
          <h1>{headline}</h1>
        </div>
        <p className="article-preview-category">Reportage • 19 min lästid</p>
        <p dangerouslySetInnerHTML={{__html: lead}} />
        <ReadMoreButton />
      </div>
    );
  }
}

export default ArticlePreview;
