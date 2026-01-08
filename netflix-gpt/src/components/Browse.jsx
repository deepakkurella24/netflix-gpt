import React from 'react'
import { MyContext } from '../utils/store';
import { useContext } from 'react';
const Browse = () => {
  const { value } = useContext(MyContext);
  return (
    <h1>Welcome {value.displayName}</h1>
  )
}

export default Browse