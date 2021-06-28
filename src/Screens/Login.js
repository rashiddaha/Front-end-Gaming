import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login';


// /icons/fb.png

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
    };
  }

  componentDidMount(){
    if(this.props.location.state != undefined){
      console.log("the data in props",this.props.location.state.data);
    }
  }

  login = async (e) => {
    e.preventDefault();
    console.log("login button", this.state.email, this.state.pass);
    await axios({
      method: "post",
      url: "https://gamehubx.com/api/v1/login/",
      headers: {},
      data: {
        email: this.state.email,
        password: this.state.pass,
      },
    })
      .then((response) => {
        //console.log(response.data);
        localStorage.setItem("token", response.data.key);
        localStorage.setItem("userdata", response.data.user_detail.id);
        localStorage.setItem("name", response.data.user_detail.name);
        //   var tok = localStorage.getItem("token");
        //   var user = localStorage.getItem("userdata");
        //   console.log("token from Storage", tok);
        //   console.log("user id from Storage", user);
        //window.open("/");
        window.location.href = "/";
      })
      .catch((error) => {
        //console.log(error.response.data.key);
        alert("credentials not correct");
      });
  };

  handleChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        console.log(this.state.email, this.state.pass);
      }
    );
  }

  responseFacebook = (response) => {
    console.log(response)
  }

  responseGoogle = async (response) => {
    console.log(response);
    console.log(this.props)
    var res = response;
    console.log("access token",res.accessToken);
    if(res !== undefined){
      console.log("in conditions")
      await axios({
        method: "post",
        url: "https://gamehubx.com/api/v1/login/google/",
        headers: {},
        data: {
          "access_token": res.accessToken,
          "code": ""
        },
      })
        .then((response) => {
          console.log(response.data.user_detail);
          // this.props.history.push({
          //   pathname: '/login',
          //   state: { data: response.data.user_detail }
          // })
        })
        .catch((error) => {
          console.log(error.response);
          alert("Couldn't Login ");
        });
    }
  }
  
  compclicked = () => { console.log("clicked")}

  render() {
    return (
      <div className="login-cont">
        <div className="login-sect">
          <div className="title">SIGN IN Test2222</div>
          <div className="subtitle">
            Not a member Yet?
            <Link
              to="/signup"
              style={{
                color: "#F69204",
                marginLeft: "5px",
                textDecoration: "none",
              }}
            >
              Join Free!
            </Link>
          </div>

          {/* <div className="social-login-fb">    
          <FacebookLogin2
            appId="398511088167261"
            autoLoad={false}
            callback={this.responseFacebook}
            onClick={this.compclicked}
            cssClass="title"
            textButton="Continue with Facebook"
            icon={fbicon}
            />
          </div> */}

          <FacebookLogin
            appId="398511088167261"
            autoLoad={false}
            callback={this.responseFacebook}
            onClick={this.compclicked}
            render={renderProps => (
                <button className="social-login-fb"  onClick={renderProps.onClick}>
                  
            <img src="/icons/fb.png" height="20px" alt="fb"></img>
            <div className="title">Continue with Facebook</div>
          
                </button>
              )}
            />
            {/* <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button> */}
            <GoogleLogin
            clientId="836636335348-erahbhm5b6b98reaotutopvldc606be6.apps.googleusercontent.com"
            render={renderProps => (
            <button className="social-login-google"  style={{ backgroundColor: "white" }} 
            onClick={renderProps.onClick} >
            <img src="/icons/google.png" height="20px" alt="fb"></img>
            <div className="title">Continue with Google Test</div>
                </button>     
            )}
            buttonText="Login"
            onSuccess={this.responseGoogle}
            //onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
            />
          {/* <div className="social-login-fb">
            <img src="/icons/fb.png" height="20px" alt="fb"></img>
            <div className="title">Continue with Facebook</div>
          </div> */}
          {/* <div
            className="social-login-google"
            style={{ backgroundColor: "white" }}
          >
            <img src="/icons/google.png" height="20px" alt="fb"></img>
            <div className="title">Continue with Google</div>
          </div> */}
          <form className="form-sect">
            <label className="label">Email Address</label>
            <input
              className="input-fields"
              name="email"
              required
              type="email"
              onChange={(e) => this.handleChange(e)}
            ></input>
            <label className="label">Password</label>
            <input
              className="input-fields"
              name="pass"
              required
              type="password"
              onChange={(e) => this.handleChange(e)}
            ></input>
            <div className="forgot">Forgot Password?</div>
            <div className="check-policy">
              <input className="checkbox" type="checkbox"></input>
              <div className="checkbox-label">Remember me on this Device</div>
            </div>
            <button
              className="input-fields"
              onClick={(e) => this.login(e)}
              style={{
                marginTop: "50px",
                backgroundColor: "#F69204",
                fontFamily: "Arial",
                fontSize: "large",
                fontWeight: "600",
                border: "none",
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}
