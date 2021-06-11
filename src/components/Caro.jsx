import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import "./Caro.css";
import axios from "axios";

import Item from "./Item";
import { Link } from "react-router-dom";

export default class Caro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saad: "sadsda",
      data: [],
    };
  }

  async componentDidMount() {
    await axios
      .get("https://gamehubx.com/api/v1/game/?feature=false")
      .then((res) => {
        this.setState({ data: res.data });
        //console.log(this.state.data);
      });
  }
  render() {
    // const breakPoints = [
    //   { width: 1, itemsToShow: 1 },
    //   { width: 550, itemsToShow: 2 },
    //   { width: 768, itemsToShow: 3 },
    //   { width: 1200, itemsToShow: 4 },
    // ];
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 768, itemsToShow: 5 },
      { width: 1200, itemsToShow: 5 },
    ];
    return (
      <div class="can">
        <div className="container">
          <h1 id="game">GAMES</h1>
          <span class="para">
            Select a game and choose an available tournament
          </span>

          <Carousel breakPoints={breakPoints}>
            {this.state.data.map((ent) => (
              <Item>
                <Link
                  class="xyz"
                  to={{
                    pathname: "/ind",
                    state: ent,
                  }}
                >
                  <img src={ent.image} alt="" id="imga" />
                  <div class="content">
                    <h4>{ent.title}</h4>
                  </div>
                </Link>
              </Item>
            ))}
            {/* <Item>
              <img src={dex} alt="" id="imga" />
              <div class="content">
                <h4>modern warfare: warzone</h4>
              </div>
            </Item> */}
          </Carousel>
        </div>
      </div>
    );
  }
}
