// import React from 'react'
// import { FaRegCircleCheck } from "react-icons/fa6";
// import { FaUsers } from "react-icons/fa";
// import { BsLightningChargeFill } from "react-icons/bs";
// import { IoFlaskSharp } from "react-icons/io5";

// const WhyChooseUs = () => {
//     const content = [
//         {
//             id: 1,
//             logo: <FaRegCircleCheck size={35} />,
//             title: 'Diverse Range of Services',
//             text: 'From supermarkets and restaurants to salons and gyms,Aarna Groups Brings multiple essentail services under one roof, ensuring convenience and quality in every experience.'
//         },
//         {
//             id: 2,
//             logo: <FaUsers size={35} />,
//             title: 'Customer-Centric Approach',
//             text: 'From supermarkets and restaurants to salons and gyms,Aarna Groups Brings multiple essentail services under one roof, ensuring convenience and quality in every experience.'
//         },
//         {
//             id: 3,
//             logo: <BsLightningChargeFill size={35} />,
//             title: 'Unmatched Quality & customer Satisfaction',
//             text: 'From supermarkets and restaurants to salons and gyms,Aarna Groups Brings multiple essentail services under one roof, ensuring convenience and quality in every experience.'
//         },
//         {
//             id: 4,
//             logo: <IoFlaskSharp size={35} />,
//             title: 'Exclusive Discounts & Membership Benefits',
//             text: 'From supermarkets and restaurants to salons and gyms,Aarna Groups Brings multiple essentail services under one roof, ensuring convenience and quality in every experience.'
//         },
//     ]
  
      

//     return (
//         <div className=' bg-black h-screen text-white '>
//             <h1 className='pt-8 text-5xl font-bold text-center'>Why Choose Us</h1>
//             <div className='h-1 rounded  mx-auto w-40 bg-red-500'/>

//             <div className='  mt-20  grid grid-cols-2 max-w-7xl mx-auto  gap-8 rounded-lg   '>
//                 {
//                     content.map(({text,title,logo,id})=>(
//                         const topLeftStyle = 
//       id === 1 ?"rounded-tl-[85px] rounded-bl-none rounded-tr-none rounded-br-none":" ";
//       const topRightStyles =
//       id === 2 ?"rounded-tr-[85px] rounded-bl-none rounded-tl-none rounded-br-none":" ";
//       const bottomLeftStyles =
//       id === 3 ?"rounded-bl-[85px] rounded-tl-none rounded-tr-none rounded-br-none":" ";
//       const bottomRightStyles =
//       id === 4 ?" rounded-br-[85px] rounded-tl-none rounded-tr-none rounded-bl-none":" ";
//                         <div className='h-[200px] w-[350px] flex  pt-5 shadow-xl  shadow-red-500 ${topLeftStyle} ${topRightStyles} ${bottomLeftStyles} ${bottomRightStyles}  ' key={id}>
//                              <div className= 'rounded-lg items-center justify-center flex text-black h-10 w-10 bg-red-500 m-3'>{logo}</div>
//                             <div className='mt-4 ml-4'>
//                             <div className='font-bold text-xl'>{title}</div>
//                             <div className='text-sm mt-2'>{text}</div>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

// export default WhyChooseUs


import React from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import { IoFlaskSharp } from "react-icons/io5";

const WhyChooseUs = () => {
    const content = [
        {
            id: 1,
            logo: <FaRegCircleCheck size={35} />,
            title: 'Diverse Range of Services',
            text: 'We offer a variety of services, including supermarkets, restaurants, salons, and gyms, all under one roof for maximum convenience and quality.'
        },
        {
            id: 2,
            logo: <FaUsers size={35} />,
            title: 'Customer-Centric Approach',
            text: 'Our services are designed with the customer in mind, ensuring satisfaction and a seamless experience at every touchpoint.'
        },
        {
            id: 3,
            logo: <BsLightningChargeFill size={35} />,
            title: 'Unmatched Quality & Satisfaction',
            text: 'We maintain high standards in all our offerings, delivering top-quality services with a focus on excellence and reliability.'
        },
        {
            id: 4,
            logo: <IoFlaskSharp size={35} />,
            title: 'Exclusive Discounts & Membership Benefits',
            text: 'Enjoy special discounts and membership perks, making your experience more rewarding and cost-effective.'
        },
    ];

    return (
        <div className="bg-black h-screen text-white relative overflow-hidden py-5 ">
            <h1 className="pt-8 text-5xl font-bold text-center">Why Choose Us</h1>
            <div className="h-1 rounded mx-auto w-40 bg-red-500" />

            <div className="mt-20 grid grid-cols-2 gap-8 space-y-5 max-w-4xl mx-auto object-contain rounded-lg p-5">
                {content.map(({ text, title, logo, id }) => {
                    const topLeftStyle = id === 1 ? "rounded-tl-[85px]" : "";
                    const topRightStyles = id === 2 ? "rounded-tr-[85px]" : "";
                    const bottomLeftStyles = id === 3 ? "rounded-bl-[85px]" : "";
                    const bottomRightStyles = id === 4 ? "rounded-br-[85px]" : "";

                    return (
                        <div 
                            key={id} 
                            className={`border-2 h-[200px] w-[400px] flex  shadow-xl shadow-red-500 ${topLeftStyle} ${topRightStyles} ${bottomLeftStyles} ${bottomRightStyles}`}
                        >
                            <div className="mt-5 ml-7 rounded-lg items-center justify-center flex text-black h-10 w-10 bg-red-500  ">
                                {logo}
                            </div>
                            <div className="mt-1  ml-4 ">
                                <div className="font-bold text-xl m-5">{title}</div>
                                <div className="text-sm mt-1 pb-1  m-5">{text}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WhyChooseUs;
