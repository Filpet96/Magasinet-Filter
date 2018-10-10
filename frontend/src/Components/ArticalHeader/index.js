import React from "react";
import "./index";
import { Link } from "@reach/router";

import back_icon from "../../Icons/back.svg";
import aa_icon from "../../Icons/Aa.svg";
import aa_icon_fill from "../../Icons/aa_fill.svg";
import moon_icon from "../../Icons/moon.svg";
import moon_icon_active from "../../Icons/moon_active.svg";
import bookmark_icon from "../../Icons/bookmark.svg";
import bookmark_active from "../../Icons/bookmark_active.svg";
import circle from "../../Icons/circle.svg";
import circle_fill from "../../Icons/circle_fill.svg";

class ArticalHeader extends React.Component {
  constructor() {
    super();

    this.state = {
      displayCircles: false,
      fillLetters: false,
      fillBookmark: false,
      fillCircle: [false,true,false],
      fillMoon: false
    };

    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
  }

  showDropdown(event) {
    event.preventDefault();
    this.setState({ fillLetters: true, displayCircles: true }, () => {
      document.addEventListener("click", this.hideDropdown);
    });
  }

  hideDropdown() {
    this.setState({ fillLetters: false, displayCircles: false }, () => {
      document.removeEventListener("click", this.hideDropdown);
    });
  }


  toggleNightMode = () => {
    this.props.nightmode();
    this.setState({ fillMoon: !this.state.fillMoon });
  };

  toggleBookmark = () => {
    this.setState({ fillBookmark: !this.state.fillBookmark });
  };

  fontSizeHandler = (data, i) => {
    this.props.FontSize(this, data);
    this.setState({ fillCircle: [false,false,false] });
    this.setState((prev) => {
      prev.fillCircle[i] = true;
    });
  };

  render() {
    let circles = [];
    for (var i = 0; i < 3; i++) {
      circles.push(
        <img
          key={i}
          className="dropdown_svg"
          onClick={this.fontSizeHandler.bind(this, 'size_' + i, i)}
          src={this.state.fillCircle[i] ? circle_fill : circle}
          alt=""
        />
      );
    }
    return (
      <div className="article_menu_bar">
        <div className="menu_items">
          <span>
            <Link to="/">
              <img src={back_icon} alt="Go back" />
            </Link>
          </span>
          <span>
            <img
              src={this.state.fillLetters ? aa_icon_fill : aa_icon}
              onClick={this.showDropdown}
              alt="Change font size"
            />
          </span>
            <div className={'dropdown ' + (this.state.displayCircles ? 'active' : '')}>
              <p>Ändra textstorlek</p>
              <div>
                {circles}
              </div>
            </div>

          <span>
            <img
              src={this.state.fillMoon ? moon_icon_active : moon_icon}
              alt="Nightmode"
              onClick={this.toggleNightMode}
            />
          </span>
          <span>
            <img
              onClick={this.toggleBookmark}
              src={this.state.fillBookmark ? bookmark_active : bookmark_icon}
              alt="Bookmark"
            />
          </span>
        </div>
      </div>
    );
  }
}

export default ArticalHeader;
