import React from "react";
import ProductCard from "./ProductCard";

function Shoe() {
  return (
    <div>
      <h3 style={{ margin: "30px " }}>Shoes </h3>
      <div className="card__row">
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/k8uiz680/shoe/w/n/p/cg-248-7-campus-wine-blk-original-imafqruwyzh6zdcp.jpeg?q=50"
          }
          brand={"CAMPUS"}
          name={"Royce-2 Running Shoes"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 897}
          pricecut={"₹ " + 1049}
          offer={"14% off"}
          size={"6, 7, 8, 9, 10, 11, 12"}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/kg5fzww0-0/shoe/s/w/a/380815-7-puma-black-white-original-imafwg3habjrynhn.jpeg?q=50"
          }
          brand={"PUMA"}
          name={"Zod Runner V3 IDP "}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 1499}
          pricecut={"₹ " + 3999}
          offer={"62% off"}
          size={"6, 7, 8, 9, 10, 11"}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/k1l1ea80/shoe/7/e/g/bq3204-001-7-nike-black-anthracite-original-imafh4ktdhqgtkaz.jpeg?q=50"
          }
          brand={"NIKE"}
          name={"REVOLUTION 5 Runner"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 2586}
          pricecut={"₹ " + 3695}
          offer={"30% off"}
          size={"6, 7, 8, 9, 10, 11, 12"}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/k5vcya80pkrrdj/shoe/r/6/q/6-sx0379g-6-grey-sparx-original-imafhdfrzys3r67h.jpeg?q=50"
          }
          brand={"SPARX"}
          name={"SM-379 Fluorescent"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 1048}
          pricecut={"₹ " + 1499}
          offer={"30% off"}
          size={"6, 7, 8, 9, 10"}
        />
      </div>
    </div>
  );
}

export default Shoe;
