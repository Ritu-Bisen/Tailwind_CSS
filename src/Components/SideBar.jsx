import React from 'react'
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import ins from '../assets/Pictures/insta.png'
import ws from '../assets/Pictures/whatsapp.png'
import yt from '../assets/Pictures/youtube.png'
import tw from '../assets/Pictures/twitter.png'
import fb from '../assets/Pictures/facebook.png'

const SideBar = () => {
  return (
    <div className=''>
      <h1 className='font-bold text-3xl'>SNBA ❤️</h1>

      <div className='bg-black  rounded-lg p-1 fixed top-1/3 right-0  translate-y-1/2'>
      <a href='https://www.facebook.com/login.php/ '
      rel='noopener noreferrer'
       target='_blank'>
       <img className='h-10 w-10 hover:scale-115' src={fb} />
      </a> 
      <img className='h-10 w-10 hover:scale-115' src={ws} />
      <img className='h-10 w-10 hover:scale-115' src={yt} />
      <img className='h-10 w-10 hover:scale-115' src={ins} />
      <img className='h-10 w-10 hover:scale-115' src={tw} />
      </div>
      <div className='fixed bottom-3 right-1/3 '>
        <button className='bg-red-300 py-1 px-2 rounded-xl hover:bg-red-700 animate-bounce '>Membership</button>
      </div>

    </div>
   
  )
}

export default SideBar
