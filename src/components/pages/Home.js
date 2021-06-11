import React from "react";
import "../../App.css";
import Caro from "../Caro";
import Champ from "../Champ";
import Hero from "../Hero";
import News from "../News";

import Statistics from "../Statistics";
import Tournament from "../Tourn";

function Home() {
  return (
    <>
      <Hero />
      <Caro />
      <Tournament />
      <Statistics />
      <Champ />
      <News />
    </>
  );
}

export default Home;
