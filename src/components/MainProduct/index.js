import React from "react";

import "./styles.css";
import render from "../../scripts/render";

// Images
import ArrowLeft from "../../assets/arrow_left.png";
import ArrowRight from "../../assets/arrow_right.png";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvas: null,
    };
  }

  componentDidMount() {
    const { renderer } = render();
    document.querySelector(".display_product").appendChild(renderer.domElement);
  }

  render() {
    return (
      <div className="main_content">
        <h2 className="cl_green title_product">Basic T-shirt</h2>
        <div className="toggle_display">
          <img src={ArrowLeft} alt="Arrow to left" />
          <div className="display_product" />
          <img src={ArrowRight} alt="Arrow to Right" />
        </div>
      </div>
    );
  }
}
