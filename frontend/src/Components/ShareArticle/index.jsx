import React from "react";
import Facebook from "../../images/facebook.svg";
import Twitter from "../../images/twitter.svg";

const ShareArticle = props => (
  <div className="share-article-container">
    <p className="small">Dela den här artikeln:</p>
    <div className="social-media-container">
      <img src={Facebook} alt="facebook" />
      <img src={Twitter} alt="twitter" />
    </div>
  </div>
);

export default ShareArticle;
