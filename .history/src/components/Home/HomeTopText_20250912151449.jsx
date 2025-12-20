import React from "react";
import Video from "./Video";

const HomeTopText = () => {
  return (
    <div className="font-[font2] pt-5 text-center">
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[8.5vw]">Let's</div>
      <div className="text-[9.5vw] justify-center flex items-start uppercase leading-[8.5vw]">
        Start
        <div className="h-[8vw] rounded-full -mt-5 overflow-hidden">
          <Video />
        </div>
        With
      </div>
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[8.5vw]">Us</div>
    </div>
  );
};

export default HomeTopText;
