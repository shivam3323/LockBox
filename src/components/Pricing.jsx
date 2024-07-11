import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Pricing = () => {
  return (
    <>
     <div className="fixed inset-0 -z-10 h-screen w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
     <nav className='my-3 sticky top-0 z-10 mx-4 md:mx-14 flex items-center justify-between p-4 bg-black'>
          <div className="logo py-1">
         <Link to='/'> <img className='w-24 md:w-32 lg:min-w-48  hover:translate-x-4 hover:scale-110 transform transition duration-500' src="./icons/cooltext461660614288769.png" alt="Logo" /></Link> 
          </div>
          <ul className='text-white flex gap-24 font-semibold  '>
           <Link><li className='hover:bg-gradient-to-r hover:from-white hover:via-purple-300  hover:to hover:bg-purple-800 hover:text-transparent hover:bg-clip-text  hover:font-bold'>Why LockBox</li></Link> 
           <Link to="/pricing"><li className='hover:bg-gradient-to-r hover:from-white hover:via-purple-300  hover:to hover:bg-purple-800 hover:text-transparent hover:bg-clip-text hover:font-bold'>Pricing</li></Link> 
          </ul>
          <div className="buttons flex space-x-2">
            <Link to="/signup">
              <button className='bg-[radial-gradient(145%_145%_at_5%,#000_30%,#63e_100%)] text-white px-3 py-2 mx-1 md:mx-2 rounded-lg font-bold border-2 hover:border-white border-gray-500 hover:bg-[radial-gradient(85%_145%_at_5%,#000_30%,#63e_100%)]'>
                Get Started
              </button>
            </Link> 
            <Link to="/login">
              <button className='bg-[radial-gradient(145%_145%_at_5%,#000_30%,#63e_100%)] text-white px-3 py-2 rounded-lg font-bold border-2 hover:border-white border-gray-500 hover:bg-[radial-gradient(85%_145%_at_5%,#000_30%,#63e_100%)]'>
                Log in
              </button>
            </Link> 
          </div>
        </nav>
      <div className="info mx-4 md:mx-14 text-white my-10 rounded-2xl bg-gradient-to-tr from-violet-950 via-zinc-900 bg-violet-900 h-[auto] lg:h-[850px]hover:scale-105 transform transition duration-500">
        <h1 className='flex items-center justify-center text-4xl font-semibold mb-20 mt-14'>Choose the plan that fits your need</h1>
        <div className="cards flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-8 px-4 lg:px-0">
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
      <div className="cotent text-white">
      <h1 className='flex items-center justify-center text-3xl font-semibold mb-14 mt-10'>Core features included in every Bitwarden account:</h1>
      <div className="card flex flex-col lg:flex-row mx-4 md:mx-14 space-y-8 lg:space-y-0 lg:space-x-8 text-white ">
        
          <div className="card-items flex flex-col w-full lg:w-1/3 space-y-2 text-xl bg-gradient-to-tl p-10 from-zinc-950 via-zinc-900 to bg-violet-950 rounded-xl">
            <li>Passkey management and usage</li>
            <li>Store notes, credit cards, identities</li>
            <li>Free sharing with another user</li>
            <li>Bitwarden Send</li>
          </div>
          <div className="card-items flex flex-col w-full lg:w-1/3 space-y-2 text-xl p-10 bg-gradient-to-tr from-zinc-950 via-zinc-900 to bg-violet-950 rounded-xl">
           <li>Username and password generator</li>
           <li>Email alias integration</li>
           <li>Advanced two-step login</li>
           <li>Encrypted export</li>
          </div>
          <div className="card-items flex flex-col w-full lg:w-1/3 space-y-2 text-xl p-10 bg-gradient-to-br from-zinc-950 via-zinc-900 to bg-violet-950 rounded-xl">
            <li>Open source security</li>
            <li>Zero-knowledge encryption</li>
            <li>Unlimited devices</li>
            <li>Browser, Mobile, Desktop apps</li>
          </div>
          </div>
        </div>
          <Footer/>

        

     

    </>
  )
}

export default Pricing
