import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../userSlice';
import { useNavigate } from 'react-router-dom';
import { auth } from "../utils/firebase";
import { useEffect } from "react";
export const useChangeState=()=>{

    const dispatch=useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid,email}=user;
            dispatch(setUser({uid,email}))
            navigate('/browse');
        }
        else {
            dispatch(setUser(null))
            navigate('/');
        }

         })
    },[])


}