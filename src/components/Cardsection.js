import React from "react";
import "./Cardsection.css";

function Cardsection({ url, title, price, category }) {
  return (
    <div className="card__main">
      <img className="card__image" src={url} alt="" />
      <div className="card__title">{title}</div>
      <div className="card__price">{price}</div>
      <div className="card__category">{category}</div>
    </div>
  );
}

export default Cardsection;
