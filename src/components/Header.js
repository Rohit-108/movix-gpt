<<<<<<< HEAD
import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo } from '../utils/constant';

const Header = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()
  const user = useSelector((store => store.user))

  const handleSignOut = () => {
    signOut(auth).then(() => {

      // Sign-out successful.
    }).catch((error) => {
      navigate("/error")
      // An error happened.
    });

  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURl } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURl
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });

    return () => unsubscribe();
  }, []);




  return (
    <div className='absolute w-screen px-32 py-2 bg-gradient-to-b from-black text-4xl z-10 flex justify-between'>
      <img className='w-45 text-3xl' src={Logo} alt='logo' />
      {user && (
        <div className='flex p-2'>
          <img className='w-12 h-12' src={user?.PhotoUrl} alt="usericon" />
          <button className='font-bold text-white' onClick={handleSignOut}>(Sign Out)</button>
        </div>
      )}
    </div>
  )
}

export default Header  
=======
import React,{useEffect} from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()
  const user = useSelector((store=>store.user))
  
  const handleSignOut = () => {
    signOut(auth).then(() => {

      // Sign-out successful.
    }).catch((error) => {
      navigate("/error")
      // An error happened.
    });
    
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURl } = user;
        dispatch(
          addUser({ 
            uid, 
            email, 
            displayName, 
            photoURl 
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
  }, []);




  return (
    <div className='absolute w-screen px-32 py-2 bg-gradient-to-b from-black text-3xl z-10 flex justify-between'>
      <img className='w-44 text-3xl' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='logo' />
      {user && (
        <div className='flex p-2'>
        <img className='w-12 h-12' src={user?.PhotoUrl} alt="usericon"/>
        <button className='font-bold text-white'  onClick={handleSignOut}>(Sign Out)</button>
      </div>
      )}
    </div>
  )
}

export default Header  
>>>>>>> 2a1db1f8f50f0d12522fb451fb730c7869e1120e
