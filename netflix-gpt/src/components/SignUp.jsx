import React from 'react'
import { useState,useRef } from 'react'
import {validateForm} from '../utils/validate'
import {auth} from '../utils/firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../userSlice';
import NavBar from './NavBar';
const SignUp = () => {
  const [isSignUp,setIsSignUp]=useState(true);
  const [err,setErr]=useState(null);
  const dispatch=useDispatch();
  const email=useRef(null);
  const password=useRef(null);
  const userName=useRef(null);

  const handleSubmit=()=>{
    if(!isSignUp){
      const validation=validateForm(email.current.value,password.current.value,userName.current.value)
      setErr(validation);
      console.log(email.current.value,password.current.value);
      if(validation) return;
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        updateProfile(user, {
          displayName: userName.current.value
        }).then(()=>{
          const {displayName}=auth.currentUser;
          console.log(displayName)
          dispatch(setUser({displayName}))
        })
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setErr(errorMessage)
        
      });
    }
    else{
      //sign in
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)


      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setErr(errorMessage)
      });
    }


  }
  return (
    <div>
        <NavBar/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/e8136cfe-c5b7-464f-8c26-d68d676e0916/web/IN-en-20251229-TRIFECTA-perspective_c50c689c-0d42-413b-bd09-f4fc62fbec13_large.jpg" alt="movies" />
        </div>
       <div className='absolute px-9 py-4 bg-black/70 w-3/12 my-50 left-0 right-0 mx-auto rounded-md '>
            <p className='text-white text-3xl font-bold my-6' >{isSignUp?"Sign In":'Sign Up'}</p>
            <form onSubmit={(e)=>e.preventDefault()}>
                {
                  !isSignUp&&<input type="text" ref={userName} placeholder='Name'className=' text-white border border-white border-1 bg-gray-1000  placeholder-white w-full py-2 px-1 my-2 rounded-md' />
                }
                <input type="text" ref={email} placeholder='Email'className=' text-white border border-white border-1 bg-gray-1000  placeholder-white w-full py-2 px-1 my-2 rounded-md' />
                <input type="password" placeholder='Password' ref={password} className=' text-white border border-white bg-gray-1000  placeholder-white w-full py-2 px-1 my-2 rounded-md ' />
                <p className='text-red-600 font-bold text-lg'>{err}</p>
                <input type="button" value={isSignUp?"Sign In":'Sign Up'} className='cursor-pointer bg-red-600 text-white font-bold rounded-md w-full py-2 my-2 mb-16 boarder border-white boarder-1' onClick={handleSubmit} />
            </form>
            <div>
              <span className='text-gray-400 '>{!isSignUp?"Have an Account?":'New to Netflix?'}</span>
              <span className='text-white text-l cursor-pointer hover:underline ' onClick={()=>{
                setIsSignUp(!isSignUp);
                setErr(null);
              }} >{!isSignUp?"Sign In now.":'Sign Up now.'}</span>
            </div>
       </div>
    </div>
  )
}

export default SignUp