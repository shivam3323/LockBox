import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useFirebase } from '../context/firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { auth } = useFirebase();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/passwords'); 
    } catch (err) {
      setError('Invalid username or password. Please try again.'); 
    }
  };

  return (
    <>
      <div className="container bg-gradient-to-br from-black via-zinc-800 to bg-zinc-950 flex justify-center  w-full items-center h-screen">
        <div className="content h-auto lg:h-3/4 p-10 text-white flex flex-col w-full lg:w-1/3 rounded-lg bg-gradient-to-br from-black via-zinc-900 to bg-violet-900 mx-4 lg:mx-0">
          <div className="logo flex flex-col items-center justify-center mb-5">
            <img className='w-32 lg:w-52' src="./icons/cooltext461660614288769.png" alt="Logo" />
          </div>
          <div className="head flex justify-between items-center mb-3">
            <h1 className='text-2xl font-semibold text-gray-400'>Log In</h1>
            <p>OR <Link to="/signup"><span className='text-blue-500 hover:text-gray-500 hover:underline'>Create an Account</span></Link></p>
          </div>
          <hr className='bg-white mb-5'/>
          {error && <p className="text-red-500 mb-3">{error}</p>}
          <form onSubmit={handleSubmit} className="inputs flex flex-col space-y-6">
            <div className="div">
              <input
                className="border border-white w-full rounded-lg bg-zinc-900 p-4 py-3"
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="div">
              <input
                className="border border-white w-full rounded-lg bg-zinc-900 p-4 py-3"
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              className='bg-[radial-gradient(145%_145%_at_5%,#000_30%,#63e_100%)] text-white text-xl  w-full px-3 py-3  rounded-3xl font-bold border-2 hover:border-white border-gray-500 hover:bg-[radial-gradient(85%_145%_at_5%,#000_30%,#63e_100%)]'
              type="submit"
            >
              Log In
            </button>
          </form>
          <p className='text-gray-300 mt-3'>By completing this form, I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy.</a> I want to receive promotional emails, unless <a href="#">I opt out.</a> </p>
        </div>
      </div>
    </>
  );
};

export default Login;
