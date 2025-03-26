import React from 'react'
import vc from '../assets/Pictures/video.mp4'

const NewVideo = () => {
  return (
    <div className='relative'>
        
       <video className='h-full w-full overflow-hidden' src={vc} autoPlay loop muted />
       
    </div>
  )
}

export default NewVideo
