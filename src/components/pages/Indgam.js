import React, { Component } from "react";

export default class Indgam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saad: "testestsest",
      data22: [],
    };
  }

  async componentDidMount() {
    console.log("loaded");
    this.setState({ data: this.props.location.state });
    var abc = [];
    abc = this.props.location.state;
    // this.setState({ saad: "test" });
    // this.setState({ data22: abc });
    // console.log("data", this.state.data22);
    // console.log("saad", this.state.saad);

    this.setState({ data22: this.props.location.state }, () => {
      console.log(this.state.data22, "data from props");
    });
  }
  render() {
    return <div></div>;
  }
}
