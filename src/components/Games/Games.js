import React from "react";
import "./Games.css";
import Card from "../Card/Card";

function Games(props) {
  return (
    <div className="store">
      {props.updateproducts.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            img={item.img}
            price={item.price}
            console={item.console}
            imgconsole={item.imgconsole}
            select={item.select}
            countSony={item.countSony}
            countXbox={item.countXbox}
            countNinetendo={item.countNinetendo}
          ></Card>
        );
      })}
    </div>
  );
}
export default Games;
