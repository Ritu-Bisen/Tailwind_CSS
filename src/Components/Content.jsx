import React from 'react'
import food from '../assets/Pictures/food.jpg'
import gym from '../assets/Pictures/gym.jpg'
import mart from '../assets/Pictures/mart.jpg'
import salon from '../assets/Pictures/salon.jpg'
import np from '../assets/Pictures/new.jpeg'



const Content = () => {
  const cartImage = [
    {
      id: '1',
      img: np,
      title: 'AARNA MART',
      offer: 'UPTO 90%',
      click: '/mart'
    },
    {
      id: '2',
      img: np,
      title: 'AARNA UNISEX SALON',
      offer: 'UPTO 75%',
      click: '/salon'
    },
    {
      id: '3',
      img: np,
      title: 'AARNA GYM',
      offer: 'UPTO 75% ',
      click: '/gym'
    },
    {
      id: '4',
      img: np,
      title: 'AARNA FOOD COURT',
      offer: 'UPTO 25%',
      click: '/resturent'
    },
  ]
  return (
    <div className=' bg-black text-white min-h-screen w-full  z-10 '>
      <div className='text-center py-10  '>
        <h1 className='text-4xl  font-bold'>Become a Partner with </h1>
        <h1 className='text-4xl font-bold text-red-500'>SNBA Consumers</h1>
        <button className='h-10 curx w-30 rounded-xl mt-3  bg-red-500'>Apply Now</button>
      </div>
      <div className=' relative lg:flex-row lg:grid-cols-4  md:flex-col grid-cols-4 grid md:grid-cols-1 gap-8 max-w-7xl mx-auto rounded-xl  mt-9  '>
        {
          cartImage.map((cart, index) => (
           <div className='group relative hover:scale-110 duration-200' key={index}>
             <a
              href={cart.click}
            >
              <div className='top-5 -skew-x-15 py-1 px-2 rounded-lg  transform absolute mx-auto  bg-red-500 ' >{cart.title}</div>
              <div className='absolute bottom-3  py-1 px-2 rounded-lg  -skew-x-12 bg-red-500'>{cart.offer} </div>
              <img className='object-cover  rounded-tl-[50px] rounded-br-[50px] w-[500px] h-[250px]  border-white border-2 shadow-lg shadow-red-500 ' src={cart.img} />

            </a>
           </div>
          ))
        }
      </div>

    </div>
  )
}

export default Content
