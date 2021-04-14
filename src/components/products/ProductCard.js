import React, { useState } from "react";
import "./ProductCard.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStatevalue } from "../../context/StateProvider";
import _uniqueId from "lodash/uniqueId";

function ProductCard({ img, brand, name, url, price, pricecut, offer, size }) {
  const [state, dispatch] = useStatevalue();
  const [id] = useState(_uniqueId("product-"));

  const addToBasket = () => {
    //dispatch the item to the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        img: img,
        brand: brand,
        name: name,
        price: price,
        pricecut: pricecut,
        offer: offer,
      },
    });
  };

  return (
    <div className="product__card">
      <img className="card__image" src={img} alt="" />
      <div className="card__brand">{brand}</div>
      <div className="card__name">
        {name}
        <img src={url} alt="" />
      </div>
      <div className="price">
        <div className="card__price1">{price}</div>
        <div className="card__pricecut">{pricecut}</div>
        <div className="card__offer">{offer}</div>
      </div>
      <div className="card__size">Size: {size}</div>
      <button className="card__button" onClick={addToBasket}>
        <ShoppingCartIcon />
        ADD TO CART
      </button>
    </div>
  );
}

export default ProductCard;
