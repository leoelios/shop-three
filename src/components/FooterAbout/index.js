import React from "react";

import render from "../../scripts/render";

import "./style.css";

export default function Footer() {
  const switchColor = (color) => {
    const { renderer } = render(color);
    document.querySelector(".display_product").innerHTML = "";
    document.querySelector(".display_product").appendChild(renderer.domElement);
    console.log(color);
  };

  return (
    <div className="footer_about">
      <div className="total_colors">
        <div className="colors_and_sizes">
          <div
            onClick={() => {
              switchColor("blue");
            }}
            className="color_item bg_blue"
          />
          <div
            onClick={() => {
              switchColor("purple");
            }}
            className="color_item bg_purple"
          />
          <div
            onClick={() => {
              switchColor("orange");
            }}
            className="color_item bg_orange"
          />
        </div>
      </div>
      <div className="colors_and_sizes colors">
        <span className="size_item size_actived">PP</span>
        <span className="size_item">P</span>
        <span className="size_item">M</span>
        <span className="size_item">G</span>
        <span className="size_item">GG</span>
      </div>
    </div>
  );
}
