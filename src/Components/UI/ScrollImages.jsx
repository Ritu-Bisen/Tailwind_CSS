import React from 'react'
import Carousel from './Carousel'

const ScrollImages = () => {
    const slides =[
        "https://th.bing.com/th/id/OIP.A3JisJ8N8NQFOhjah1bbhQHaEY?w=226&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://ts4.mm.bing.net/th?id=OIP.vA1AyyXVZGakpvyE2s8c6AHaEo&pid=15.1",
        "https://th.bing.com/th/id/OIP.EH7kXVbnFP7emRMZZ04UXAHaE3?w=205&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.7JIXw1Tntd9N5422jimKJQHaEK?w=316&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    ]
  return (
    <div>
      <div className='max-w-lg'>
        <Carousel>
{
    slides.map((s)=>(
        <img  src={s}/>
    ))
}
        </Carousel>
      </div>
    </div>
  )
}

export default ScrollImages
