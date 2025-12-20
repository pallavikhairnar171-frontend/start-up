import React from 'react'
import video from "../../assets/video/12918424-uhd_3840_2160_24fps.mp4"

const Video = () => {
  const vid =`${import.meta.env.BASE_URL}video/12918424-uhd_3840_2160_24fps.mp4`
  return (
    <div className='h-full w-full'>
        <video className='h-full w-full object-cover' autoPlay muted loop src= {vid}></video>
    </div>
  )
}

export default Video