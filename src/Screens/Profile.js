import React, { useState, useEffect } from "react";
// import profilepicture from "../Images/random-user-test.png";
import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";
import tiktok from "../Images/tik-tok.png";
import twitter from "../Images/twitter.png";
// import fortnite from "../Images/fortnite.jpg";
// import Timer from "react-compound-timer";
import axios from "axios";
// import HeroFade from '../Components/ProfileComp/HeroFade'

function Profile() {
  const [textUnderline, setTextUnderline] = useState("Overview");
  const [textUnderlined, setTextUnderlined] = useState("Fortnite");
  const [data, setdata] = useState([]);
  const [gamedata, setgamedata] = useState([]);
  const [sec, setsec] = useState(0);
  // eslint-disable-next-line
  const [min, setmin] = useState(0);
  const [hour, sethour] = useState(0);
  const [day, setday] = useState(0);

  const [gamestate, setgamestate] = useState({
    id: 1,
    name: "newtest",
    game_title: "FIFA 21",
    game_image: "https://gamehubx.com/media/games/fifa21n.png",
    tournament_entered: 1,
    total_earnings: 0,
    last_updated: "2021-06-19T10:19:58.918560Z",
    created: "2021-06-19T10:19:58.918585Z",
    kills: 5,
    game_played: 5,
    user: 7,
    game: 4,
  });

  // useEffect(async () => {
  //   await axios
  //     .get("https://gamehubx.com/api/v1/user-profile/7/")
  //     .then((res) => {
  //       setdata(res.data);
  //       setgamedata(res.data.overview);
  //       // console.log("this is my data and overview", data);
  //       // console.log("this is my data and overview", gamedata);
  //       var dt1 = new Date(data.last_login);
  //       console.log("date coming from data on load", dt1.toLocaleDateString());
  //       var dt2 = new Date();

  //       var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  //       diff /= 60;
  //       setmin(Math.abs(Math.round(diff)));
  //       console.log("diff in minutes", Math.abs(Math.round(diff)));

  //       var diff2 = (dt2.getTime() - dt1.getTime()) / 1000;
  //       diff2 /= 60 * 60;
  //       console.log("diff in hours", Math.abs(Math.round(diff2)));
  //       sethour(Math.abs(Math.round(diff2)));
  //       console.log("diff in days", Math.abs(Math.floor(diff2 / 24)));
  //       setday(Math.abs(Math.floor(diff2 / 24)));
  //       setsec(hour * 60);
  //     });
  // }, []);

  useEffect(() => {
   const callAPI = async () => {
      await axios
        .get("https://gamehubx.com/api/v1/user-profile/7/")
        .then((res) => {
          setdata(res.data);
          setgamedata(res.data.overview);
          // console.log("this is my data and overview", data);
          // console.log("this is my data and overview", gamedata);
          var dt1 = new Date(data.last_login);
          console.log("date coming from data on load", dt1.toLocaleDateString());
          var dt2 = new Date();
  
          var diff = (dt2.getTime() - dt1.getTime()) / 1000;
          diff /= 60;
          setmin(Math.abs(Math.round(diff)));
          console.log("diff in minutes", Math.abs(Math.round(diff)));
  
          var diff2 = (dt2.getTime() - dt1.getTime()) / 1000;
          diff2 /= 60 * 60;
          console.log("diff in hours", Math.abs(Math.round(diff2)));
          sethour(Math.abs(Math.round(diff2)));
          console.log("diff in days", Math.abs(Math.floor(diff2 / 24)));
          setday(Math.abs(Math.floor(diff2 / 24)));
          setsec(hour * 60);
        });
    }
    callAPI()
  })

  function changestate(data) {
    console.log("change state function");
    setgamestate(data);
  }

  // function getsec(a) {
  //   var myDate = new Date(a); // a is start_on
  //   console.log("cross check", myDate.toLocaleTimeString());
  //   var date = new Date(); // current date
  //   var dou2 = myDate.getTime() - date.getTime();
  //   var newdate = new Date(dou2);

  //   // var diff = (date.getTime() - myDate.getTime()) / 1000;
  //   // diff /= 60 * 60;
  //   // console.log("diff in hours", Math.abs(Math.round(diff)));

  //   return dou2;
  // }

  return (
    
    <div className="flex flex-col bg-darkGray w-full">
      <div className="flex justify-center md:justify-start md:w-full">
        <img
          src={data.image}
          alt=""
          className="rounded-sm h-1/3 w-1/3 md:h-48 md:w-48 -ml-20 md:ml-11 -mt-9 z-20"
        />
        <div className="md:flex md:flex-row md:w-full md:justify-between md:self-center">
          <div className="ml-7 flex flex-col -mr-16 md:mt-4">
            <h2 className="text-white text-2xl font-semibold md:text-6xl">
              {data.username}
            </h2>
            <p className="text-xs text-textGray md:text-base">
              {sec < 60 && <p> Last Login {sec} seconds ago </p>}
              {sec > 60 && hour < 24 && <p> Last Login {hour} hours ago </p>}
              {hour > 24 && day <= 1 && <p> Last Login {day} day ago </p>}
              {day > 1 && <p> Last Login {day} days ago </p>}
            </p>
            <div className="flex w-full mt-2 md:hidden">
              <img src={facebook} alt="" className="h-3 w-3 mr-2" />
              <img src={instagram} alt="" className="h-3 w-3 mr-2" />
              <img src={tiktok} alt="" className="h-3 w-3 mr-2" />
              <img src={twitter} alt="" className="h-3 w-3 mr-2" />
            </div>
          </div>
          <div className="hidden md:block md:text-white md:self-center">
            <div className="flex w-full mt-2 mr-20">
              <img src={facebook} alt="" className="h-6 w-6 mr-2" />
              <img src={instagram} alt="" className="h-6 w-6 mr-2" />
              <img src={tiktok} alt="" className="h-6 w-6 mr-2" />
              <img src={twitter} alt="" className="h-6 w-6 mr-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:bg-bodySection md:pb-11 md:mt-4">
        <div className="flex mx-8 mt-10 font-thin ">
          <h4
            className={
              textUnderline === "Overview"
                ? "mr-5 border-b-2 border-darkOrange text-white rounded-b-sm z-20 cursor-pointer md:text-xl md:pb-2"
                : "mr-5  text-white cursor-pointer md:text-xl md:pb-2"
            }
            onClick={() => {
              setTextUnderline("Overview");
            }}
          >
            Overview
          </h4>
          <h4
            className={
              textUnderline === "Tournaments"
                ? "border-b-2 border-darkOrange text-white rounded-b-sm z-20 cursor-pointer md:text-xl md:pb-2"
                : "text-white cursor-pointer md:text-xl md:pb-2"
            }
            onClick={() => {
              setTextUnderline("Tournaments");
            }}
          >
            Tournaments
          </h4>
        </div>
        <div className="h-0.5 -mt-0.5 mx-8 bg-scrollCol rounded-l-full rounded-r-full"></div>
        <h2 className="text-white text-2xl font-semibold ml-10 mt-7">
          Game Statistics
        </h2>
        <p className="text-white text-xs font-thin ml-10">
          Player game specific statistics
        </p>
        <div className="flex mx-8 mt-7">
          {/* my map starting of game title */}
          {gamedata.map((ent) => {
            return (
              <h4
                className={
                  textUnderlined === ent.game_title
                    ? "mr-5 border-b-2 border-neonGreen text-white rounded-b-sm md:pb-2 z-20 text-sm font-thin md:text-xl transition-colors ease-in duration-300 cursor-pointer"
                    : "mr-5  text-white text-sm font-thin md:text-xl md:pb-2 cursor-pointer"
                }
                onClick={() => {
                  setTextUnderlined(ent.game_title);
                  changestate(ent);
                }}
              >
                {ent.game_title}
              </h4>
            );
          })}
          {/* my map ending of game title */}
          {/* <h4
            className={
              textUnderlined === "Fortnite"
                ? "mr-5 border-b-2 border-neonGreen text-white rounded-b-sm md:pb-2 z-20 text-sm font-thin md:text-xl transition-colors ease-in duration-300 cursor-pointer"
                : "mr-5  text-white text-sm font-thin md:text-xl md:pb-2 cursor-pointer"
            }
            onClick={() => {
              setTextUnderlined("Fortnite");
            }}
          >
            Fortnite
          </h4>
          <h4
            className={
              textUnderlined === "COD"
                ? "mr-5 border-b-2 border-neonGreen text-white rounded-b-sm z-20 md:pb-2 text-sm font-thin transition-colors md:text-xl ease-in duration-300 cursor-pointer"
                : "mr-5  text-white text-sm font-thin md:text-xl md:pb-2 cursor-pointer"
            }
            onClick={() => {
              setTextUnderlined("COD");
            }}
          >
            Call Of Duty: Warzone
          </h4>
          <h4
            className={
              textUnderlined === "Tom"
                ? "border-b-2 border-neonGreen text-white md:text-xl md:pb-2 rounded-b-sm z-20 text-sm font-thin pr-3 transition-colors ease-in duration-300 cursor-pointer"
                : "text-white text-sm font-thin md:text-xl md:pb-2 cursor-pointer"
            }
            onClick={() => {
              setTextUnderlined("Tom");
            }}
          >
            Tom Clancy
          </h4> */}
        </div>

        <div className="h-0.5 -mt-0.5 mx-8 bg-scrollCol rounded-l-full rounded-r-full"></div>
        <div>
          {/* start of my state */}

          <div className="mx-8 flex mt-3 pb-10 md:pb-0 md:bg-darkGray md:mt-10">
            <img
              src={gamestate.game_image}
              alt=""
              // height={40}
              // width={40}
              style={{ flex: "0.25" }}
              className="h-16 w-24 md:h-52 md:w-52 mr-2 lg:h-52 lg:w-44 xl:h-80 xl:w-48"
            />

            <div
              className="flex flex-col md:justify-center"
              style={{ flex: "0.60" }}
            >
              <div className="flex justify-evenly -mr-10">
                <h1 className="text-2xl font-semibold text-darkOrange md:text-6xl">
                  {gamestate.tournament_entered}
                </h1>
                <h1 className="text-2xl font-semibold text-darkOrange md:text-6xl">
                  {gamestate.game_played}
                </h1>
                <h1 className="text-2xl font-semibold text-darkOrange md:text-6xl">
                  {gamestate.total_earnings}
                </h1>
              </div>
              <div className="flex justify-evenly -mr-7 ml-5 md:ml-0 md:-mr-5">
                <p className="font-thin text-white text-smallTen md:text-lg">
                  Tournaments Entered
                </p>
                <p className="font-thin text-white text-smallTen md:text-lg md:-ml-9">
                  Games Played
                </p>
                <p className="font-thin text-white text-smallTen md:text-lg">
                  Total Earnings
                </p>
              </div>
            </div>
          </div>

          {/* end of my state */}
          {/* <div className="mx-8 flex mt-3 pb-10 md:pb-0 md:bg-darkGray md:mt-10">
            <img
              src={fortnite}
              alt=""
              height={40}
              width={40}
              style={{ flex: "0.20" }}
            />

            <div
              className="flex flex-col md:justify-center"
              style={{ flex: "0.75" }}
            >
              <div className="flex justify-evenly -mr-10">
                <h1 className="text-2xl font-semibold text-darkOrange md:text-6xl">
                  05
                </h1>
                <h1 className="text-2xl font-semibold text-darkOrange md:text-6xl">
                  05
                </h1>
                <h1 className="text-2xl font-semibold text-darkOrange md:text-6xl">
                  05
                </h1>
              </div>
              <div className="flex justify-evenly -mr-5">
                <p className="font-thin text-white text-smallTen md:text-lg">
                  Tournaments Entered
                </p>
                <p className="font-thin text-white text-smallTen md:text-lg md:-ml-9">
                  Games Played
                </p>
                <p className="font-thin text-white text-smallTen md:text-lg">
                  Total Earnings
                </p>
              </div>
            </div>
          </div> */}
        </div>
        {/* ending of state data */}
      </div>
    </div>
  );
}

export default Profile;
