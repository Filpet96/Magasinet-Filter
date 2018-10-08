import React from "react";
import "./index";
import { Link } from "@reach/router";

import back_icon from "../../Icons/back.svg";
import aa_icon from "../../Icons/Aa.svg";
import moon_icon from "../../Icons/moon.svg";
import moon_icon_active from "../../Icons/moon_active.svg";
import bookmark_icon from "../../Icons/bookmark.svg";
import circle from "../../Icons/circle.svg";
import circle_fill from "../../Icons/circle_fill.svg";

class ArticalHeader extends React.Component {
  constructor() {
    super();

    this.state = {
      displayCircles: false,
      fillCircle: false
    };

    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
  }

  showDropdown(event) {
    event.preventDefault();
    this.setState({ displayCircles: true }, () => {
      document.addEventListener("click", this.hideDropdown);
    });
  }

  hideDropdown() {
    this.setState({ displayCircles: false }, () => {
      document.removeEventListener("click", this.hideDropdown);
    });
  }

  render() {
    const fontSizeIcon = this.state.fillCircle
      ? require("../../Icons/circle_fill.svg")
      : require("../../Icons/circle.svg");

    return (
      <div className="artical_menu_bar">
        <div className="menu_items">
          <span>
            <Link to="/">
              <img src={back_icon} alt="Go back" />
            </Link>
          </span>
          <span>
            <img
              src={aa_icon}
              alt="Change font size"
              onClick={this.showDropdown}
            />
          </span>
          {this.state.displayCircles ? (
            <div className="dropdown">
              <p>Ändra textstorlek</p>
              <div onClick={this.handleClick}>
                <img
                  className="dropdown_svg"
                  onClick={this.props.decFontSize}
                  src={fontSizeIcon}
                  alt=""
                />
                <img className="dropdown_svg" src={fontSizeIcon} alt="" />
                <img
                  className="dropdown_svg"
                  onClick={this.props.incFontSize}
                  src={fontSizeIcon}
                  alt=""
                />
              </div>
            </div>
          ) : null}

          <span>
            <img
              src={moon_icon}
              alt="Nightmode"
              onClick={this.props.nightmode}
            />
          </span>
          <span>
            <img src={bookmark_icon} alt="Bookmark" />
          </span>
        </div>
      </div>
    );
  }
}

export default ArticalHeader;
