import React from 'react'

export const Card = (promp) => {
  return (
    <div>
        <div className="flex h-[35rem] flex-col justify-between my-10 items-center shadow-xl rounded-lg py-4  hover:scale-105 duration-300">

            <img src={promp.image} alt="image" className='w-20 mx-auto mt-[-3rem]' />
            <h2 className='font-bold text-xl sm:text-3xl md:text-4xl '>{promp.user}</h2>
            <p className='font-bold my-6 text-4xl'>{promp.price}</p>
            <div>
                <p className='my-2'>{promp.storage}</p>
                <p className='my-2'>{promp.userAllow}</p>
                <p className='my-2'>{promp.upto}</p>
            </div>

            <button className='mx-auto px-auto w-[200px] rounded-md bg-[#00df9a] py-3'>Start trial</button>
        </div>

    </div>
  )

}
export default Card
