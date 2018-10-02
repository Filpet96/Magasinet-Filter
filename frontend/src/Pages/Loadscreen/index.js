import React from "react";
import Helmet from "react-helmet";

import Loader from "../../Icons/Filter_loading.gif";

const Loadingscreen = () => (
  <div>
    <Helmet>
      <title>Filter</title>
    </Helmet>
    <h1>Filter laddar</h1>
    <img src={Loader} alt="loading..." />
  </div>
);

export default Loadingscreen;
