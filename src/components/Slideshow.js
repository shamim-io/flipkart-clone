import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slideshow.css";

const slideImages = [
  "https://netrockdeals.sirv.com/the%20big%20billion%20day%20sale%20slide%20banner.jpg",
  "https://i.pinimg.com/originals/68/2f/cb/682fcbc3fb10cb228b4856c728185a1c.png",
  "https://d8it4huxumps7.cloudfront.net/uploads/images/GRiD-Competition-Cover-Page-Banner-1.jpg?d=1440x418",
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            {/* <span>Slide 2</span> */}
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            {/* <span>Slide 3</span> */}
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
