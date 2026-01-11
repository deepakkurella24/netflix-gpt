import React from 'react'
import MoviesList from './MoviesList';
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
    const {nowPlaying,popular,topRated,upComing} = useSelector((state) => state.movies);
    if(!upComing || !popular || !topRated || !nowPlaying ) return;
    return (
    <div className='bg-black'>
        <MoviesList title={'Now Playing'} movies={nowPlaying}  />
        <MoviesList title={'Popular'} movies={popular}  />
        <MoviesList title={'Top Rated'} movies={topRated}  />
        <MoviesList title={'Up Coming'} movies={upComing}  />
    </div>


    )
}

export default SecondaryContainer

// {

//   nowPlaying: null,
//   popular: null,
//   topRated:null,
//   upComing:null

// }