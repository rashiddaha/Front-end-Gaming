import React from "react";
import "./Corousal.css";
function Corousal({ data }) {
  //console.log("data passed as props", data);
  return (
    <div className="corousal-card">
      <img className="card-img" src={data.image} alt="img"></img>
      <div className="discr">{data.title}</div>
    </div>
  );
}

export default Corousal;
