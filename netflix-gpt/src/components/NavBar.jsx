import React from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { clearUser, setUser } from '../userSlice';
import { useNavigate } from 'react-router-dom';
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import logout from '../utils/logout.png'
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { clearAllMovies } from '../moviesSlice';
const NavBar = () => {
    const user=useSelector((store)=>store.user);
    
    const handleSignOut=()=>{
        signOut(auth)
        .then(() => {
            console.log('signout completed successfully');
        }).catch((e) => {
            console.log(e)
        });
    }

    const dispatch=useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const {email,displayName}=user;
                dispatch(setUser({email,displayName}))
                navigate('/browse');
            }
            else {
                dispatch(clearUser())
                dispatch(dispatch(clearAllMovies()))
                navigate('/');
            }
         })
    },[])

  return (
    <div className='absolute z-20 bg-gradient-to-b from-black flex justify-between w-full'>
        <img className='w-50 mx-12 ' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix" />
         {
            user.email&&(
                <button className='cursor-pointer  text-white font-bold  mx-12'><img src={logout} alt="img" className='w-8 h-8' onClick={handleSignOut} />Sign Out</button>
            )
        } 
         
        
    </div>
  )
}

export default NavBar

//<a href="https://www.flaticon.com/free-icons/logout" title="logout icons">Logout icons created by SumberRejeki - Flaticon</a>