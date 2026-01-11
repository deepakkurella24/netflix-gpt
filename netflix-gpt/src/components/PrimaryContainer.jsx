import React from 'react'
import { useSelector } from 'react-redux'
import Video from './Video';
import Title from './Title';
const PrimaryContainer = () => {
    const nowPlaying = useSelector((state) => state.movies.nowPlaying);
    if(!nowPlaying) return;
    const movie=nowPlaying[0];
    console.log(movie)
    return (
    <div>
        <Title title={movie.original_title} description={movie.overview} />
        <Video id={movie.id} />
    </div>
    )
}

export default PrimaryContainer