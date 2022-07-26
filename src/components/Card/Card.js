import React from "react";
import "./Card.css";
import HoverRating from "./HoverRating";
import ProductsContext from "../../contexts/ProductsContext";
import { useContext, useState } from "react";

function Card(props) {
  const {
    updateproducts,
    productsCart,
    setProductsCart,
    cart,
    setCart,
    totalPrice,
    setTotalPrice,
  } = useContext(ProductsContext);

  const [markChoose, setMarkChoose] = useState("");

  function addProduct() {
    if (markChoose === "" && props.console === "all")
      alert("Please Select Console");
    else {
      const newProduct = {
        id: props.id,
        name: props.name,
        img: props.img,
        price: props.price,
        console: props.console,
        imgconsole: props.imgconsole,
        select: markChoose,
        count: 1,
      };
      const found = productsCart.find(
        (item) => item.id === props.id && item.select === markChoose
      );

      if (!found) {
        setProductsCart([...productsCart, newProduct]);
        setCart(cart + 1);
      } else {
        setProductsCart(
          productsCart.map((item) =>
            item.id === found.id && item.select === markChoose
              ? { ...item, count: item.count + 1 }
              : item
          )
        );
      }
      setTotalPrice(Math.round(totalPrice + props.price));
    }
    console.log(updateproducts);
  }
  return (
    <div className="card" key={props.id}>
      <img className="card-img" src={props.img} alt=""></img>
      <div className="card-body">
        <h2 className="card-title"> {props.name} </h2>
        {props.console === "all" ? (
          <>
            <div className="choose-console">
              <h4>Select Console:</h4>
              <img
                className={
                  markChoose === "Sony Playstation"
                    ? "console-img"
                    : "console-img-pressed"
                }
                src="./images/1sony.png"
                alt=""
                onClick={() => setMarkChoose("Sony Playstation")}
              ></img>{" "}
              <img
                className={
                  markChoose === "Xbox" ? "console-img" : "console-img-pressed"
                }
                src="./images/1xbox.png"
                alt=""
                onClick={() => setMarkChoose("Xbox")}
              ></img>{" "}
              <img
                className={
                  markChoose === "Ninetendo"
                    ? "console-img"
                    : "console-img-pressed"
                }
                src="./images/ninetendo.png"
                alt=""
                onClick={() => setMarkChoose("Ninetendo")}
              ></img>{" "}
            </div>
            {/* <img
              className="console-img-all"
              src={props.imgconsole}
              alt=""
            ></img> */}
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
