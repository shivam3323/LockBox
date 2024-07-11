import React from 'react'
import Manager from './Manager'
import Footer from './Footer'
import { Link } from 'react-router-dom'


const Navbar = () => {

  return (
    <>
      <div className="fixed inset-0 -z-10 h-screen w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <nav className='my-6 flex items-center justify-between px-6 lg:px-40'>
        <div className="logo py-1">
          <Link to='/'><img className='w-32 lg:min-w-48' src="./icons/cooltext461660614288769.png" alt="" /></Link>
        </div>
        <button className='bg-[radial-gradient(145%_145%_at_5%,#000_30%,#63e_100%)] text-white px-3 py-1 rounded-lg font-bold border border-white hover:bg-[radial-gradient(85%_145%_at_5%,#000_30%,#63e_100%)] '>
          <a className='flex items-center' href="https://github.com/shivam3323/LockBox" target='blank'><img className="w-7 invert mr-2" src="./icons/github.png" alt="" />GitHub</a>
        </button>
      </nav>
      <div className="flex-grow">
        <Manager/>
      </div>
      <Footer />
    </>
  )
}

export default Navbar
