import React from 'react'
import MovieCard from './MovieCard'
const MoviesList = ({title,movies}) => {
    
    return (
        <div>
            <h1 className='text-white font-black text-4xl mb-4 mx-4' >{title}</h1>
            <div className='flex overflow-x-scroll scrollbar-hide' >
                {
                    movies.map((movie)=>{
                        return <MovieCard poster={movie.poster_path}  title={movie.title} />
                    })
                }
            </div>
        </div>
    )
}

export default MoviesList