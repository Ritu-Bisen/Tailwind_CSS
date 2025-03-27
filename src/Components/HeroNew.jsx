import React from 'react'
import vc from '../assets/Pictures/video.mp4'

const HeroNew = () => {
  return (
    <div className='relative '>
      <video
      muted
      autoPlay
      loop 
      src={vc} 
      className='h-screen object-cover w-screen  overflow-hidden'/>
    </div>
  )
}

export default HeroNew
