"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { Signcontext } from "../provide";
import  {deleteCookie} from "cookies-next"

function Navbar() {
  const { setsignin, setsignup,user } = useContext(Signcontext);
  const handlelogout=()=>{
    deleteCookie("jwt-token")
  }
  return (
    <nav className="bg-white  flex h-[60px]  justify-between items-center overflow-hidden">
      <Link href="/" className="font-bold text-gray-700 text-2xl ml-4">
        OpenTable
      </Link>
      <div>
        <div className="flex gap-3 ml-8">
          {user && user.length>0 ?
          <button
          onClick={handlelogout}
           className="border p-1 px-4 rounded text-white bg-blue-400 mr-3"
         >Logout
         </button>:
           <><button
            className="bg-blue-400 text-white border p-1 px-4 rounded "
            onClick={() => setsignin(true)}
          >
            Sign in
          </button>
          <button
            onClick={() => setsignup(true)}
            className="border p-1 px-4 rounded"
          >Sign up
          </button></>
          

          }
          
         
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
