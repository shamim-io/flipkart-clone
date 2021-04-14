import React from "react";
import ProductCard from "./ProductCard";

function Headphones() {
  return (
    <div>
      <h3 style={{ margin: "30px " }}>Headphones</h3>
      <div className="card__row">
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/612/612/kcgk1ow0/headphone/n/u/a/235v2-fast-charging-boat-original-imaftk6us4af7bca.jpeg?q=70"
          }
          brand={"Boat"}
          name={"boAt Rockerz 235v2 with ASAP charging Version 5.0 Bluet..."}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 1199}
          pricecut={"₹ " + 2990}
          offer={"59% off"}
          size={""}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/612/612/k9vofbk0/headphone/j/m/x/e303a-oneplus-original-imafrkkxvtzgkzzj.jpeg?q=70"
          }
          brand={"OnePlus"}
          name={"OnePlus Bullets Wireless Z Bluetooth Headset"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 1999}
          pricecut={"₹ " + 2190}
          offer={"8% off"}
          size={""}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/612/612/k20r8nk0/headphone/7/w/c/realme-buds-2-original-imafhgrckbygsyrk.jpeg?q=70"
          }
          brand={"realme"}
          name={"realme Buds 2 Wired Headset"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 599}
          pricecut={"₹ " + 799}
          offer={"25% off"}
          size={""}
        />
        <ProductCard
          img={
            "https://rukminim1.flixcart.com/image/612/612/kmccosw0/headphone/g/7/j/airdopes-131-boat-original-imagf9n3rhpwq252.jpeg?q=70"
          }
          brand={"Boat"}
          name={"boAt Airdopes 131 Bluetooth Headset"}
          url={
            "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          }
          price={"₹ " + 1299}
          pricecut={"₹ " + 2990}
          offer={"56% off"}
          size={""}
        />
      </div>
    </div>
  );
}

export default Headphones;
