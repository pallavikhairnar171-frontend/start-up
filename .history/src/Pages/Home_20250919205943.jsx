import React from "react";
import Video from "../components/Home/Video";
import HomeTopText from "../components/Home/HomeTopText";
import HomeBottomText from "../components/Home/HomeBottomText";

const Home = () => {
  return (
    <>
      <div className="w-screen h-screen text-white fixed">
        <Video />
      </div>
      <div className="w-screen h-screen overflow-hidden relative flex flex-col justify-between">
        <HomeTopText />
        <HomeBottomText />
      </div>
    </>
  );
};

export default Home;
