import { useEffect } from "react"
import { options } from "../utils/constants";
import {setNowPlaying} from '../moviesSlice';
import { useDispatch } from "react-redux";
export const useNowPlaying=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        .then(res => res.json())
        .then(res =>{
            // console.log(res.results)
            dispatch(setNowPlaying(res.results))
        })
        .catch(err => console.error(err)); 
    },[])
}

