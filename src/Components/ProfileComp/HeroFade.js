import React, { useState, useEffect } from "react";
// import banner from "../../Images/Black_Ops_Cold_War.png";
import axios from "axios";

function HeroFade() {
  const [data, setdata] = useState([]);
  // useEffect(async () => {
  //   await axios
  //     .get("https://gamehubx.com/api/v1/user-profile/7/")
  //     .then((res) => {
  //       setdata(res.data);
  //     });
  // }, []);
useEffect(() => {
  const callAPI = async () => {
    await axios
      .get("https://gamehubx.com/api/v1/user-profile/7/")
      .then((res) => {
        setdata(res.data);
      });
  }
  callAPI()
}, [])
  return (
    <div className="relative w-full h-40 md:h-72">
      <img src={data.cover_image} alt="" className="w-full h-full" />
      <div className="absolute top-0 bg-black h-full w-full text-white opacity-70"></div>
      <button className="absolute top-6 right-2 text-white ring-1 ring-white rounded-none py-1 px-1 text-xs font-thin focus:outline-none md:px-4 md:py-3 md:text-base md:mr-14 md:mt-5 md:hover:bg-white md:hover:text-black transition-all ease-in duration-200">
        Upload New Image
      </button>
    </div>
  );
}

export default HeroFade;
