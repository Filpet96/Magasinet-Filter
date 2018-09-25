import React, { Component } from 'react';
import './index.css';


class ArticlePreview extends Component {
  render() {
    return (
      <div className="article-preview">
        <h1>
          59 minuter som förändrade Sverige
        </h1>
        <h3>
          Reportage  •  19 min lästid
        </h3>
        <p>
          Efter tolv års efterforskningar fann journalisten Thomas Pettersson vad alla tidigare gått bet på. Det här är berättelsen om Skandiamannen och mordet på Olof Palme.
        </p>

        <button>Läs nu</button>

      </div>
    );
  }
}

export default ArticlePreview;
