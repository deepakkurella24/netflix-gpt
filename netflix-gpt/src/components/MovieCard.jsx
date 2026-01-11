import React from 'react'

const MovieCard = ({poster,title}) => {
  return (
    <div className='m-4' >
        <div className='w-50 h-70 ' >
            <img src={'https://image.tmdb.org/t/p/w500'+poster} alt="img" />
        </div>
        <h1 className='text-white mt-6 font-black'>{title}</h1>
    </div>
  )
}

export default MovieCard