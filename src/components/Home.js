import React from "react";
import "./Home.css";
import Slideshow from "./Slideshow";
import Cardsection from "./Cardsection";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home__container">
      <div className="home__banner">
        <img
          className="home__banner__img1"
          src="https://rukminim1.flixcart.com/www/816/816/promos/23/03/2021/284eae1b-53c0-4648-8e75-3fc127e3a9cc.png?q=90"
          alt=""
        />
        <div className="home__banner__items">
          <img
            src="https://rukminim1.flixcart.com/www/200/200/promos/22/03/2021/28ca1a38-bb47-4707-8593-06be457dda0d.png?q=90"
            alt=""
          />
          <div>Mobiles</div>
        </div>
        <div className="home__banner__items">
          <img
            src="https://rukminim1.flixcart.com/www/200/200/promos/22/03/2021/6e46e87f-ba66-4bc9-b8a9-1c94ee1d1ac5.png?q=90"
            alt=""
          />
          <div>Electronics</div>
        </div>
        <div className="home__banner__items">
          <img
            src="https://rukminim1.flixcart.com/www/200/200/promos/22/03/2021/f378f75c-e953-423c-b43c-ba2c14d31968.png?q=90"
            alt=""
          />
          <div>Fashion</div>
        </div>
        <div className="home__banner__items">
          <img
            src="https://rukminim1.flixcart.com/www/200/200/promos/22/03/2021/a09bdcf1-6af0-4252-8156-cdae77f6a73a.png?q=90"
            alt=""
          />
          <div>TV and Appliances</div>
        </div>
        <div className="home__banner__items">
          <img
            src="https://rukminim1.flixcart.com/www/200/200/promos/22/03/2021/bf4ed290-ca70-497f-a7b9-26d5a8736fff.png?q=90"
            alt=""
          />
          <div>Baby, Toy and more</div>
        </div>
        <div className="home__banner__items">
          <img
            src="https://rukminim1.flixcart.com/www/200/200/promos/22/03/2021/3703d779-3ab5-41fd-ad84-87a6e71299c2.png?q=90"
            alt=""
          />
          <div>Home essentials</div>
        </div>
      </div>
      <img
        className="sbi__banner"
        src="https://rukminim1.flixcart.com/www/3376/3376/promos/22/03/2021/ae784c62-fda1-43af-a0c0-9a5c9c3dde1b.jpg?q=90"
        alt=""
      />
      <Slideshow />
      <div className="card__section">
        <Link to="/tshirt">
          <Cardsection
            url={
              "https://assets.ajio.com/medias/sys_master/root/hae/h56/15216786505758/-1117Wx1400H-461085141-blue-MODEL.jpg"
            }
            title={"UCB, Flying Machine, Adidas, Puma"}
            price={"From ₹ 199"}
            category={"T-shirt & Jeans"}
          />
        </Link>
        <Link to="/backpack">
          <Cardsection
            url={
              "https://contents.mediadecathlon.com/p754503/k$fbcee8b31f4e88a93c4271156a2fb9dc/hiking-bag-15-litre-nh100-blue.jpg?&f=x"
            }
            title={"Lowest Prices on Backpacks"}
            price={"Min 50% off"}
            category={"Skybags, American Tourister, Wildcraft"}
          />
        </Link>
        <Link to="/laptop">
          <Cardsection
            url={
              "https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg"
            }
            title={"Best selling laptops"}
            price={"Upto 40% off"}
            category={"No cost EMI | Product exchange"}
          />
        </Link>
      </div>
      <div className="card__section">
        <Link to="/shoe">
          <Cardsection
            url={
              "https://s3.amazonaws.com/nikeinc/assets/84925/Sp19_BB_Nike_Adapt_20181218_NIKE0538_Detail5_rectangle_1600.jpg?1547068102"
            }
            title={"Provogue, Killer & More"}
            price={"Under ₹ 699"}
            category={"Men's Footwear"}
          />
        </Link>
        <Link to="/sunglasses">
          <Cardsection
            url={
              "https://images-na.ssl-images-amazon.com/images/I/518mBg%2BxQtL._UL1050_.jpg"
            }
            title={"Sunglasses"}
            price={"Min 70% off"}
            category={"Buy Now!"}
          />
        </Link>
        <Link to="/headphones">
          <Cardsection
            url={
              "https://images-na.ssl-images-amazon.com/images/I/61ihz46SLOL._SL1500_.jpg"
            }
            title={"Headphones"}
            price={"Min 50% off"}
            category={"Hurry, Don't miss out!"}
          />
        </Link>
      </div>
      <div className="card__section">
        <Link to="/watch">
          <Cardsection
            url={
              "https://images-na.ssl-images-amazon.com/images/I/71gdBQP%2BqGL._UL1500_.jpg"
            }
            title={"Wrist watches"}
            price={"Min 80% off"}
            category={"Shop Now"}
          />
        </Link>
        <Link to="/kurta">
          <Cardsection
            url={
              "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9329399/2019/4/24/8df4ed41-1e43-4a0d-97fe-eb47edbdbacd1556086871124-Libas-Women-Kurtas-6161556086869769-1.jpg"
            }
            title={"Kurta, Sets and more"}
            price={"Min 70% off"}
            category={"Varanga, Anmi, Nayo"}
          />
        </Link>
        <Link to="/suitcase">
          <Cardsection
            url={
              "data:image/jpeg;base64,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"
            }
            title={"Suitcase"}
            price={"Min 60% off"}
            category={"Skybags, American tourister"}
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
