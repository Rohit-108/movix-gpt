import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm)
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg" alt="logo" />
      </div>
      <div className='min-h-[707px] flex flex-col box-border items-center justify-center py-[28px] px-[68px]'>  <form className='w-3/12  absolute  p-12 bg-black    items-center justify-center text-white rounded-md bg-opacity-80'>
      <h1 className='font-bold text-3xl  mb-[10px]'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
      {!isSignInForm && (
        <input type='text' placeholder='Full Name' className=' w-full p-4 my-2 rounded-md bg-gray-700 text-white  ' />
        
      )}
      
        <input type='email' placeholder='Email or mobile number' className=' w-full p-4 my-2 rounded-md bg-gray-700 text-white  ' />
        <input type='password' placeholder='Password' className='p-4 my-2 w-full rounded-md bg-gray-700 text-white ' />
        <button className='p-2 my-2 w-full text-white  bg-red-700 rounded-md font-bold'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."}</p>
      </form></div>

    </div>
  )
}

export default Login