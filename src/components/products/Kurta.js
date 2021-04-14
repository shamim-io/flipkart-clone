import React from "react";
import ProductCard from "./ProductCard";

function Kurta() {
  return (
    <div>
      <h3 style={{ margin: "30px " }}>Kurtis</h3>
      <div className="card__row">
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/k3xcdjk0pkrrdj/kurta/y/p/b/xs-vfku128-vbuyz-original-imaf6wzwp4uztbzx.jpeg?q=50"
          }
          brand={"Vbuyz"}
          name={"Women Printed Rayon Frontslit Kurta"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 499}
          pricecut={"₹ " + 2499}
          offer={"80% off"}
          size={"S, M, L, XL, XXL, XXXL"}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/jqwny4w0/kurta/n/d/x/xl-vfku227-vbuyz-original-imafcttuugvzznns.jpeg?q=50"
          }
          brand={"SAARA"}
          name={"Women Printed Rayon Straight Kurta"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 413}
          pricecut={"₹ " + 2066}
          offer={"80% off"}
          size={"M, L, XL, XXL, XXXL"}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/kgv5x8w0-0/kurta/c/6/o/xxl-gw104-3-glowworld-original-imafwzhfybgeuzja.jpeg?q=50"
          }
          brand={"Glowworld"}
          name={"Women Printed Pure Cotton Straight Kurta"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 359}
          pricecut={"₹ " + 1499}
          offer={"76% off"}
          size={"S, M, L, XL, XXL"}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/k3xcdjk0pkrrdj/kurta/g/r/b/l-vfku283-vbuyz-original-imafeffsc2gggqzr.jpeg?q=50"
          }
          brand={"SHEQE"}
          name={"Women Self Design Rayon A-line Kurta"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 612}
          pricecut={"₹ " + 2499}
          offer={"75% off"}
          size={"S, M, L, XL, XXL, 3XL"}
        />
      </div>
    </div>
  );
}

export default Kurta;
