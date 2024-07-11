import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import Footer from './Footer';
import PricingBox from './PricingBox';

const Front = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10 h-screen w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="navbar sticky top-0 z-50 bg-black">
        <nav className="my-3 mx-4 md:mx-14 flex items-center justify-between">
          <div className="logo py-1">
            <Link to='/'>
              <img className="w-24 md:w-32 lg:min-w-48 hover:translate-x-4 hover:scale-110 transform transition duration-500" src="./icons/cooltext461660614288769.png" alt="Logo" />
            </Link>
          </div>
          <ul className="text-white flex gap-4 md:gap-24 font-semibold">
            <Link to="#"><li className="hover:bg-gradient-to-r hover:from-white hover:via-purple-300 hover:to-purple-800 hover:text-transparent hover:bg-clip-text hover:font-bold">Why LockBox</li></Link>
            <Link to="/pricing"><li className="hover:bg-gradient-to-r hover:from-white hover:via-purple-300 hover:to-purple-800 hover:text-transparent hover:bg-clip-text hover:font-bold">Pricing</li></Link>
          </ul>
          <div className="buttons flex space-x-2">
            <Link to="/signup">
              <button className="bg-[radial-gradient(145%_145%_at_5%,#000_30%,#63e_100%)] text-white px-3 py-2 mx-1 md:mx-2 rounded-lg font-bold border-2 hover:border-white border-gray-500 hover:bg-[radial-gradient(85%_145%_at_5%,#000_30%,#63e_100%)]">
                Get Started
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-[radial-gradient(145%_145%_at_5%,#000_30%,#63e_100%)] text-white px-3 py-2 rounded-lg font-bold border-2 hover:border-white border-gray-500 hover:bg-[radial-gradient(85%_145%_at_5%,#000_30%,#63e_100%)]">
                Log in
              </button>
            </Link>
          </div>
        </nav>
      </div>
      <div className="content flex flex-col lg:flex-row">
        <div className="container text-white flex flex-col w-full lg:w-1/2 my-12 lg:my-24 ml-4 lg:ml-14 space-y-5 px-4 lg:px-0">
          <h1 className="text-2xl md:text-4xl font-bold">The Password Manager trusted by millions</h1>
          <p className="text-lg md:text-xl">LockBox is the best password manager for securely storing, managing, and sharing sensitive online data such as passwords, passkeys, credit cards, and more.</p>
          <div className="buttons gap-4 flex flex-col sm:flex-row">
            <Link to='/signup'>
              <button className="flex items-center justify-center bg-gradient-to-r from-black to bg-violet-800 text-white px-5 md:px-7 py-2 md:py-3 rounded-full font-bold border-2 border-x-violet-300 border-y-violet-200 my-2 sm:my-3">
                Start a Trial
              </button>
            </Link>
            <Link to="/pricing">
              <button className="flex items-center justify-center bg-gradient-to-r from-black to bg-violet-800 text-white px-5 md:px-7 py-2 md:py-3 rounded-full font-bold border-2 border-x-violet-300 border-y-violet-200 my-2 sm:my-3">
                View Pricing
              </button>
            </Link>
          </div>
        </div>
        <div className="container w-full lg:w-1/2 my-12 lg:my-20 flex items-center justify-center px-4 lg:px-0">
          <img className="w-10/12 lg:w-9/12 hover:translate-y-3 hover:scale-105 transform transition duration-500 hover:delay-100" src="./icons/Bitwarden-multiple-devices.webp" alt="Devices" />
        </div>
      </div>
      <Card />
      <PricingBox />
      <div className="bar flex flex-col text-white justify-center items-center w-full mt-10 p-14 relative">
        <img src="./icons/bg.webp" alt="Background" className="w-11/12" />
        <div className="absolute inset-0 flex flex-col justify-center items-center space-y-4">
          <p className="text-4xl font-semibold">Let’s get started!</p>
          <p className="text-2xl">Work more productively and power up your protection</p>
          <div className="button flexs">
            <Link to='/login'>
              <button className="bg-[radial-gradient(145%_145%_at_5%,#000_30%,#63e_100%)] text-white px-5 py-2 mx-1 md:mx-2 rounded-lg font-bold border-2 hover:border-white border-gray-500 hover:bg-[radial-gradient(85%_145%_at_5%,#000_30%,#63e_100%)]">
                Get Started
              </button>
            </Link>
            <Link to='/signup'>
              <button className="bg-[radial-gradient(145%_145%_at_5%,#000_30%,#63e_100%)] text-white px-5 py-2 mx-1 md:mx-2 rounded-lg font-bold border-2 hover:border-white border-gray-500 hover:bg-[radial-gradient(85%_145%_at_5%,#000_30%,#63e_100%)]">
                Create Account
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Front;
