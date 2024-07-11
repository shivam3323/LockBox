import React from 'react'
import { Link } from 'react-router-dom'

const PricingBox = () => {
  return (
    <div className="info mx-4 md:mx-14 text-white my-10 rounded-2xl bg-gradient-to-tr from-violet-950 via-zinc-900 bg-violet-900 h-[auto] lg:h-[850px] ">
        <h1 className='flex items-center justify-center text-4xl font-semibold mb-20 mt-14 '>Choose the plan that fits your need</h1>
        <div className="cards flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-8 px-4 lg:px-0 ">
          <div className="card flex w-full lg:w-1/4 space-y-2 mx-5 p-8 md:p-16 rounded-2xl bg-gradient-to-bl from-zinc-950 to bg-zinc-800 hover:scale-105 transform transition duration-500">
            <div className="card-items flex flex-col text-xl gap-y-5 items-center text-center">
              <h1 className='text-3xl font-semibold flex justify-center'>Free</h1>
              <p className='flex justify-center'>$<span className='text-6xl'>0</span></p>
              <p className='flex flex-col items-center justify-center text-sm text-gray-400'>per month <span className='text-lg'>Free Forever</span></p>
              <li>Unlimited Access</li>
              <li>Passkey management</li>
              <li>All the core functions</li>
              <li>Always Free</li>
              <p className='flex flex-col items-center justify-center text-sm text-gray-400'>share vault items with others</p>
             <Link to="/signup"> <button className='bg-[radial-gradient(145%_145%_at_5%,#000_30%,#63e_100%)] text-white px-4 py-3 rounded-3xl font-bold border border-white hover:bg-[radial-gradient(85%_145%_at_5%,#000_30%,#63e_100%)]'>
                Get Started today
              </button></Link>
            </div>
          </div>
          <div className="card flex w-full lg:w-1/4 space-y-2 mx-5 p-8 md:p-16 rounded-2xl bg-gradient-to-tr from-zinc-950 to bg-zinc-800 hover:scale-105 transform transition duration-500">
            <div className="card-items flex flex-col text-xl gap-y-5 items-center text-center">
              <h1 className='text-3xl font-semibold flex justify-center'>Premium</h1>
              <p className='flex justify-center'>$<span className='text-6xl'>5</span></p>
              <p className='flex flex-col items-center justify-center text-sm text-gray-400'>per month <span className='text-lg'>$55 billed annually</span></p>
              <li>Unlimited Connection</li>
              <li>Unlimited Sharing</li>
              <li>All the core functions</li>
              <li>Integrated Authen</li>
              <p className='flex flex-col items-center justify-center text-sm text-gray-400'>share vault items with others</p>
             <Link to='/signup'> <button className='bg-[radial-gradient(145%_145%_at_5%,#000_30%,#63e_100%)] text-white px-4 py-3 rounded-3xl font-bold border border-white hover:bg-[radial-gradient(85%_145%_at_5%,#000_30%,#63e_100%)]'>
                Create Account
              </button></Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default PricingBox
