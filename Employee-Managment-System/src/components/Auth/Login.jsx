import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('');
  const [passward, setPassward] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    handleLogin(email, passward)
    setEmail("")
    setPassward("")

  }


  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className='border-2 border-emerald-600 rounded-xl p-20'>
        <form 
        onSubmit={handleSubmit}
        className='flex flex-col items-center justify-center'>
          <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
           required type="email" name="" className="border-2 border-emerald-600 py-4 px-5 rounded-full text-xl text-black outline-none bg-transparent placeholder:text-gray-400" placeholder='Enter you email...' id="email" />

          <input
          onChange={(e) => setPassward(e.target.value)}
          value={passward}
          required type="password" name="" className="border-2 border-emerald-600 py-4 px-5 rounded-full text-xl text-black outline-none bg-transparent placeholder:text-gray-400 mt-4" placeholder='passward' id='passward' />
          <button className="border-none mt-5 py-4 px-5 rounded-full text-xl text-white outline-none bg-emerald-600 placeholder:text-white">Log in</button>
        </form>
      </div>
      
    </div>
  )
}

export default Login
