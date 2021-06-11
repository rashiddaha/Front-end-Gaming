import React, { Component } from "react";
import "../Indgames.css";
import Geo from "../game/game2.png";
import Doller from "../game/dollr.png";
import Ind from "../game/game2.png";
import axios from "axios";
import Countdown from "react-countdown";
import Timer from "react-compound-timer";

export default class Indgames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saad: "testestsest",
      data: [],
      data2: [],
    };
  }

  async componentDidMount() {
    console.log("loaded", this.props.match.params.ind);
    var id = this.props.match.params.ind;

    await axios.get("https://gamehubx.com/api/v1/game/" + id).then((res) => {
      this.setState({ data: res.data });
      console.log("indiviadl game data", this.state.data);
    });

    await axios
      .get("https://gamehubx.com/api/v1/tournament/?game=" + id)
      .then((res) => {
        this.setState({ data2: res.data });
        console.log("indiviadl tournament data", this.state.data2);
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
      <div class="desk">
        <div class="dc">
          <div id="dc">
            <img src={this.state.data.cover_image} id="ce" />
            <div class="bottom-left">{this.state.data.title} tournaments</div>
          </div>
        </div>
        <div class="container" id="desk1">
          <p id="desk2">upcoming TOURNAMENTS</p>
          <div class="row">
            {this.state.data2.map((ent) => (
              <>
                <div class="col-4" id="e">
                  <div id="mg">
                    <img src={ent.image} id="eimg" />
                    <div>
                      <img src={Doller} id="edolr" />
                      <p id="etex">${ent.entry_fee}</p>
                    </div>
                  </div>

                  <div id="etext">
                    <h4>
                      <p id="et">{ent.title}</p>
                      <span id="espan">
                        {ent.start_on} &nbsp;
                        <span id="esp">
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
                    <div id="ediv">
                      <span id="espa">ENTRY </span>
                      <p id="esp1">${ent.entry_fee}</p>
                    </div>
                    <div id="ediv">
                      <span id="espa">TEAM SIZE </span>
                      <p id="esp1">{ent.team_size}</p>
                    </div>
                    <div id="ediv">
                      <span id="espa">MAX TEAMS</span>
                      <p id="esp1">{ent.max_team}</p>
                    </div>

                    <div id="ediv">
                      <span id="espa">ENTERED</span>
                      <p id="esp1">$10</p>
                    </div>
                    <div id="ediv">
                      <span id="espa">PLATFORM </span>
                      <p id="esp1">{ent.platform_detail}</p>
                    </div>
                  </div>
                  <div id="eline">
                    View Details<i class="fas fa-arrow-right"></i>
                  </div>
                </div>
              </>
            ))}
            {/* 1st start */}
            {/* <div class="col-4" id="e">
              <div id="mg">
                <img src={Geo} id="eimg" />
                <div>
                  <img src={Doller} id="edolr" />
                  <p id="etex">$100</p>
                </div>
              </div>

              <div id="etext">
                <h4>
                  <p id="et"> 5v5 FIFA CHIP</p>
                  <span id="espan">
                    Jun 10, 2:30 PM ET &nbsp;
                    <span id="esp">Starts in 1H 35 M</span>
                  </span>
                </h4>
                <div id="ediv">
                  <span id="espa">ENTRY </span>
                  <p id="esp1">$10</p>
                </div>
                <div id="ediv">
                  <span id="espa">TEAM SIZE </span>
                  <p id="esp1">$10</p>
                </div>
                <div id="ediv">
                  <span id="espa">MAX TEAMS</span>
                  <p id="esp1">$10</p>
                </div>

                <div id="ediv">
                  <span id="spa">ENTERED</span>
                  <p id="sp1">$10</p>
                </div>
                <div id="ediv">
                  <span id="espa">PLATFORM </span>
                  <p id="esp1">XBOX,PS5, PC,MOBILE</p>
                </div>
              </div>
              <div id="eline">
                View Details<i class="fas fa-arrow-right"></i>
              </div>
            </div> */}
            {/* 1st */}
          </div>
        </div>
      </div>
    );
  }
}
