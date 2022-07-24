import React from "react";
import "./Card.css";
import HoverRating from "./HoverRating";
import ProductsContext from "../../contexts/ProductsContext";
import { useContext } from "react";

function Card(props) {
  const {
    productsCart,
    setProductsCart,
    cart,
    setCart,
    totalPrice,
    setTotalPrice,
  } = useContext(ProductsContext);

  function addProduct() {
    setCart(cart + 1);
    const newProduct = {
      id: props.id,
      name: props.name,
      img: props.img,
      price: props.price,
      console: props.console,
      imgconsole: props.imgconsole,
    };
    setProductsCart([...productsCart, newProduct]);
    setTotalPrice(Math.round(totalPrice + props.price));
  }
  return (
    <div className="card" key={props.id}>
      <img className="card-img" src={props.img} alt=""></img>
      <div className="card-body">
        <h2 className="card-title"> {props.name} </h2>
        {props.console === "all" ? (
          <>
            {/* <div>
              {" "}
              <img src="./images/1sony.png"></img>{" "}
              <img src="./images/1xbox.png"></img>{" "}
              <img src="./images/ninetendo.png"></img>{" "}
            </div> */}
            <img
              className="console-img-all"
              src={props.imgconsole}
              alt=""
            ></img>
            {/* <select style={{ marginTop: "1rem" }}>
              <option>Console</option>
              <option>Sony playstation</option>
              <option>Xbox</option>
              <option>Ninetendo</option>
            </select> */}
          </>
        ) : (
          <img className="console-img" src={props.imgconsole} alt=""></img>
        )}

        <h3 className="card-price">{props.price + "$"}</h3>
        <div className="rating">
          <HoverRating />
        </div>
        <button className="card-btn" onClick={addProduct}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default Card;
