import React from 'react'
import PrimaryContainer from './PrimaryContainer';
import SecondaryContainer from './SecondaryContainer'
import NavBar from './NavBar';
import { useNowPlaying } from '../hooks/useNowPlaying';
import {usePopular} from '../hooks/usePopular'
import {useTopRated} from '../hooks/useTopRated'
import {useUpComing} from '../hooks/useUpComing'
const Browse = () => {
   useNowPlaying();
   usePopular();
   useTopRated();
   useUpComing();

 



  return (
    <div>
      <NavBar/>
      <PrimaryContainer />
      <SecondaryContainer />
    </div>
    
  )
}

export default Browse