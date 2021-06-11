import React, { Component } from "react";
import "../Games.css";
import Geo from "../game/game2.png";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saad: "sadsda",
      data: [],
    };
  }

  async componentDidMount() {
    await axios.get("https://gamehubx.com/api/v1/game/").then((res) => {
      this.setState({ data: res.data });
    });
    console.log(this.state.data);
    //str.replace(/\s/g, '')
    console.log(this.state.data[0].title);
    console.log(this.state.data[0].title.replace(/\s/g, ""));
  }

  abc(a) {
    return a.replace(/\s/g, "");
  }
  render() {
    return (
      <div>
        <div class="ac">
          <div class="container" id="container12">
            <h1 class="aal">all games</h1>
            <span class="tour11">
              Select a game to view all of its upcoming tournaments
            </span>
            <div class="grid-container">
              <div class="row">
                {/* 
                to={`/articles/${article.id}`}
                to={{
                          pathname: "/ind",
                          state: ent,
                        }} 
                        */}
                {this.state.data.map((ent) => (
                  <>
                    <div class="col-sm-2">
                      <Link
                        class="xyz"
                        to={`/${this.abc(ent.title)}/${ent.id}`}
                      >
                        <img src={ent.image} id="pic1" />
                        <div class="content2">
                          <p>{ent.title}</p>
                        </div>
                      </Link>
                    </div>
                  </>
                ))}
              </div>
            </div>

            {/*
            <div class="row">
              <div class="col-md-2" id="pic">
                <img src={Geo} id="pic1" />
                <div class="content2">modern warfare: warzone</div>
              </div>
              <div class="col-md-2" id="pic">
                <img src={Geo} id="pic1" />
                <div class="content2">modern warfare: warzone</div>
              </div>
              <div class="col-md-2" id="pic">
                <img src={Geo} id="pic1" />
                <div class="content2">modern warfare: warzone</div>
              </div>
              <div class="col-md-2" id="pic">
                <img src={Geo} id="pic1" />
                <div class="content2">modern warfare: warzone</div>
              </div>
              <div class="col-md-2" id="pic">
                <img src={Geo} id="pic1" />
                <div class="content2">modern warfare: warzone</div>
              </div>
            </div>
            <br />
            {/*------------------ */}
            {/* <div id="space"> 
              <div class="row">
                <div class="col-md-2 " id="pic">
                  <img src={Geo} id="pic1" />
                  <div class="content2">modern warfare: warzone</div>
                </div>
                <div class="col-md-2" id="pic">
                  <img src={Geo} id="pic1" />
                  <div class="content2">modern warfare: warzone</div>
                </div>
                <div class="col-md-2" id="pic">
                  <img src={Geo} id="pic1" />
                  <div class="content2">modern warfare: warzone</div>
                </div>
                <div class="col-md-2" id="pic">
                  <img src={Geo} id="pic1" />
                  <div class="content2">modern warfare: warzone</div>
                </div>
                <div class="col-md-2" id="pic">
                  <img src={Geo} id="pic1" />
                  <div class="content2">modern warfare: warzone</div>
                </div>
              </div>
            </div>
            {/*------------------*/}
            {/* <div id="space"> 
              <div class="row">
                <div class="col-md-2" id="pic">
                  <img src={Geo} id="pic1" />
                  <div class="content2">modern warfare: warzone</div>
                </div>
                <div class="col-md-2" id="pic">
                  <img src={Geo} id="pic1" />
                  <div class="content2">modern warfare: warzone</div>
                </div>
                <div class="col-md-2" id="pic">
                  <img src={Geo} id="pic1" />
                  <div class="content2">modern warfare: warzone</div>
                </div>
                <div class="col-md-2" id="pic">
                  <img src={Geo} id="pic1" />
                  <div class="content2">modern warfare: warzone</div>
                </div>
                <div class="col-md-2" id="pic">
                  <img src={Geo} id="pic1" />
                  <div class="content2">modern warfare: warzone</div>
                </div>
              </div>
              {/* ---------------------- */}
            {/* <div class="scrol"> 
                <h1 id="eco">ONLINE TOURNAMENTS</h1>
                <hr />

                <p id="white">
                  What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book it hasWhat is Lorem Ipsum Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book it has
                </p>
                <h2 id="co">COMPETITIVE GAMING TOURNAMENTS</h2>
                <hr />
                <p id="white">
                  What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book it hasWhat is Lorem Ipsum Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s when an unknown printer
                </p>
              </div>
              */}
          </div>
        </div>
      </div>
    );
  }
}
