import React, { Component } from "react";
import Slider from "react-slick";
import fev from "../favicon.ico";

export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      rtl: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3>
              <img src={fev} alt="" />
            </h3>
            <h3>
              <img src={fev} alt="" />
            </h3>
            <h3>
              <img src={fev} alt="" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={fev} alt="" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={fev} alt="" />
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
