"use client";

import Button from "../components/input/Button";

import Input from "../components/input/input";
import { Modal } from "../components/Modal";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { Signcontext } from "../provide";
import { toast } from 'react-hot-toast';
function Loginmodel() {
  const { signisopen, setsignin,user } = useContext(Signcontext);
  console.log(user)
  const onclose = () => {
    setsignin(false);
  };
  const [credential,setcredential]=useState({
    email:"",
   
    password:""

  })
 
  const chnagecred=(e)=>{
    setcredential((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }
  const handlesubmit=async()=>{
 

  try {
    const res = await fetch("/api/authapi/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(credential),
    });

  const data1=await res.json();
  
  
   if(!data1) return toast.error(data1.message)

  

toast.success(data1.status)
  } catch (err) {
    console.error("Error:", err);
  }
  }
  const body = (
    <div className="flex flex-col gap-4">
     
      <h1>Welcome to opentable!</h1>

      <Input type="email" label="Email" name="email" onChange={chnagecred} />

      <Input type="password" label="Password" name="password" onChange={chnagecred} />
      <Button onClick={handlesubmit}   label="Login"/>
    </div>
  );
  const footer = (
    <div className="flex flex-col gap-4 mt-3 w-full">
      <hr />
      <Button outline label="Continue with Google" icon={FcGoogle} />
      <div
        className="
      text-neutral-500 text-center mt-4 font-light"
      >
        <p>
          First time using Airbnb?
          <span
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
          >
            
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
  return (
    <Modal
      isOpen={signisopen}
      onClose={onclose}
      body={body}
      footer={footer}
      label="Login"
    />
  );
}

export default Loginmodel;
