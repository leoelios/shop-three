import React from "react";
import "./style.css";

// Icons and Images
import LogoShop from "../../assets/logo_shop.png";
import { FaShoppingCart } from "react-icons/fa";

export default function HeaderProduct() {
  return (
    <header className="header_product">
      <h1 className="cl_green">
        <img src={LogoShop} alt="Logo of shop three" />
        <span className="logo_shop">ThreeShop</span>
      </h1>
      <div className="cart_sec">
        <FaShoppingCart />
        <span className="display_number bg_green">1</span>
      </div>
    </header>
  );
}
