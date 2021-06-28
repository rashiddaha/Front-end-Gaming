import { Link } from "react-router-dom";
import React from "react";
import "./GameCard.css";
function GameCard({ data }) {
  function abc(a) {
    return a.replace(/\s/g, "-");
  }
  return (
    <Link to={`/${abc(data.title)}/${data.id}`}>
      <div className="game-card">
        <img className="card-img" src={data.image} alt="img"></img>
        <div className="discr">{data.title}</div>
      </div>
    </Link>
  );
}

export default GameCard;
