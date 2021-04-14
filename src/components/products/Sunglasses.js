import React from "react";
import ProductCard from "./ProductCard";

function Sunglasses() {
  return (
    <div>
      <h3 style={{ margin: "30px " }}>Sunglasses </h3>
      <div className="card__row">
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/jmqmpow0-1/sunglass/t/2/w/one-size-fits-all-p429gr3-fastrack-original-imaf9kx9fuceyggz.jpeg?q=50"
          }
          brand={"Fastrack"}
          name={"UV protection Wayfeyer"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 758}
          pricecut={"₹ " + 899}
          offer={"14% off"}
          size={"Free Size"}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/km0x5zk0/sunglass/8/y/y/m-wc35-silver-kartz-original-imagfyn8pddz6sss.jpeg?q=50"
          }
          brand={"Silver Kartz"}
          name={"UV Protection Wayfeyer"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 246}
          pricecut={"₹ " + 1499}
          offer={"83% off"}
          size={"Free Size"}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/jx7uykw0/sunglass/t/j/t/m-rs006av-royal-son-original-imafeb2yvwwnbrpg.jpeg?q=50"
          }
          brand={"ROYAL SON"}
          name={"Morrored Aviator Sunglass"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 379}
          pricecut={"₹ " + 1499}
          offer={"74% off"}
          size={"Free Size, Medium"}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/k0h12fk0/sunglass/8/z/2/op-fmae0250-flying-machine-original-imafk97u6rtwjcun.jpeg?q=50"
          }
          brand={"FLYING MACHINE"}
          name={"UV Protection Wayfeyer"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 695}
          pricecut={"₹ " + 1599}
          offer={"56% off"}
          size={"Free Size"}
        />
      </div>
    </div>
  );
}

export default Sunglasses;
