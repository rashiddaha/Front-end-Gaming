import React, { Component } from "react";
import "./News.css";
import Geo from "./game/game2.png";
export default class News extends Component {
  render() {
    return (
      <div class="ah">
        <div class="container" id="container4">
          <h1 class="cham4">GAMEHUB NEWS</h1>
          <div class="row">
            <div class="col-4" id="new1">
              <img src={Geo} id="cham5" />
              <div class="cham6">
                <h5 id="fifa">
                  FIFA Friday <br />
                  Events
                </h5>
                <span id="may">24 May</span>
                <p class="pp">
                  Guaranteed Prizes for Kill Race Tournaments!ScheduleFriday,
                  <br /> May. 28th
                </p>
                <div>
                  <button id="bta">
                    <span id="pro1">Read More</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-4" id="new1">
              <img src={Geo} id="cham5" />
              <div class="cham6">
                <h5 id="fifa">
                  FIFA Friday <br />
                  Events
                </h5>
                <span id="may">24 May</span>
                <p class="pp">
                  Guaranteed Prizes for Kill Race Tournaments!ScheduleFriday,
                  <br /> May. 28th
                </p>
                <div>
                  <button id="bta">
                    <span id="pro1">Read More</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-4" id="new1">
              <img src={Geo} id="cham5" />
              <div class="cham6">
                <h5 id="fifa">
                  FIFA Friday <br />
                  Events
                </h5>
                <span id="may">24 May</span>
                <p class="pp">
                  Guaranteed Prizes for Kill Race Tournaments!ScheduleFriday,
                  <br /> May. 28th
                </p>
                <div>
                  <button id="bta">
                    <span id="pro1">Read More</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
