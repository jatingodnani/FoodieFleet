import Link from 'next/link'
import React from 'react'
// async function getcs(){
//   const doc=await fetch("https://fakestoreapi.com/products/1");
//   return doc.json();
// }
// async function getnot(){
//     const doc=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata",{
//         next:{
//             revalidate:15
//         }
     
//     })
//     return doc.json()
// }
async function Navbar() {
    
    
  return (
    <nav className="bg-white  flex justify-between p-2 items-center">
      <Link href="/" className="font-bold text-gray-700 text-2xl ml-4"> 
      OpenTable  
      </Link>
      <div>
        <div className="flex ">
          <button
            className="bg-blue-400 text-white border p-1 px-4 rounded "
          >
            Sign in
          </button>
          <button className="border p-1 px-4 rounded">Sign up</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar