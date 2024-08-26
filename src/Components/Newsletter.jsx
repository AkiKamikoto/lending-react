import React from 'react'

export const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 px-4'> 
            <div className=''>
                <h1 className='font-bold text-2xl md:text-3xl sm:text-6xl mt-1 mb-1 my-4'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-6'>
                <div className='flex flex-col sm:flex-row justify-between items-center w-full'>
                    <input type="email" placeholder='Enter your email' className='flex w-full p-3 py-3 mx-auto px-auto rounded-md text-black' ></input>
                    <button className='bg-[#00df9a] w-[200px] px-auto mx-auto py-3 my-6 rounded-md ml-2'>Notify me</button>
                </div>

                <p>We care bout the protection of your data. Read our <br />
                <span className='text-[#00df9a]'>Privacy Policy.</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter