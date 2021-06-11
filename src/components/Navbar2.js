import React, { Component } from "react";
import "./Navbar2.css";
import logo from "./logo/logo.png";
import { Link } from "react-router-dom";

export default class Navbar2 extends Component {
  render() {
    return (
      <nav class="aa">
        <div className="col-5 col-md-4 col-sm- 3">
          <ul class="ul">
            <li class="h1">
              <Link to="/" class="link1">
                <a id="s">HOME</a>
              </Link>
            </li>
            <li class="h1">
              <Link class="link1" to="/game">
                <a class="nav-link text-white" id="s">
                  GAME
                </a>
              </Link>
            </li>
            <li class="h1">
              <Link to="/tournament" class="link1">
                <a class="nav-link text-white" id="s">
                  TOURNAMENTS
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <img src={logo} class="img" />
        </div>
        <div className="col-4">
          <span className="btn">LOG IN</span>
          <button className="btn2">JOIN FREE</button>
        </div>
      </nav>
    );
  }
}
