import React, { Component } from "react";
import "./Footer.css";
import logo from "./logo/logo.png";
import p1 from "./game/Payment.png";

//import bet from "./game/visa.png";
export default class Footer extends Component {
  render() {
    return (
      <div id="footer-sidebar">
        <div className="container" id="container5">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-widget">
                <h4 id="compete">COMPETE COMPANY</h4>
                <p id="faq">
                  About Us <br />
                  <br />
                  Contact <br />
                  <br />
                  Terms & Conditions
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-widget">
                <h4 id="compete">COMPANY</h4>
                <p id="faq">
                  Create a Ticket <br />
                  <br />
                  Contact us
                  <br /> <br />
                  About us
                  <br />
                  <br /> FAQ
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-widget">
                <h4>
                  <img src={logo} width=" 183px" height=" 50px" />
                </h4>
                <div class="ban">
                  <img src={p1} id="pay" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-widget">
                <h4>
                  <i class="fab fa-facebook-square"></i>&nbsp;&nbsp;
                  <i class="fab fa-instagram"></i>&nbsp;&nbsp;
                  <i class="fab fa-tiktok"></i>&nbsp;&nbsp;
                  <i class="fab fa-twitter-square"></i>
                </h4>
                <address id="address">
                  © 2021 Gamehub Inc All Rights Reserved Terms of Service |
                  Privacy Policy
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
