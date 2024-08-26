import React from 'react'
import Card from './Card'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

export const Cards = () => {
  return (
    <div className='flex text-center w-full bg-white py-[10rem] px-4 grid lg:grid-cols-3 gap-8'>
        <Card image={Single} user = "Single user" price = "$149" storage = "500GB storage" userAllow ='1 User Allowed' upto = "send up to 2GB"/>
        <Card image={Double} user = "Partnership" price = "$199" storage = "1TB storage" userAllow ='3 User Allowed' upto = "send up to 10GB"/>
        <Card image={Triple} user = "Group accaunt" price = "$299" storage = "5TB storage" userAllow ='10 User Allowed' upto = "send up to 20GB"/>
    </div>
  )
}
export default Cards