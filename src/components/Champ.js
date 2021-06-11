import React, { Component } from "react";
import "./Champ.css";
import Geo from "./game/game2.png";
import axios from "axios";
import crown from "./game/crown.png";

export default class Champ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saad: "sadsda",
      data: [],
    };
  }

  async componentDidMount() {
    await axios
      .get("https://gamehubx.com/api/v1/player-of-week/")
      .then((res) => {
        this.setState({ data: res.data });
        console.log(this.state.data[0]);
      });
  }
  render() {
    return (
      <div class="hb">
        {this.state.data.length != 0 ? (
          <div id="container3">
            <h1 class="cham">CHAMPIONS OF THE WEEK</h1>
            {/* 1st */}
            <div id="dex">
              <div id="ol">
                <img src={this.state.data[0].image} id="geo" />
              </div>
              <div class="box">
                <div id="fa">
                  <img src={crown} id="fas1" />

                  {/* <img src={crown} id="fas" /> */}
                </div>
                <div>
                  <h1 class="tom">{this.state.data[0].name}</h1>
                </div>
                <div class="tom1">
                  <h2 id="war">{this.state.data[0].game_title}</h2> &nbsp;
                  <img src={this.state.data[0].game_image} id="warimg" />
                  <br />
                  <div>
                    <h4 class="won">${this.state.data[0].won_amount} WON</h4>
                  </div>
                  <div>
                    <button id="bts">
                      <span id="pro">View Profile</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/*-----------------*/}
            <div class="champ2">
              <div id="dex">
                <div id="l">
                  <img src={this.state.data[2].image} id="geo" />
                </div>
                <div class="boxs">
                  <div id="fb">
                    <img src={crown} id="fas2" />
                  </div>
                  <div>
                    <h1 class="tom">{this.state.data[2].name}</h1>
                  </div>
                  <div class="tom1">
                    <h2 id="war">{this.state.data[2].game_title}</h2> &nbsp;
                    <img src={this.state.data[2].game_image} id="warimg" />
                    <br />
                    <div>
                      <h4 class="won">${this.state.data[2].won_amount} WON</h4>
                    </div>
                    <div>
                      <button id="bts">
                        <span id="pro">View Profile</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*-----------------*/}
            <div class="champ3">
              <div id="dex">
                <div id="ol">
                  <img src={this.state.data[1].image} id="geo" />
                </div>
                <div class="boxss">
                  <div id="fa">
                    <img src={crown} id="fas1" />
                  </div>
                  <div>
                    <h1 class="tom">{this.state.data[1].name}</h1>
                  </div>
                  <div class="tom1">
                    <h2 id="war">{this.state.data[1].game_title}</h2> &nbsp;
                    <img src={this.state.data[1].game_image} id="warimg" />
                    <br />
                    <div>
                      <h4 class="won">${this.state.data[1].won_amount} WON</h4>
                    </div>
                    <div>
                      <button id="bts">
                        <span id="pro">View Profile</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*-------------------*/}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
