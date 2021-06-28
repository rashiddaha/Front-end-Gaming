import React, { useEffect, useState } from 'react'
import './IndividualGame.css'
import TournamentCard from "../Components/HomeComp/TournamentCard";
import axios from "axios";
import { useParams } from 'react-router-dom';
//import img from "../bg/game.jpg"


function IndividualGame({width,id}) {
    const [tourdata, settourdata] = useState([]);
    const [title, settitle] = useState("game");
    const [img, setimg] = useState("");
    const params = useParams()
    
    //console.log(params)

    useEffect(()=>{
      settitle(params.game);
      const callAPI = async () => {
        await axios.get("https://gamehubx.com/api/v1/tournament/?game="+params.ind).then((res) => {
          settourdata(res.data);
          //console.log("data coming", tourdata);
        });
        
      }

      const callAPI2 = async () => {
        await axios.get("https://gamehubx.com/api/v1/game/"+params.ind+"/").then((res) => {
          settitle(res.data.title);
          setimg(res.data.cover_image)
          //console.log("data coming", tourdata);
        });
      }
      callAPI();
      callAPI2();
    },[params])
    
    return (<>
        <div className='indi-game'>
            <div className='bg-image'>
                <img src={img} style={{objectFit:'cover'}} className='bg-image' alt='logo'></img>
                <div className='title'>{title} tournaments</div>
            </div>
            <div className='bottom-sec'>
                <div className='subtitle'>upcoming TOURNAMENTS</div>
                       {tourdata.map((ent) => {
          return <TournamentCard width={width} data={ent}></TournamentCard>;
        })}
            </div>
        </div>
    </>)
}

export default IndividualGame
