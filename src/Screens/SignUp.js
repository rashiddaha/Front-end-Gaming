import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import axios from "axios";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      pass: "",
      confpass: "",
      phoneext: "",
      phone: "",
      timezone: "",
      day: "",
      month: "",
      year: "",
      term: "",
      eight: "",
      cross: "/icons/cancel.png",
      passstate: "weak",
      btnstate: true,
    };
  }

  handleChange(e) {
    // var ele = e.target.name;
    //console.log(this.state);
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        console.log(
          this.state.username,
          this.state.email,
          this.state.pass,
          this.state.confpass,
          this.state.phoneext,
          this.state.phone,
          this.state.timezone,
          this.state.day + "-" + this.state.month + "-" + this.state.year,
          this.state.term,
          this.state.eight
        );
      }
    );
  }

  handleChange2(e) {
    let isChecked = e.target.checked;
    console.log("is check stuff", e.target.value);
    if (isChecked === true) {
      this.setState({
        [e.target.name]: "true",
      });
    }
  }

  handleChange3 = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      var pass = this.state.pass;
      // eslint-disable-next-line
      var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{9,32}$/;
      // eslint-disable-next-line
      var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      console.log("length of pass", this.state.pass.length);
      var test = reg.test(pass);

      if (test & format.test(pass) & (this.state.pass.length > 9)) {
        console.log(
          "contains symbol and length of pass",
          this.state.pass.length
        );
        this.setState({ cross: "/icons/tick.png" });
        this.setState({ btnstate: false });

        console.log("pass3");
      } else {
        console.log("fail3");
        this.setState({ cross: "/icons/cancel.png" }, () => {});
        this.setState({ btnstate: true }, () => {});
      }

      if (pass.length < 5) {
        this.setState({ passstate: "weak" });
      }
      if ((pass.length >= 5) & (pass.length < 10)) {
        this.setState({ passstate: "medium" });
      }
      if (pass.length >= 10) {
        this.setState({ passstate: "Strong" });
      }
    });
  };

  handlesubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.pass, "submuit buton");
    var pass = this.state.pass;
    var conf = this.state.confpass;
    if (pass === conf) {
      console.log("SSAAAMMEEE");
      await axios({
        method: "post",
        url: "https://gamehubx.com/api/v1/signup/",
        headers: {},
        data: {
          username: this.state.username,
          name: "saadkhalid",
          email: this.state.email,
          dob: this.state.year + "-" + this.state.month + "-" + this.state.day,
          password: this.state.pass,
          phone_number: this.state.phoneext + this.state.phone,
          timezone: this.state.timezone,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
          alert("USERNAME or Email Already in use");
        });
    } else {
      alert("Passwords dont match");
    }
    // var body = {
    //   username: this.state.username,
    //   name: "saadkhalid",
    //   email: this.state.email,
    //   dob: this.state.year + "-" + this.state.month + "-" + this.state.day,
    //   password: this.state.pass,
    //   phone_number: this.state.phoneext + this.state.phone,
    //   timezone: this.state.timezone,
    // };
  };

  render() {
    return (
      <div className="signup-cont">
        <div className="signup-sect">
          <div className="title">STEP UP YOUR GAME JOIN TODAY</div>
          <div className="subtitle">
            Already a member?
            <Link
              to="/login"
              style={{
                color: "#F69204",
                marginLeft: "5px",
                textDecoration: "none",
              }}
            >
              {" "}
              Sign in
            </Link>
          </div>
          <form className="form-sect">
            <input
              required
              className="input-fields"
              name="username"
              value={this.state.username}
              onChange={(e) => this.handleChange(e)}
              type="text"
              placeholder="Username"
            ></input>
            <input
              required
              className="input-fields"
              name="email"
              value={this.state.email}
              onChange={(e) => this.handleChange(e)}
              type="email"
              placeholder="Email Address"
            ></input>
            <input
              required
              className="input-fields"
              name="pass"
              value={this.state.pass}
              onChange={(e) => this.handleChange3(e)}
              type="password"
              placeholder="Create Password"
            ></input>
            <div className="issues">
              <div className="warning">
                <img src={this.state.cross} alt="cancel"></img>
                <div style={{ marginLeft: "10px" }}>10 characters</div>
              </div>
              <div className="warning">
                <img src={this.state.cross} alt="cancel"></img>
                <div style={{ marginLeft: "10px" }}>Upper Case</div>
              </div>
              <div className="warning">
                <img src={this.state.cross} alt="cancel"></img>
                <div style={{ marginLeft: "10px" }}>Lower Case</div>
              </div>
              <div className="warning">
                <img src={this.state.cross} alt="cancel"></img>
                <div style={{ marginLeft: "10px" }}>Numbers</div>
              </div>
              <div className="warning">
                <img src={this.state.cross} alt="cancel"></img>
                <div style={{ marginLeft: "10px" }}>Symbols</div>
              </div>
            </div>
            <div className="pass-strength">
              <div className="line"></div>
              <div className="strength">{this.state.passstate}</div>
            </div>
            <input
              required
              className="input-fields"
              name="confpass"
              value={this.state.confpass}
              onChange={(e) => this.handleChange(e)}
              type="password"
              placeholder="Confirm Password"
            ></input>
            <label className="phone">Phone Number</label>
            <div>
              <input
                required
                style={{ width: "20%", borderRight: "1px solid white" }}
                name="phoneext"
                value={this.state.phoneext}
                onChange={(e) => this.handleChange(e)}
                placeholder="+1"
                className="input-fields"
                type="tel"
              ></input>
              <input
                required
                style={{ width: "80%" }}
                className="input-fields"
                type="tel"
                name="phone"
                value={this.state.phone}
                onChange={(e) => this.handleChange(e)}
                placeholder="e.g. 1324568974555"
              ></input>
            </div>
            <select
              className="input-fields"
              id="pet-select"
              name="timezone"
              value={this.state.timezone}
              onChange={(e) => this.handleChange(e)}
            >
              <option value="0">Your preferred time zone </option>
              <option value="+5">(GMT+5) Africa/Abidjan </option>
              <option value="-5">(GMT-5) Africa/Accra </option>
              <option value="0">(GMT0) Africa/Bamako </option>
              <option value="+2">(GMT+2) Africa/Banjul </option>
              <option value="+8">(GMT+8) Africa/Bissau </option>
              <option value="-8">(GMT-8) Africa/Casablanca </option>
            </select>
            <label className="phone">Date of Birth</label>
            <div className="dob-sec">
              <select
                className="dob"
                name="day"
                value={this.state.day}
                onChange={(e) => this.handleChange(e)}
              >
                <option value="0">Day</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <select
                className="dob"
                name="month"
                value={this.state.month}
                onChange={(e) => this.handleChange(e)}
              >
                <option value="0">Month</option>
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">Mar</option>
                <option value="4">Apr</option>
                <option value="5">May</option>
                <option value="6">Jun</option>
                <option value="7">Jul</option>
                <option value="8">Aug</option>
                <option value="9">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </select>
              <select
                className="dob"
                name="year"
                value={this.state.year}
                onChange={(e) => this.handleChange(e)}
              >
                <option value="">Years</option>
                <option value="1920">1920</option>
                <option value="1921">1921</option>
                <option value="1922">1922</option>
                <option value="1923">1923</option>
                <option value="1924">1924</option>
                <option value="1925">1925</option>
                <option value="1926">1926</option>
                <option value="1927">1927</option>
                <option value="1928">1928</option>
                <option value="1929">1929</option>
                <option value="1930">1930</option>
                <option value="1931">1931</option>
                <option value="1932">1932</option>
                <option value="1933">1933</option>
                <option value="1934">1934</option>
                <option value="1935">1935</option>
                <option value="1936">1936</option>
                <option value="1937">1937</option>
                <option value="1938">1938</option>
                <option value="1939">1939</option>
                <option value="1940">1940</option>
                <option value="1941">1941</option>
                <option value="1942">1942</option>
                <option value="1943">1943</option>
                <option value="1944">1944</option>
                <option value="1945">1945</option>
                <option value="1946">1946</option>
                <option value="1947">1947</option>
                <option value="1948">1948</option>
                <option value="1949">1949</option>
                <option value="1950">1950</option>
                <option value="1951">1951</option>
                <option value="1952">1952</option>
                <option value="1953">1953</option>
                <option value="1954">1954</option>
                <option value="1955">1955</option>
                <option value="1956">1956</option>
                <option value="1957">1957</option>
                <option value="1958">1958</option>
                <option value="1959">1959</option>
                <option value="1960">1960</option>
                <option value="1961">1961</option>
                <option value="1962">1962</option>
                <option value="1963">1963</option>
                <option value="1964">1964</option>
                <option value="1965">1965</option>
                <option value="1966">1966</option>
                <option value="1967">1967</option>
                <option value="1968">1968</option>
                <option value="1969">1969</option>
                <option value="1970">1970</option>
                <option value="1971">1971</option>
                <option value="1972">1972</option>
                <option value="1973">1973</option>
                <option value="1974">1974</option>
                <option value="1975">1975</option>
                <option value="1976">1976</option>
                <option value="1977">1977</option>
                <option value="1978">1978</option>
                <option value="1979">1979</option>
                <option value="1980">1980</option>
                <option value="1981">1981</option>
                <option value="1982">1982</option>
                <option value="1983">1983</option>
                <option value="1984">1984</option>
                <option value="1985">1985</option>
                <option value="1986">1986</option>
                <option value="1987">1987</option>
                <option value="1988">1988</option>
                <option value="1989">1989</option>
                <option value="1990">1990</option>
                <option value="1991">1991</option>
                <option value="1992">1992</option>
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2000">2001</option>
                <option value="2000">2002</option>
                <option value="2000">2003</option>
              </select>
            </div>
            <div className="captcha">
              <input
                style={{ width: "60%", backgroundColor: "white" }}
                className="input-fields"
              ></input>
              <div
                style={{ width: "35%", display: "flex", alignItems: "center" }}
                className="captcha-code"
              >
                Captcha code
              </div>
            </div>
            <div className="check-policy">
              <input
                className="checkbox"
                name="term"
                type="checkbox"
                onChange={(e) => this.handleChange2(e)}
              ></input>
              <div className="checkbox-label">
                Click to accept Terms and Conditions and Privacy Policy.
              </div>
            </div>
            <div className="check-policy">
              <input
                className="checkbox"
                name="eight"
                type="checkbox"
                onChange={(e) => this.handleChange2(e)}
              ></input>
              <div className="checkbox-label">
                I certify that I am at least 18 years of age and don't already
                have another GameHub account.
              </div>
            </div>
            <button
              className="input-fields"
              onClick={(e) => this.handlesubmit(e)}
              style={{
                marginTop: "50px",
                backgroundColor: "#F69204",
                fontFamily: "Arial",
                fontSize: "large",
                fontWeight: "600",
              }}
              disabled={this.state.btnstate}
            >
              JOIN NOW
            </button>
          </form>
        </div>
      </div>
    );
  }
}
