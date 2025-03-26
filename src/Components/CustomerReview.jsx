import React from 'react'
import ra from '../assets/Pictures/rahul.jpg'
import mu from '../assets/Pictures/mukul.jpg'
import am from '../assets/Pictures/amit.jpg'
import { FaStar } from "react-icons/fa6";
import { Quote } from 'lucide-react';


const CustomerReview = () => {
    const cartitems = [
        {
            id: 1,
            logo: am,
            name: 'Amit',
            text: "The ₹99 Membership has completely transformed my lifestyle! I love having access to the gym, salon, and food court all in one place. It makes my daily routine so much more convenient.",
            member: 'Premium Member',
            qoute:<Quote size={15}/>
        },
        {
            id: 2,
            logo: mu,
            name: 'Mukul',
            text: "SNBA Lifestyle Hub is a game changer! The quality of services is top-notch, and I appreciate the focus on wellness and community. It truly feels like a home away from home.",
            member: 'Regular Member',
            qoute:<Quote size={15} />
        },
        {
            id: 3,
            logo: ra,
            name: 'Rahul',
            text: "I was skeptical about the membership at first, but it has exceeded my expectations. The variety of options available for beauty, health, and dining is incredible. I feel supported in my wellness journey!",
            member: 'Fitness Enthusiast',
            qoute:<Quote size={15}/>
        },
    ]

    return (
        <div className='text-white bg-black pt-5' >
            <div className='text-3xl font-bold text-center '>Customer Review</div>
            <div className='h-1 rounded  mx-auto w-30 bg-red-500 ' />

            <div className=' min-h-screen max-w-7xl mx-auto grid grid-cols-1 md:flex gap-15 mt-20 '>
                {
                    cartitems.map(({ id, logo, name, text, member,qoute }) => (
                        <div className='relative h-[270px] p-5 w-[550px] md:h-[350px] mx-auto shadow-lg shadow-red-500 rounded-lg' key={id}>
                            <div className='bg-red-500 rounded-full h-10 w-10 flex-col flex items-center justify-center absolute -left-0 -top-0  '> {qoute}</div>
                            <div className='text-yellow-500 flex  justify-center items-center'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></div>
                            <div className='mt-3'>{text}</div>
                            <div className='mt-5 flex items-center justify-center gap-5 '>
                                <div> <img className='shadow-red-500 shadow-2xl rounded-full h-15 w-15 ' src={logo} /></div>
                                <div>
                                    <div className='text-center font-bold'>{name}</div>
                                    <div className='text-center text-sm'>{member}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CustomerReview
