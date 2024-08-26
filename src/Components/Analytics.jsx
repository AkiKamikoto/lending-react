import React from 'react'
import Laptop from '../assets/laptop.jpg'

export const Analytics = () => {
  return (
    <div className='flex bg-white w-full py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="img" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold py-2'>Data Analytics Dashboard</p>
                <h2 className='font-bold sm:text-4xl md:text-6xl text-2xl py-2'>Manage Data Analitycs</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Corporis aperiam obcaecati eum repudiandae cumque natus totam atque architecto porro consequuntur at,
                molestiae temporibus dolorem consequatur corrupti ipsam aliquid, illo quo.</p>
                <button className='bg-black w-[200px] text-[#00df9a] mx-auto py-2 my-4 rounded-md'>get Started</button>
            </div>
            
        </div>
    </div>
  )
}

export default Analytics
