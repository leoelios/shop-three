import React from "react";

import { FaInfo, FaGlobe } from "react-icons/fa";

import "./style.css";

export default function Details() {
  return (
    <>
      <div className="detail_sec">
        <h3 className="sub_title cl_green">
          <FaInfo />
          Product Details
        </h3>
        <ul className="list_details">
          <li className="detail_item">
            65% polyester, 35% viscose | Lightweight fabric (3.7 oz)
          </li>
          <li className="detail_item">Flowy fit and modest crop for comfort</li>
          <li className="detail_item">Side seamed for durability</li>
          <li className="detail_item">
            Imported product, printed & processed in the USA
          </li>
        </ul>
      </div>
      <footer className="footer">
        <div className="copyright">
          <FaGlobe className="icon_copyright" />
          Template by{" "}
          <a
            href="https://github.com/leoelias023/ShopThree"
            className="cl_green"
          >
            Leonardo Elias
          </a>
        </div>
        <div className="languages_footer">
          <span className="language_item cl_green">English</span>
          <span className="language_item">Deutsch</span>
          <span className="language_item">Español</span>
          <span className="language_item">Português</span>
        </div>
      </footer>
    </>
  );
}
