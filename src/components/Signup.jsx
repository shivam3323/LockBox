import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useFirebase } from '../context/firebase';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const { auth } = useFirebase();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/passwords'); // Redirect to a protected route after signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="navbar bg-black h-20 border-b border-gray-800">
        <nav className="my-5 flex items-center justify-center px-6 lg:px-40">
          <div className="logo py-1">
            <Link to='/'><img className="w-32 lg:w-56" src="./icons/cooltext461660614288769.png" alt="Logo" /></Link>
          </div>
        </nav>
      </div>
      <div className="signup flex flex-col lg:flex-row">
        <div className="container flex flex-col h-auto lg:h-screen text-white space-y-4 bg-black pt-16 px-8 lg:pt-16 lg:pl-72 lg:w-1/2">
          <h1 className="text-3xl lg:text-5xl font-bold">One password.</h1>
          <h1 className="text-3xl lg:text-5xl font-bold">Zero headaches.</h1>
          <p className="text-lg lg:text-xl font-semibold">LockBox takes care of the rest.</p>
          <img className="w-full lg:w-3/4 pt-4" src="./icons/Bitwarden-multiple-devices.webp" alt="Illustration" />
          <div className="box text-lg lg:text-xl space-y-4 pt-7">
            <h2 className="text-2xl lg:text-3xl">Free features</h2>
            <ul>
              <li>Secure password vault</li>
              <li>Access on one device type</li>
              <li>One-to-one sharing</li>
              <li>Save and fill passwords</li>
            </ul>
          </div>
        </div>
        <div className="container w-full lg:w-1/2 bg-zinc-950 flex justify-center items-center p-8 lg:pl-12">
          <form className="content w-full lg:w-3/4 p-10 text-white flex flex-col rounded-lg bg-gradient-to-br from-zinc-800 via-zinc-900 to bg-violet-900" onSubmit={handleSubmit}>
            <div className="head flex justify-between items-center mb-3">
              <h1 className="text-2xl font-semibold text-gray-400">Create an account</h1>
              <p>or <Link to="/login"><span className="text-blue-500 hover:text-gray-400 hover:underline">Login</span></Link></p>
            </div>
            <hr className="bg-white mb-5" />
            {error && <p className="text-red-500">{error}</p>}
            <div className="inputs flex flex-col space-y-6">
              <input
                className="border border-white w-full rounded-lg bg-zinc-900 p-4 py-3"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="border border-white w-full rounded-lg bg-zinc-900 p-4 py-3"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                className="border border-white w-full rounded-lg bg-zinc-900 p-4 py-3"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-[radial-gradient(145%_145%_at_5%,#000_30%,#63e_100%)] text-white text-xl w-full px-3 py-3 rounded-3xl font-bold border-2 hover:border-white border-gray-500 hover:bg-[radial-gradient(85%_145%_at_5%,#000_30%,#63e_100%)]"
              >
                Sign Up - It's Free
              </button>
              <p className="text-gray-300">
                By completing this form, I agree to the <a href="">Terms</a> and <a href="">Privacy Policy.</a> I want to receive promotional emails, unless <a href="">I opt out.</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
