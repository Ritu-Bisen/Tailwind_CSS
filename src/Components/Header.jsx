import React, { useEffect, useState } from 'react'
import logo from '../assets/Pictures/snba.png'


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };

    }, [])

    return (
        <div className='max-w-7xl mx-auto flex justify-between z-20 text-white absolute mt-8 ml-5  '>

            <nav className={`top-0 left-0 fixed w-full ${isScrolled ? 'bg-black shadow-md p-4 ' : 'bg-transparent p-4'}`} >
                
                <div className=' flex  space-x-5 right-20 justify-between mt-5 ml-5' >
                    <img className='  h-12 w-30   ' src={logo} />
                    <div className='flex space-x-5 fixed right-36'>
                    <h1 className='font-bold text-xl'>Home</h1>
                    <h1 className='font-bold text-xl'>About Us</h1>
                    <h1 className='font-bold text-xl'>Membership Plan</h1>
                    <h1 className='font-bold text-xl'>Career</h1>
                    
                    
                        <button className='bg-red-500 rounded-full  p-1 font-bold  h-10'>Apply for Franchisee</button>
                    </div>


                </div>
            </nav>

        </div>
    )
}

export default Header
