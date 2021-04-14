import React from "react";
import ProductCard from "./ProductCard";

function Suitcase() {
  return (
    <div>
      <h3 style={{ margin: "30px " }}>Suitcases</h3>
      <div className="card__row">
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/kl5hh8w0/suitcase/u/w/y/turboflex-str-exp-4-wheel-80-red-sttrbw80red-check-in-luggage-original-imagychyhhekccmu.jpeg?q=50"
          }
          brand={"VIP"}
          name={"Check-in Luggage"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 2699}
          pricecut={"₹ " + 8500}
          offer={"68% off"}
          size={"56 cm, 70.5 cm, 79.5 cm"}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/kkprmvk0/suitcase/l/p/j/star-55-4w-black-star554wblk-cabin-luggage-safari-original-imagyyffzgku6fzu.jpeg?q=50"
          }
          brand={"SAFARI"}
          name={"Medium Check-in Luggage (67 cm) - STAR 65 4W BLACK - Bl..."}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 2299}
          pricecut={"₹ " + 8250}
          offer={"72% off"}
          size={"57 cm, 67 cm, 77 cm"}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/k05ljm80/suitcase/j/j/a/photon-photon75fir-check-in-luggage-aristocrat-30-original-imafjzjbguew2s9p.jpeg?q=50"
          }
          brand={"ARISTOCRAT"}
          name={"Medium Check-in Luggage (65 cm) - PHOTON STROLLY 65 360..."}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 2099}
          pricecut={"₹ " + 7000}
          offer={"70% off"}
          size={"55 cm, 65 cm, 75 cm"}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/495/594/kfcv6vk0/suitcase/k/k/p/55-shift-strolly-55-360-e-sc-shift-cabin-luggage-skybags-21-original-imafvu8efhzyegde.jpeg?q=50"
          }
          brand={"SHEQE"}
          name={"Small Cabin Luggage (55 cm) - Shift Strolly 55 360 ( E)..."}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 2199}
          pricecut={"₹ " + 8999}
          offer={"75% off"}
          size={"Small"}
        />
      </div>
    </div>
  );
}

export default Suitcase;
