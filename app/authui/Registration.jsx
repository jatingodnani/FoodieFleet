"use client";
import Button from "../components/input/Button";
import { useState } from "react";
import Input from "../components/input/input";
import { Modal } from "../components/Modal";
import toast from "react-hot-toast";
import { useContext } from "react";
import { Signcontext } from "../provide";
function Registermodal() {
  const { sinupisopen, setsignup } = useContext(Signcontext);
  const onclose = () => {
    setsignup(false);
  };

  const [info, setcredential] = useState({
    email: "",
    name: "",
    password: "",
    phonenumber: "",
    city: "",
    lastname: "",
  });
  const chnagecred = (e) => {
    setcredential((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(info)

  const handleform = async() => {
    console.log("click");
    if (
      info.city === "" ||
      info.email === "" ||
      info.name === "" ||
      info.lastname === "" ||
      info.password === ""
    ) {
      toast.error("Fill all the credential");
    }
    console.log(info)
    try {
      const res = await fetch("/api/authapi/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(info),
      });
  
    const data1=await res.json();
  console.log(data1);
    
     if(!data1) return toast.error(data1.status)
  
    
  
  toast.success(data1.status)
    } catch (err) {
      console.error("Error:", err);
    }
  };
  const body = (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold">Welcome to Opentable</h1>
      <h2>Create an account!</h2>

      <div className="flex flex-wrap gap-4">
        <Input
          type="text"
          label="First-Name"
          name="name"
          small
          onChange={chnagecred}
        />
        <Input
          type="text"
          label="Last-Name"
          name="lastname"
          small
          onChange={chnagecred}
        />
        <Input type="email" label="Email" name="email" onChange={chnagecred} />
        <Input
          type="text"
          label="phonenumber"
          name="phonenumber"
          small
          onChange={chnagecred}
        />
        <Input
          type="text"
          label="City"
          name="city"
          small
          onChange={chnagecred}
        />

        <Input
          type="password"
          label="Password"
          name="password"
          onChange={chnagecred}
        />
      </div>
      <Button onClick={handleform} label="Create" />
    </div>
  );
  const footer = (
    <div className="flex flex-col gap-4 mt-3 w-full">
      <div
        className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        "
      >
        <p>
          Already have an account?
          <span
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
          >
     
            Log in
          </span>
        </p>
      </div>
    </div>
  );
  return (
    <Modal
      isOpen={sinupisopen}
      onClose={onclose}
      body={body}
      footer={footer}
      label="Register"
    />
  );
}

export default Registermodal;
