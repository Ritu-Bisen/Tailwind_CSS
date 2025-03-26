import React from 'react'

import { HiUsers } from "react-icons/hi";
import { IoHeartDislikeSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";

const CartNew = () => {

const cartitems=[
    {
        id:'1',
        logo:<HiUsers size={75}/>,
        number:'1000+',
        text:'Members',
    },
    {
        id:'2',
        logo:< IoHeartDislikeSharp size={75}/>,
        number:'15+',
        text:'Multiple Locations',
    },
    {
        id:'3',
        logo:<MdLocationOn size={75}/>,
        number:'100%',
        text:'Indian Owned',
    },
    {
        id:'4',
        logo:<GiAchievement size={75}/>,
        number:'5 Star',
        text:'Quality Commitment',
    },

]    

  return (
    <div className='bg-black text-white h-screen w-screen'>
      <div className='text-center max-w-7xl mx-auto '>
                <h1 className='text-3xl text-center font-bold '>Statistics</h1>
                <div className='w-20 h-1 bg-red-500 mx-auto'></div>
                <p className='text-center pt-5 font-semibold'>Discover how we're making a
                    difference in the community through our commitment to excellence and service.</p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto  pt-8 px-8 gap-8 '>
                {
                    cartitems.map(({id,logo,text,number})=>(
                        <div className='relative   flex flex-col justify-center hover:border-red-500 items-center group  w-[250px] h-[250px] border-2 shadow-xl  shadow-red-700 rounded-2xl rounded-bl-lg rounded-br-[25px] rounded-tl-[50px] ' key={id}>
                            {/* <img className='w-[100px] h-[100px] rounded-full shadow-lg shadow-red-500 ' src={logo}/> */}
                            <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full group-hover:bg-red-500/30 transition-all duration-300" />{/* */ } 
                            <div className='overflow-hidden hover:scale-115 duration-300  group transition-all  rounded-full shadow-xl '> {
                                logo}</div>
                            
                            <div className='mt-5 text-center '>
                            <h1 className='text-xl font-bold'>{number}</h1>
                            <h1 className='text-xl font-semibold'>{text}</h1>

                            </div>
                        </div>
                    ))
                }
            </div>
    </div>
  )
}

export default CartNew
