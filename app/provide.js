'use client'

import {getCookie} from "cookies-next"
import { createContext, useContext, useState,useEffect } from 'react';
export const Signcontext=createContext();
export const Providers=({children})=>{
    const [signisopen,setsignin]=useState(false);
    const [sinupisopen,setsignup]=useState(false);
    const [user, setuser] = useState({});
 const token=getCookie("jwt-token");
 console.log(token)
 
  const fetchfun=async()=>{
    console.log('Token:', token); 
  await  fetch("/api/authapi/me", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    })
      .then((res) => {
        console.log('Response:', res);  
       
        return res.json();
      })
      .then((data) => {
        if (!data.success) {
          setuser(data.user);
        }
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
   fetchfun()
  }, []);
  
    const values={
        setsignin,
        sinupisopen,
        signisopen,
        setsignup,
        user,
        setuser,
    }
    console.log(user)
    return(
       <Signcontext.Provider value={values}>
        {children}
       </Signcontext.Provider>
    )
}