import React from "react";

import "./styles.css";
import render from "../../scripts/render";

// Images
import ArrowLeft from "../../assets/arrow_left.png";
import ArrowRight from "../../assets/arrow_right.png";

import { FaPlus } from "react-icons/fa";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvas: null,
    };
  }

  componentDidMount() {
    const { renderer } = render("blue");
    document.querySelector(".display_product").appendChild(renderer.domElement);
    setTimeout(() => {
      document.querySelector(".loading").classList.add("loader_loaded");
    }, 1000);
  }

  handleCart(e) {
    const oneMore = document.querySelector(".one_more");
    oneMore.classList.remove("dp_none");
    setTimeout(() => {
      oneMore.classList.add("dp_none");
    }, 1000);
  }

  render() {
    return (
      <div className="main_content">
        <h2 className="cl_green title_product">Basic T-shirt</h2>
        <div className="toggle_display">
          <img src={ArrowLeft} alt="Arrow to left" />
          <div className="display_product"></div>
          <img src={ArrowRight} alt="Arrow to Right" />
        </div>
        <div className="price_sec">
          <span className="ctr_price">R$ 59,20</span>
          <span className="price cl_green">R$ 29,99</span>
        </div>
        <div className="one_more dp_none">+1</div>
        <button
          onClick={() => {
            this.handleCart();
          }}
          className="add_cart_btn"
        >
          <FaPlus className="plus" />
          Add to Cart
        </button>
      </div>
    );
  }
}
