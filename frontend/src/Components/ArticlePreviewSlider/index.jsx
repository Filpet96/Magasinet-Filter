import React from "react";
import Slider from "react-slick";
import endPoint from "../../Data/api";



class ArticlePreviewSlider extends React.Component {
  state = {
    articles: false,
    error: false
  };

  componentDidMount() {
    fetch(`${endPoint}/articles/tag/${this.props.tag}`).then(response => response.json()).catch(error => {
      this.setState({error});
    }).then(data => {
      this.setState({articles: data});
    });

  }
  render() {
    var settings = {
      infinite: true,
      variableWidth: true,
      arrows : false,
      speed: 300
    };
    let articles;
    if (this.state.articles) {
    articles = this.state.articles.map(function(article, i) {
      let lead = article.lead.substring(0,130);
    return (<div key={i} className="article-preview-slider-container">
    <img className="preview-small-image" src={article.featured_image} alt={article.post_name} />
    <h5>{article.post_title}</h5>
      <p dangerouslySetInnerHTML={{
          __html: lead
        }}/>
     </div>);
 });
     }

    return (
      <div className={'article-slider ' + (this.props.darkMode ? 'dark-mode' : '')}>
      <div className="preview-slider-header">
        <h5>{this.props.headerText}</h5>
      </div>
      <Slider {...settings}>
          {articles}
      </Slider>
      </div>
    );
  }
}

export default ArticlePreviewSlider;
