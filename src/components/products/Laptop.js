import React from "react";
import ProductCard from "./ProductCard";

function Laptop() {
  return (
    <div>
      <h3 style={{ margin: "30px " }}>Laptop</h3>
      <div className="card__row">
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/312/312/klcmoi80/computer/q/e/3/na-gaming-laptop-acer-original-imagyhwfgwhkf3vv.jpeg?q=70"
          }
          brand={"acer"}
          name={
            "acer Aspire 7 Ryzen 5 Hexa Core 5500U - (8GB/512GB SSD/Windows 10 Home)"
          }
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 53990}
          pricecut={"₹ " + 89099}
          offer={"38% off"}
          size={"15.6 inch"}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/312/312/keaaavk0/computer/x/m/y/lenovo-na-laptop-original-imafuzt8r5jqppfn.jpeg?q=70"
          }
          brand={"Lenovo"}
          name={
            "Lenovo Idaepad Slim 3 Celeron Dual core - (4GB/256GB SSD/Windows 10 Home)"
          }
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 23890}
          pricecut={"₹ " + 30690}
          offer={"22% off"}
          size={"15.6 inch"}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/312/312/kctf0cw0/computer/j/n/a/hp-na-thin-and-light-laptop-original-imaftv7fxtmzhkw3.jpeg?q=70"
          }
          brand={"Hp"}
          name={"HP 14s Core i3 11th Gen - (8GB/256GB SSD/Win 10 home)"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 38323}
          pricecut={"₹ " + 41339}
          offer={"7% off"}
          size={"14 inch"}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/312/312/kcc9q4w0/computer/h/t/g/acer-na-gaming-laptop-original-imafthr8aa4rsjpn.jpeg?q=70"
          }
          brand={"acer"}
          name={
            "acer Aspire 7 ryzen 5 quad core 3550H - (8GB/512GB SSD/windows 10 home)"
          }
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 50990}
          pricecut={"₹ " + 57600}
          offer={"11% off"}
          size={"15.6 inch"}
        />
      </div>
    </div>
  );
}

export default Laptop;
