import React from "react";
import "./style.css";

import ReactLoading from "react-loading";

// Components
import HeaderProduct from "./components/HeaderProduct/index";
import Main from "./components/MainProduct/index";
import FooterAbout from "./components/FooterAbout/index";

function App() {
  return (
    <>
      <div className="loading">
        <ReactLoading type="bubbles" color="#44ab7a" width={100} height={100} />
      </div>
      <HeaderProduct />
      <Main />
      <FooterAbout />
    </>
  );
}

export default App;
