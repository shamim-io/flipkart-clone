import React, { useEffect, useState } from "react";
import { useStatevalue } from "../context/StateProvider";
import "./Checkout.css";

function Checkout() {
  const [{ basket, user }, dispatch] = useStatevalue();
  let [price, setPrice] = useState(0);
  let [discount, setDiscount] = useState(0);
  let [amount, setAmount] = useState(0);

  useEffect(() => {
    function getRecords() {
      basket?.map((item) => {
        setPrice((price += parseInt(item.pricecut.split("₹")[1])));
        setDiscount(
          (discount +=
            parseInt(item.pricecut.split("₹")[1]) -
            parseInt(item.price.split("₹")[1]))
        );
        setAmount((amount += parseInt(item.price.split("₹")[1])));
      });
    }
    getRecords();
  }, []);

  const removeItem = () => {};

  console.log(basket);

  return (
    <div className="checkout__main">
      <div className="left__section">
        <div className="left__section__header">
          <label>My Cart ({basket?.length})</label>
          <div>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg=="
              alt=""
            />
            <label>Deliver to </label>
            <label> {user?.email} </label>
          </div>
        </div>
        {basket && basket.length > 0 ? (
          basket.map((item) => (
            <>
              <div className="left__section__products">
                <img src={item.img} alt="" />
                <div>
                  <label className="prod__name">{item.name}</label>
                  <label className="prod__brand">{item.brand}</label>
                  <div>
                    <label className="prod__price">{item.price}</label>
                    <label className="prod__pricecut">{item.pricecut}</label>
                    <label className="prod__offer">{item.offer}</label>
                  </div>
                  <button className="button__remove" onClick={removeItem}>
                    REMOVE
                  </button>
                </div>
              </div>
            </>
          ))
        ) : (
          <label className="empty__message">Your cart is empty</label>
        )}
        {basket && basket.length > 0 ? (
          <div className="place__order">
            <button>PLACE ORDER </button>
          </div>
        ) : (
          ""
        )}
      </div>

      {basket?.length > 0 ? (
        <div className="right__section">
          <div className="right__section__head">
            <label>PRICE DETAILS</label>
          </div>
          <div className="right__section__2">
            <div className="right__section__prices">
              <label>Price</label>
              <label>{"₹ " + price.toLocaleString()}</label>
            </div>
            <div className="right__section__prices">
              <label>Discount</label>
              <label>{"₹ " + discount.toLocaleString()}</label>
            </div>
            <div className="right__section__prices">
              <label>Delivery Charges</label>
              <label style={{ color: "green" }}>Free</label>
            </div>
          </div>
          <div className="right__section__prices">
            <label>Total Amount</label>
            <label>{"₹ " + amount.toLocaleString()}</label>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Checkout;
