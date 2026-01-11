import { useEffect } from "react"
import { options } from "../utils/constants";

import { setPopular } from "../moviesSlice";
import { useDispatch } from "react-redux";
export const usePopular=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(res => res.json())
        .then(res =>{
            // console.log(res.results)
            dispatch(setPopular(res.results))
        })
        .catch(err => console.error(err)); 
    },[])
}

