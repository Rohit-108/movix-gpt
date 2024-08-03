import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkvalidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile
} from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate= useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null); 

  const handleButtonClick = () => {
    //validate data
   
    const message = checkvalidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if(message) return;

    //signup and sign logic

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
       .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current ? name.current.value : "", photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.message)
      // ...
    });
    console.log(user)
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
    // ..
  });


    }
    else{
      // signin logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });

    }

   

  }

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
      <div className='min-h-[707px] flex flex-col box-border items-center justify-center py-[28px] px-[68px]'>  
      <form  className='w-3/12  absolute  p-12 bg-black    items-center justify-center text-white rounded-md bg-opacity-80'>
      <h1 className='font-bold text-3xl  mb-[10px]'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
      {!isSignInForm && (
        <input ref={name} type='text' placeholder='Full Name' className=' w-full p-4 my-2 rounded-md bg-gray-700 text-white  ' />
        
      )}
      
        <input ref={email} type='email' placeholder='Email or mobile number' className=' w-full p-4 my-2 rounded-md bg-gray-700 text-white  ' />
        <input ref={password} type='password' placeholder='Password' className='p-4 my-2 w-full rounded-md bg-gray-700 text-white ' />
        <p className='text-red-500 text-lg font-bold p-2'>{errorMessage}</p>
        <button className='p-2 my-2 w-full text-white  bg-red-700 rounded-md font-bold' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."}</p>
      </form></div>

    </div>
  )
}

export default Login