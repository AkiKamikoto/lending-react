import React from 'react'
import { ReactTyped } from "react-typed";

export const Hero = () => {
  return (
    <div className="text-white">

    <div className='flex max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center justify-center flex-col'>
        <p className='uppercase text-[#00df9a] font-bold p-2'>Some realy cool stuff waiting u!!!</p>
        <h1 className="font-bold md:text-7xl md:py-6 sm:text-6xl text-4xl">Grow with data.</h1>

        <div className='flex justify-center sm:text-5xl md:text-4xl texg-xl font-bold text center'>
            <p className=''>We can help you with </p> 
            <ReactTyped className='text-gray-400 ml-2 uppercase' strings={["BTB","BTC","SASS",]} typeSpeed={100} backSpeed={100} loop></ReactTyped>
        </div>
        <p className='mx-1 mt-1 sm:text-5xl md:text-4xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto px-auto py-3 my-6'>get started</button>
    </div>
    
    </div>
  )
}

export default Hero