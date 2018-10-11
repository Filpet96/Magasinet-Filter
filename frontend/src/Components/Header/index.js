import React from "react";
import logo from "../../logo.svg";
import "./index";

const Header = () => (
  <div className="header">
    <img src={logo} className="header_filter_logo" alt="Filter logo" />
    <a href="/" className="login_link_text">
      Logga in
    </a>
  </div>
);

export default Header;
