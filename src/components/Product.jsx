import React from "react";

const Product = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>Price: £{props.price}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default Product;
