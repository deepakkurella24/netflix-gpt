import React from 'react'
import { useSelector } from 'react-redux'
import NavBar from './NavBar';

const Browse = () => {
  const user = useSelector((state) => state.user); // entire user object
  const displayName = user.displayName;
  const email = user.email;
  console.log(email,displayName)
  return (
    <div>
      <NavBar/>
      <div className='text-4xl text-center'>Welcome {displayName}</div>
    </div>
    
  )
}

export default Browse