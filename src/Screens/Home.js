import React, { useEffect, useState } from "react";
import "./Home.css";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Corousal from "../Components/HomeComp/Corousal";
import TournamentCard from "../Components/HomeComp/TournamentCard";
import StatsCard from "../Components/HomeComp/StatsCard";
import WinnerCard from "../Components/HomeComp/WinnerCard";
import NewsCard from "../Components/HomeComp/NewsCard";
import { Link } from "react-router-dom";
import axios from "axios";

function Home({ width }) {
  // eslint-disable-next-line
  Array.prototype.move = function (old_index, new_index) {
    if (new_index >= this.length) {
      var k = new_index - this.length;
      while (k-- + 1) {
        this.push(undefined);
      }
    }
    this.splice(new_index, 0, this.splice(old_index, 1)[0]);
  };



  const [items, setitems] = useState(null);
  const [nav, setnav] = useState(false);
  const [gamedata, setdata] = useState([]);
  const [tourdata, settourdata] = useState([]);
  const [statdata, setstatdata] = useState([]);
  const [champdata, setchampdata] = useState([]);
  

  useEffect(() => {
    const callAPI = async () => {
      await axios.get("https://gamehubx.com/api/v1/game/").then((res) => {
        setdata(res.data);
        //   console.log("data coming", gamedata);
      });
  
      await axios
        .get("https://gamehubx.com/api/v1/tournament/?featured=1")
        .then((res) => {
          settourdata(res.data);
          //console.log("data coming", tourdata);
        });
  
      await axios.get("https://gamehubx.com/api/v1/statistics/").then((res) => {
        setstatdata(res.data);
        //console.log("data coming", statdata);
      });
  
      await axios
        .get("https://gamehubx.com/api/v1/player-of-week/")
        .then((res) => {
          // console.log("data coming", champdata);
          
          setchampdata(res.data);
        });
    }
    callAPI()
  }, [])
  // eslint-disable-next-line
  function arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
  }

  useEffect(() => {
    width >= 800 ? setitems(5) : setitems(3);
    width >= 800 ? setnav(true) : setnav(false);
  }, [width]);

  // console.log(items);
  const options = {
    center:false,
    items: items,
    dotsEach: true,
    margin: 3,
    loop:false,
    rewind: true,
    autoplay: false,
    nav: nav,
    navText: [
      '<i class="fa fa-2x fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-2x fa-angle-right" aria-hidden="true"></i>',
    ],
  };

  return (
    <div className="home-cont">
      <div className="main-cont">
        <video className="video-cont" src='/Video/herovid.mp4'  autoPlay loop muted ></video>
        <div className="find">
          FIND YOUR <br></br>PERFECT TOURNAMENT
        </div>
        <button className="play">Play</button>
      </div>
      <div className="games-corousal">
        <div className="game-title">GAMES</div>
        <div className="select">
          Select a game and choose an available tournament
        </div>
        <OwlCarousel options={options}>
          {gamedata.map((ent) => {
            return (
              <div>
                <Corousal data={ent}></Corousal>
              </div>
            );
          })}
          {/* <div>
            <Corousal></Corousal>
          </div> */}
        </OwlCarousel>
      </div>
      <div className="featured-tournament">
        <div className="title">FEATURED TOURNAMENTS</div>
        <div className="hot">Hot and trending tournaments</div>
        <div className="card-grid">
          {tourdata.length > 0 &&
            tourdata.map((ent) => {
              return <TournamentCard width={width} data={ent}></TournamentCard>;
            })}

          {/* <TournamentCard width={width}></TournamentCard>
          <TournamentCard width={width}></TournamentCard> */}
        </div>
        <Link to="/tournament">
          <button className="view-btn">view all</button>
        </Link>
      </div>
      <div className="stats-cont">
        <div className="title">statistics</div>
        <div className="card-flex">
          <StatsCard
            img="/icons/champions_crowned.png"
            number={statdata.champion_crowned}
            title="CHAMPIONS CROWNED"
          ></StatsCard>
          <StatsCard
            img="/icons/winnings_paid.png"
            number={"$" + statdata.wining_paid}
            title="WINNINGS PAID"
          ></StatsCard>
          <StatsCard
            img="/icons/active_tournaments.png"
            number={statdata.active_tournament}
            title="ACTIVE TOURNAMENTS"
          ></StatsCard>
        </div>
      </div>
      <div className="champ-cont">
        <div className="title">CHAMPIONS OF THE WEEK</div>
        <div className="winner-cont">
          {/* {champdata.map((ent) => {
            return (
              <>
                {ent.rank == "third" && (
                  <div className="corner-cards">
                    <WinnerCard width={width} data={ent}></WinnerCard>
                  </div>
                )}
                {ent.rank == "first" && (
                  <div className="center-card">
                    <WinnerCard
                      width={width}
                      yellow={true}
                      data={ent}
                    ></WinnerCard>
                  </div>
                )}
                {ent.rank == "second" && (
                  <div className="corner-cards">
                    <WinnerCard
                      width={width}
                      pale={true}
                      data={ent}
                    ></WinnerCard>
                  </div>
                )}
              </>
            );
          })} */}
          <div className="corner-cards" data={champdata[0]}>
              <WinnerCard width={width}></WinnerCard>
            </div>
            <div className="center-card" data={champdata[2]}>
              <WinnerCard width={width} yellow={true}></WinnerCard>
            </div>
            <div className="corner-cards">
              <WinnerCard width={width} pale={true} data={champdata[1]} ></WinnerCard>
            </div>
            
        </div>
      </div>
      <div className="game-news">
        <div className="title">GAMEHUB NEWS</div>
        <div className="game-news-cards">
          <NewsCard></NewsCard>
          <NewsCard></NewsCard>
          <NewsCard></NewsCard>
        </div>
      </div>
    </div>
  );
}

export default Home;
