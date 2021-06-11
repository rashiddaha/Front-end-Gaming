import React, { Component } from "react";
import "./Statistics.css";
import axios from "axios";
import crown from "./game/champ1.png";
import crown2 from "./game/champ2.png";
import crown3 from "./game/champ3.png";

export default class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saad: "sadsda",
      data: [],
    };
  }

  async componentDidMount() {
    await axios.get("https://gamehubx.com/api/v1/statistics/").then((res) => {
      this.setState({ data: res.data });
    });
  }
  render() {
    return (
      <div class="bh">
        <div class="container" id="container2">
          <h1 class="tweet">Statistics</h1>
          <div class="fn">
            <div id="stat">
              {/* <i class="fas fa-crown" id="fas"></i> */}
              <img src={crown} id="fas" />
              <div class="fizz">{this.state.data.champion_crowned}</div>
              <div class="fiz">CHAMPIONS CROWNED</div>
            </div>
            <div id="stat">
              {/* <i class="fas fa-crown" id="fas"></i>
               */}
              <img src={crown3} id="fas" />
              <div class="fizz">{this.state.data.wining_paid}</div>
              <div class="fiz">WINNINGS PAID</div>
            </div>
            <div id="stat">
              {/* <i class="fas fa-crown" id="fas"></i> */}
              <img src={crown2} id="fas" />
              <div class="fizz">{this.state.data.active_tournament}</div>
              <div class="fiz">ACTIVE TOURNAMENTS</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
