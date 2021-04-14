import React from "react";
import ProductCard from "./ProductCard";

function Watch() {
  return (
    <div>
      <h3 style={{ margin: "30px " }}>Watches</h3>
      <div className="card__row">
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/jeka07k0/watch/4/p/y/38024pp25-fastrack-original-imaf37n5df3bn52n.jpeg?q=50"
          }
          brand={"Fastrack"}
          name={"38024PP25 Minimalists Analog Watch - For Men"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 850}
          pricecut={"₹ " + 850}
          offer={"0% off"}
          size={""}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/jezzukw0/watch/d/d/4/77085pp04-sonata-original-imaf3kgxrcywtjey.jpeg?q=50"
          }
          brand={"Sonata"}
          name={"77085PP04 Volt Analog Watch - For Men"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 675}
          pricecut={"₹ " + 675}
          offer={"0% off"}
          size={""}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/kmjhw280/watch/r/t/m/1283greentw-timewear-original-imagff4qccrkegdf.jpeg?q=50"
          }
          brand={"TIMEWEAR"}
          name={"1283GREENTW Timewear Military Series Analogue Digital B..."}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 659}
          pricecut={"₹ " + 3499}
          offer={"81% off"}
          size={""}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/jsc3ssw0/watch/z/f/y/1170-bl-br-fogg-original-imafdv97yfsrn9wt.jpeg?q=50"
          }
          brand={"Fogg"}
          name={"1170-BL-BR Unique N"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 312}
          pricecut={"₹ " + 1699}
          offer={"81% off"}
          size={""}
        />
      </div>
    </div>
  );
}

export default Watch;
