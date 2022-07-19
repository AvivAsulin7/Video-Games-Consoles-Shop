import React from "react";
import "./Header.css";
import BasicSelect from "./BasicSelect";
import FreeSoloCreateOption from "./FreeSoloCreateOption";
import BasicSort from "./BasicSort";

function Header(props) {
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
          {/* <div>
            <BasicSort />
          </div> */}
        </div>
      </nav>
    </div>
  );
}

export default Header;
