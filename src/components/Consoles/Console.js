import React, { useContext } from "react";
import "./Console.css";
import { Link } from "react-router-dom";
import ProductsContext from "../../contexts/ProductsContext";

function Console(props) {
  const { filterProduct } = useContext(ProductsContext);
  return (
    <div className="what-you-play">
      <h1>What's your console ?..</h1>
      <div className="the-consoles">
        {props.consoles.map((item, index) => {
          return (
            <Link to="/products">
              <img
                src={item.img}
                alt=""
                onClick={() => filterProduct(item.console, "console")}
              ></img>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Console;
