import React from "react";
import Book from './read_more_icon.svg';
import './index.css';


const ReadMoreButton = props => (
  <div className="button-container">
      <button className="read-more-button">
        <span>
          <img src={Book} alt=""/>
        </span>
        <span>Läs nu</span>
      </button>
  </div>
);

export default ReadMoreButton;
