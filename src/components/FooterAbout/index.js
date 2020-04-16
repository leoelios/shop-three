import React from "react";

import render from "../../scripts/render";

import "./style.css";
import { useState } from "react";

export default function Footer() {
  const [sizeOfClothe, setSizeOfClothe] = useState("PP");

  const switchColor = (color) => {
    const { renderer } = render(color, true);
    document.querySelector(".display_product").innerHTML = "";
    document.querySelector(".display_product").appendChild(renderer.domElement);
  };

  const switchSize = (clickedSize) => {
    // Get allSizes of clothe
    const allSizes = document.querySelectorAll(".size_item");

    if (clickedSize !== sizeOfClothe) {
      for (let x = 0; x < allSizes.length; x++) {
        const classes = allSizes[x].attributes[0].value.split(" ");
        if (classes.length > 1) {
          allSizes[x].classList.remove("size_actived");
        } else if (allSizes[x].innerHTML === clickedSize) {
          allSizes[x].classList.add("size_actived");
        }
      }
      setSizeOfClothe(clickedSize);
    }
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
        <span
          onClick={() => {
            switchSize("PP");
          }}
          className="size_item size_actived"
        >
          PP
        </span>
        <span
          onClick={() => {
            switchSize("P");
          }}
          className="size_item"
        >
          P
        </span>
        <span
          onClick={() => {
            switchSize("M");
          }}
          className="size_item"
        >
          M
        </span>
        <span
          onClick={() => {
            switchSize("G");
          }}
          className="size_item"
        >
          G
        </span>
        <span
          onClick={() => {
            switchSize("GG");
          }}
          className="size_item"
        >
          GG
        </span>
      </div>
    </div>
  );
}
