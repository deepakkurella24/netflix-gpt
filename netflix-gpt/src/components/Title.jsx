import React from 'react'

const Title = ({title,description}) => {
  return (
    <div className='pt-112 mx-33 absolute z-10'>
        <h1 className='text-4xl font-extrabold text-white'>{title}</h1>
        <p className='w-5/12 mt-1.5 text-white'>{description}</p>
    </div>
  )
}

export default Title