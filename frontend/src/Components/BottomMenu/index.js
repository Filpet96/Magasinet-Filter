import React, { Component } from "react";
import "./index";
import { Link } from "@reach/router";

import home_icon from "../../Icons/home.svg";
import menu_icon from "../../Icons/menu.svg";
import search_icon from "../../Icons/search.svg";
import favorites_icon from "../../Icons/favorites.svg";

class BottomMenu extends Component {
  render() {
    return (
      <div className="bottom_menu_bar">
        <div className="menu_items">
          <div>
            <Link to="/">
              <img src={home_icon} alt="" />
            </Link>
            <span>Hem</span>
          </div>
          <div>
            <img src={search_icon} alt="" />
            <span>Search</span>
          </div>
          <div>
            <img src={favorites_icon} alt="" />
            <span>Sparade</span>
          </div>
          <div>
            <img src={menu_icon} alt="" />
            <span>Menu</span>
          </div>
        </div>
      </div>
    );
  }
}

export default BottomMenu;
