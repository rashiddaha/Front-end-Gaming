import React, { Component } from "react";
import Tourn from "../Tourn";
import "../Tourn.css";
import Geo from "../game/game2.png";
import Doller from "../game/dollr.png";
import axios from "axios";
import Countdown from "react-countdown";
import Timer from "react-compound-timer";

export default class Tournament extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saad: "sadsda",
      data: [],
    };
  }

  async componentDidMount() {
    await axios.get("https://gamehubx.com/api/v1/tournament/").then((res) => {
      this.setState({ data: res.data });
      console.log(this.state.data);
    });
  }

  getsec(a) {
    var myDate = new Date(a); // a is start_on
    var date = new Date(); // current date
    var dou2 = myDate.getTime() - date.getTime();
    return dou2;
  }

  render() {
    return (
      <div>
        <div class="gb">
          <div class="container" id="container11">
            <h1 class="all">all tournaments</h1>
            <span class="to1">View all of our upcoming tournaments</span>
            <div class="row">
              {this.state.data.map((ent) => (
                <>
                  <div class="col-4" id="d">
                    <div id="mg">
                      <img src={ent.image} id="img" />
                      <div>
                        <img src={Doller} id="dolr" />
                        <p id="tex">${ent.entry_fee}</p>
                      </div>
                    </div>
                    <div id="text">
                      <h4>
                        {ent.title}
                        <br />
                        <span id="span">
                          {ent.start_on} ET &nbsp;
                          <span id="sp">
                            Starts in{" "}
                            {/* <Countdown
                              date={Date.now() + this.getsec(ent.start_on)}
                              daysInHours={true}
                            />{" "} */}
                            <Timer
                              initialTime={this.getsec(ent.start_on)}
                              direction="backward"
                            >
                              <Timer.Hours /> hours <Timer.Minutes /> minutes
                            </Timer>
                          </span>
                        </span>
                      </h4>
                      <div id="div">
                        <span id="spa">ENTRY </span>
                        <p id="sp1">${ent.entry_fee}</p>
                      </div>
                      <div id="div">
                        <span id="spa">TEAM SIZE </span>
                        <p id="sp1">{ent.team_size}</p>
                      </div>
                      <div id="div">
                        <span id="spa">MAX TEAMS</span>
                        <p id="sp1">{ent.max_team}</p>
                      </div>

                      <div id="div">
                        <span id="spa">ENTERED</span>
                        <p id="sp1">$10</p>
                      </div>
                      <div id="div">
                        <span id="spa">PLATFORM </span>
                        <p id="sp1">{ent.platform_detail}</p>
                      </div>
                    </div>
                    <div id="line">
                      View Details<i class="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </>
              ))}
              {/* end of map */}
              {/* <div class="col-4" id="d">
                <div id="mg">
                  <img src={Geo} id="img" />
                  <div>
                    <img src={Doller} id="dorr" />
                    <p id="txe">$100</p>
                  </div>
                </div>
                <div id="text">
                  <h4>
                    3v3 SINGLE ELIMIANUM
                    <br />
                    <span id="span">
                      Jun 10, 2:30 PM ET &nbsp;
                      <span id="sp">Starts in 1H 35 M</span>
                    </span>
                  </h4>
                  <div id="div">
                    <span id="spa">ENTRY </span>
                    <p id="sp1">$10</p>
                  </div>
                  <div id="div">
                    <span id="spa">TEAM SIZE </span>
                    <p id="sp1">$10</p>
                  </div>
                  <div id="div">
                    <span id="spa">MAX TEAMS</span>
                    <p id="sp1">$10</p>
                  </div>

                  <div id="div">
                    <span id="spa">ENTERED</span>
                    <p id="sp1">$10</p>
                  </div>
                  <div id="div">
                    <span id="spa">PLATFORM </span>
                    <p id="sp1">$10</p>
                  </div>
                </div>
                <div id="line">
                  View Details<i class="fas fa-arrow-right"></i>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
