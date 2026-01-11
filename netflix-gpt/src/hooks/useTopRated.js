import { useEffect } from "react"
import { options } from "../utils/constants";

import { setTopRated } from "../moviesSlice";
import { useDispatch } from "react-redux";
export const useTopRated=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(res => res.json())
        .then(res =>{
            // console.log(res.results)
            dispatch(setTopRated(res.results))
        })
        .catch(err => console.error(err)); 
    },[])
}

