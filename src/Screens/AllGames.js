import React, { useEffect, useState } from "react";
import "./AllGames.css";
import GameCard from "../Components/GameComp/GameCard";
import axios from "axios";

function AllGames() {
  const [gamedata, setdata] = useState([]);

  // useEffect( 
  //   async () => {
  //   await axios.get("https://gamehubx.com/api/v1/game/").then((res) => {
  //     setdata(res.data);
  //     //console.log("data coming", tourdata);
  //   });
  // }, []);

  useEffect(() => {
    const callAPI = async () => {
        await axios.get("https://gamehubx.com/api/v1/game/").then((res) => {
          setdata(res.data);
          //console.log("data coming", tourdata);
        });
      }
      callAPI()
  }, [])
  
  return (
    <div className="all-games">
      <div className="title">all games</div>
      <div className="sub-title">
        Select a game to view all of its upcoming tournaments
      </div>
      <div className="cards-sec">
        {gamedata.map((ent) => {
          return <GameCard data={ent}></GameCard>;
        })}
        {/* <GameCard></GameCard>
        <GameCard></GameCard> */}
      </div>
    </div>
  );
}

export default AllGames;
