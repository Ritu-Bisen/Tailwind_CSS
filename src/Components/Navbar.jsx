// import React from 'react'

// const Navbar = () => {
//     return (
//         <div className=' text-white bg-red-500 justify-center w-full py-5'>
//             <div className=' flex gap-8 z-10  absolute  '>
//                 <div className='text-2xl px-1 ' >
//                         <h1>SNBA Consumer</h1>
//                     </div> 
//                 <div className='flex space-x-5   '>
//                     <h1 className='cursor-pointer hover:scale-150 duration-200'>Home</h1>
//                     <h1 className='cursor-pointer hover:scale-150 duration-200'>About Us</h1>
//                     <h1 className='cursor-pointer hover:scale-150 duration-200'>Membership Plan</h1>
//                     <h1 className='cursor-pointer hover:scale-150 duration-200'>Contact us</h1>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar

import React from 'react';

const Navbar = () => {
    return (
        <div className="w-full bg-transparent text-black flex max-w-7xl mx-auto">
            <div className="flex gap-8 text-black">
                <div className="flex space-x-5">
                    <h1 className="cursor-pointer hover:scale-110 duration-200">Home</h1>
                    <h1 className="cursor-pointer hover:scale-110 duration-200">About Us</h1>
                    <h1 className="cursor-pointer hover:scale-110 duration-200">Membership Plan</h1>
                    <h1 className="cursor-pointer hover:scale-110 duration-200">Contact Us</h1>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
