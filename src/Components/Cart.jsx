import React from 'react'

const Cart = () => {
    return (
        <div>
            <div className=''>
                <h1 className='text-3xl text-center font-bold underline'>Statistics</h1>
               
                <p className='text-center pt-5'>Discover how we're making a
                    difference in the community through our commitment to excellence and service.</p>
            </div>


            <div className='grid grid-cols-2 md:grid-cols-4 px-8 mt-8  gap-8  max-w-7xl  mx-auto items-center'>

                <div className='h-[250px] w-[250px] border-[2] shadow-amber-700 shadow-lg flex flex-col justify-center items-center
         '>

                    <div className='rounded-full w-[100px] h-[100px] shadow-amber-700 shadow-lg mt-3   justify-center items-center overflow-hidden' >
                        <img className=' rounded-full ' src={users} alt='' />
                    </div>
                    <div className='text-center mt-8'>
                        <h1>1000+</h1>
                        <h1>Members</h1>
                    </div>
                </div>


                

                


                 <div className='h-[250px] w-[250px] border-[2] shadow-amber-700 flex flex-col justify-center items-center shadow-lg'>
                    <div className='rounded-full w-[100px]  h-[100px]'>
                        <img src={location} alt='' />
                    </div>
                    <div className='text-center'>
                        <h1>15+</h1>
                        <h1>Multiple Locations</h1>
                    </div>
                </div>

                <div className='h-[250px] w-[250px] border-[2] shadow-amber-700 shadow-lg'>
                    <div className='rounded-full w-[100px] h-[100px]'>
                        <img src={likes} alt='' />
                    </div>
                    <div>
                        <h1>100%</h1>
                        <h1>Indian Owned</h1>
                    </div>

                </div>

                <div className='h-[250px] w-[250px] border-[2] shadow-amber-700 shadow-lg'>
                    <div className='rounded-full w-[100px] h-[100px]'>
                        <img src={quality} alt='' />
                    </div>
                    <div>
                        <h1>5 Star</h1>
                        <h1>Quality Commitment</h1>
                    </div>
                </div> 

            </div>
        </div>
    )
}

export default Cart

