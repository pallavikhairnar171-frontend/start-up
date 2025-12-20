import React from 'react'
import video from "../../assets/video/12918424-uhd_3840_2160_24fps.mp4"

const Video = () => {
  return (
    <div className='h-full w-full'>
        <video className='h-full w-full object-cover' autoPlay muted loop src={video}></video>
    </div>
  )
}

export default Video