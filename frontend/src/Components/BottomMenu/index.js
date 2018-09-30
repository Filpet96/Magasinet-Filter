import React from "react";
import "./index.css";

import home_icon from "../../Icons/home.svg";
import menu_icon from "../../Icons/menu.svg";
import search_icon from "../../Icons/search.svg";
import favorites_icon from "../../Icons/favorites.svg";

const BottomMenu = () => (
  <div className="bottom_menu_bar">
    <div className="menu_items">
      <div>
        <img src={home_icon} alt="" />
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

export default BottomMenu;
