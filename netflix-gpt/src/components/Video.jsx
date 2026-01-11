import React, { useEffect, useState } from 'react'
import { options } from '../utils/constants';
const Video = ({id}) => {
   const [vidKey,setVidKey]= useState(null)
   useEffect(()=>{
     fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
     .then(res => res.json())
     .then(res => {
        const trilerObj=res.results.find((obj)=>obj.type==='Trailer')
        console.log(trilerObj)
        setVidKey(trilerObj.key)
    }
    )
    .catch(err => console.error(err));
   },[])
   
  return (
<div className="relative w-full h-screen overflow-hidden">
  <iframe
    className="absolute inset-0 w-full h-full block"
    src={`https://www.youtube.com/embed/${vidKey}?autoplay=1&mute=1&controls=1`}
    allow="autoplay; encrypted-media; fullscreen"
    allowFullScreen
  />
</div>



  )
}

export default Video