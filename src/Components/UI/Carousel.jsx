import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Carousel = ({children:slides,autoSlide=false
    ,autoslideInterval=3000}) => {
    const [curr, setCurr] = useState(0)
const prev=()=>setCurr((curr)=>(curr === 0?slides.length-1:curr -1))
const next=()=>setCurr((curr)=>(curr === slides.length- 1 ? 0:curr + 1))
// useEffect(()=>{
//    if(!autoSlide)return

// },[])
  return (
    <div className='overflow-hidden relative'>
      <div className='flex transition-transform ease-out duration-500' style={{transform: `translateX(-${curr*100}%)`}}>{slides}</div>
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button onClick={prev} className='bg-white rounded-full shadow p-1 hover:bg-white'>
            <ChevronLeft size={25}/>
        </button>
        <button onClick={next} className='bg-white rounded-full  shadow p-1 hover:bg-white'>
        <ChevronRight size={25}/>
        </button>
      </div>
      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
            {
                slides.map((_,i)=>(
                    <div className={`transition-all w-3 h-3 bg-white rounded-full
                        ${curr === i?"p-2":"bg-opacity-50"}`}/>
                ))
            }

        </div>

        
      </div>
    </div>
  )
}

export default Carousel
