import React from "react";
import Video from "../components/Home/Video";

const Home = () => {
  return (
    <>
      <div className="w-screen h-screen bg-red-950 fixed">
        <Video />
      </div>
      <div className="w-full h-full relative"></div>
    </>
  );
};

export default Home;
