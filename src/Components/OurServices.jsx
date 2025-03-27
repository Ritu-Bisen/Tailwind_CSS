import React from 'react'
import mt from '../assets/Pictures/martimage.jpeg'
import gy from '../assets/Pictures/gymimage.jpeg'

const OurServices = () => {
    const cartitems=[
        {
          id:1,
          logo:mt,
          title:'Supermarket',
          text:'Explore a variety of fresh, high-quality grocery items at our store. We take pride in providing a comprehensive selection to fulfill all your daily needs.',
          offer:'Upto 90% OFF',

        },
        {
            id:2,
            logo:gy,
            title:'Fitness Training',
            text:'Transform your fitness journey with our gym services, designed to help you achieve your health goals through expert guidance and top facilities.',
            offer:'Upto 75% OFF',
  
          },
          {
            id:3,
            logo:mt,
            title:'Personal Grooming',
            text:'Our luxurious salon service enhance your beauty and well-being. Enjoy a range of treatments to help you look and feel your best.',
            offer:'Upto 75% OFF',
  
          },
          {
            id:4,
            logo:gy,
            title:'Restaurant',
            text:'Explore our delicious food, restaurant, and sweet offerings. Whether youre a food lover or a dessert enthusiast, we have something special for everyone!.',
            offer:'Flat 25% OFF',
  
          },
    ]
  return (
    <div className='  h-screen w-screen  bg-black text-white'>
      <div className='flex flex-col items-center justify-center text-center'>
        <h1 className='text-5xl font-bold'>Our Services</h1>
        <div className='h-1 w-25  bg-red-500 rounded-full'/>
        <p>Experience the premium services under one roof with exclusive membership benefits and amazing discounts.</p>
      </div>
      <div className='relative grid grid-cols-1 md:grid-cols-2 gap-20 mx-auto pt-5   max-w-7xl'>
        {
            cartitems.map(({id,logo,title,text,offer})=>(
                <div className= ' h-[300px] w-[600px] flex flex-col items-center justify-center ' key={id}>
                      <img className='absolute object-cover  rounded-tl-[50px] rounded-br-[50px] w-[600px] h-[300px] shadow-2xl  shadow-red-600   opacity-30 ' src={logo}></img> 
                       
                       
                        <div className='absolute p-8 z-50 flex flex-col justify-center items-center text-center'>
                            <div className='text-xl  font-bold'>{title}</div>
                            <div className='h-1 w-15 bg-red-500 rounded-full'/>
                            <div className='text-sm mt-3'>{text}</div>
                            
                            <h1 className='mt-4 font-bold p-1 bg-black rounded-full '>{offer}</h1>
                           
                            <button className='mt-4 hover:text-red-500'>Learn More</button>
                        </div>
                            
                       
                </div>
            ))
        }
      </div>
      

    </div>
  )
}


export default OurServices
