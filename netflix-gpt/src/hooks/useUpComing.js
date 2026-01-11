import { useEffect } from "react"
import { options } from "../utils/constants";

import { setUpComing } from "../moviesSlice";
import { useDispatch } from "react-redux";
export const useUpComing=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        .then(res => res.json())
        .then(res =>{
            // console.log(res.results)
            dispatch(setUpComing(res.results))
        })
        .catch(err => console.error(err)); 
    },[])
}

