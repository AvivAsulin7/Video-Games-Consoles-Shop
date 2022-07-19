import React from "react";
import "./Header.css";
import BasicSelect from "./BasicSelect";
import FreeSoloCreateOption from "./FreeSoloCreateOption";

function Header() {
  return (
    <div className="games">
      <nav className="product-filter">
        <div className="sort-filter-search">
          <div>
            <FreeSoloCreateOption />
          </div>
          <div>
            <BasicSelect />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
