import React from "react";
import ProductCard from "./ProductCard";

function Backpack() {
  return (
    <div>
      <h3 style={{ margin: "30px " }}>Backpack</h3>
      <div className="card__row">
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/kkzrpu80/backpack/l/b/0/spacy-unisex-backpack-with-rain-cover-and-reflective-strip-p-073-original-imagy7zhthnhh87a.jpeg?q=50"
          }
          brand={"PROVOGUE"}
          name={"Large 35 L Laptop Backpack"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 801}
          pricecut={"₹ " + 2099}
          offer={"73% off"}
          size={"35 L"}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/kerfl3k0/backpack/f/4/q/bomber-eco-statement-2c-bkpecosnt0301-backpack-gear-25-original-imafvdpqdngqvkgp.jpeg?q=50"
          }
          brand={"Gear"}
          name={"Medium 25L Backpack"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 499}
          pricecut={"₹ " + 1999}
          offer={"75% off"}
          size={"25 L"}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/ju79hu80/backpack/m/z/g/daredevil-12147-laptop-backpack-wildcraft-original-imaffdntxed6y84u.jpeg?q=50"
          }
          brand={"Wildcraft"}
          name={"Large 43L Backpack"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 929}
          pricecut={"₹ " + 2899}
          offer={"67% off"}
          size={"43 L"}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/kkmwr680/backpack/e/x/p/skater-06-laptop-navy-blue-lpbpsk6nbl-backpack-skybags-original-imaf72ugrufnzmzr.jpeg?q=50"
          }
          brand={"SKYBAGS"}
          name={"Medium 30L Laptop Backpack"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 899}
          pricecut={"₹ " + 3300}
          offer={"72% off"}
          size={"30 L"}
        />
      </div>

      <div className="card__row">
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/ki3gknk0-0/backpack/t/n/i/spacy-unisex-backpack-with-rain-cover-and-reflective-strip-p-041-original-imafxyypsycttkeb.jpeg?q=50"
          }
          brand={"PROVOGUE"}
          name={"Large 35 L Backpack"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 801}
          pricecut={"₹ " + 2099}
          offer={"75% off"}
          size={"35 L"}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/309/371/jwgple80/backpack/r/d/9/spin-laptop-backpack-01-grey-fs0-0-08-001-laptop-backpack-original-imafh54gwgzgp8ag.jpeg?q=50"
          }
          brand={"AMERICAN TOURISTER"}
          name={"Medium 29L Laptop Backpack"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 829}
          pricecut={"₹ " + 2780}
          offer={"70% off"}
          size={"29 L"}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/klv7ekw0/backpack/m/l/w/vintage2-anti-theft-faux-leather-lbpvg2lth0201-laptop-backpack-original-imagyw6kyabg8pxz.jpeg?q=50"
          }
          brand={"Gear"}
          name={"Medium 28L Laptop Backpack"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 699}
          pricecut={"₹ " + 2199}
          offer={"68% off"}
          size={"28 L"}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/kjvrdzk0/backpack/u/b/t/walker-backapck-red-laptop-bag-a-10-laptop-backpack-mtrocraft-40-original-imafzcrwyckc8ezh.jpeg?q=50"
          }
          brand={"MTROCRAFT"}
          name={"Large 40 L Laptop Backpack"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 450}
          pricecut={"₹ " + 4999}
          offer={"93% off"}
          size={"40 L"}
        />
      </div>
    </div>
  );
}

export default Backpack;
