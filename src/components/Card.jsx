import React from 'react'

const Card = () => {
  return (
    <>
      <div className="info text-white mx-4 md:mx-14">
        <h1 className='flex items-center justify-center text-3xl font-semibold mb-20 mt-14'>Everything you need out of a password manager</h1>
        <div className="card flex flex-col lg:flex-row mx-4 md:mx-14 space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="card-items flex flex-col w-full lg:w-1/4 space-y-2 items-center">
            <img className='w-20 invert' src="./icons/se.svg" alt="" />
            <h1 className='text-xl font-semibold'>Enhanced security</h1>
            <p>Lockbox puts security first for users, securing your data through local, zero-knowledge encryption for the password vault and features like a built-in password generator.</p>
          </div>
          <div className="card-items flex flex-col w-full lg:w-1/4 space-y-2 items-center">
            <img className='w-20 invert' src="./icons/time.svg" alt="" />
            <h1 className='text-xl font-semibold'>Time-saving convenience</h1>
            <p>Password managers like Lockbox simplify your daily routine by keeping your digital life within arm’s reach with features like save and autofill plus storage for secure notes.</p>
          </div>
          <div className="card-items flex flex-col w-full lg:w-1/4 space-y-2 items-center">
            <img className='w-20 invert' src="./icons/plat.svg" alt="" />
            <h1 className='text-xl font-semibold'>Cross-platform accessibility</h1>
            <p>The best password managers support automatic device sync across all your devices, so you can save passwords to mobile apps and immediately access login credentials on a web browser.</p>
          </div>
          <div className="card-items flex flex-col w-full lg:w-1/4 space-y-2 items-center">
            <img className='w-20 invert' src="./icons/control.svg" alt="" />
            <h1 className='text-xl font-semibold'>Proactive control</h1>
            <p>Dark web monitoring, also known as data breach monitoring, auto-scans the web for compromised accounts while a 24/7 password strength tool assesses your vault for password risks.</p>
          </div>
        </div>
      </div>

      <div className="big-card flex flex-col lg:flex-row mx-4 md:mx-14 text-white mt-16 mb-10 space-y-8 lg:space-y-0 lg:space-x-8 sc">
        <div className="card-items flex flex-col w-full lg:w-1/2 space-y-2 mx-5 p-14 rounded-xl bg-gradient-to-bl from-zinc-950 via-zinc-900 to bg-violet-950 items-center hover:scale-105 transform transition duration-500">
          <div className="image flex items-center justify-center ">
            <img className='w-48 ' src="./icons/vite.svg" alt="" />
          </div>
          <h1 className='text-2xl font-semibold'>Securely generate, share, and autofill strong passwords and passkeys</h1>
          <p className='text-lg'>Bitwarden empowers you to create and manage unique passwords and passkeys, so you can strengthen privacy and boost productivity online from any device or location.</p>
        </div>
      
        <div className="card-items flex flex-col w-full lg:w-1/2 space-y-2 mx-5 p-14 rounded-xl bg-gradient-to-tr from-zinc-950 via-zinc-900 to bg-violet-950 items-center hover:scale-105 transform transition duration-500">
          <div className="image flex items-center justify-center">
            <img className='w-48' src="./icons/s.svg" alt="" />
          </div>
          <h1 className='text-2xl font-semibold'>Securely share passwords and encrypted files or text</h1>
          <p className='text-lg'>Bitwarden Send is a feature that allows all password management users to securely share sensitive information such as passwords, credit cards, and personally identifiable information through an end-to-end encrypted link.</p>
        </div>
      </div>

      <div className="big-card flex flex-col lg:flex-row mx-4 md:mx-14 text-white space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="card-items flex flex-col w-full lg:w-1/2 space-y-2 mx-5 p-14 rounded-xl bg-gradient-to-tl from-zinc-950 via-zinc-900 to bg-violet-950 items-center hover:scale-105 transform transition duration-500 ">
          <div className="image flex items-center justify-center">
            <img className='w-48' src="./icons/r.svg" alt="" />
          </div>
          <h1 className='text-2xl font-semibold'>Strong credential security with comprehensive compliance</h1>
          <p className='text-lg'>Protect your online data using a password manager you can trust. Bitwarden conducts regular third-party security audits and is compliant with GDPR, SOC 2, HIPAA, Privacy Shield, and CCPA standards.</p>
        </div>
      
        <div className="card-items flex flex-col w-full lg:w-1/2 space-y-2 mx-5 p-14 rounded-xl bg-gradient-to-br from-zinc-950 via-zinc-900 to bg-violet-950 items-center hover:scale-105 transform transition duration-500">
          <div className="image flex items-center justify-center ">
            <img className='w-48' src="./icons/e.svg" alt="" />
          </div>
          <h1 className='text-2xl font-semibold'>More than a password manager</h1>
          <p className='text-lg'>With Bitwarden, you can manage more than usernames and passwords. Securely store and share all types of sensitive data such as passkeys, identities, and credit cards, and run private vault reports to identify and address vulnerabilities such as weak or exposed passwords.</p>
        </div>
      </div>
    </>
  )
}

export default Card
