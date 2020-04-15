import React from "react";

import "./style.css";

export default function Footer() {
  return (
    <div className="footer_about">
      <div className="total_colors">
        <div className="colors_and_sizes">
          <div className="color_item bg_blue" />
          <div className="color_item bg_purple" />
          <div className="color_item bg_orange" />
        </div>
        <span className="see_details">See details</span>
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
