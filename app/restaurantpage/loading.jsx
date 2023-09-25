import React from 'react'
import Heading from "./[slug]/heading"
import Link from 'next/link';
function loading() {
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
          <main className="max-w-screen-2xl m-auto bg-white">
            <Heading />
    
            <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
              <div className="bg-white w-[70%] rounded p-3 shadow">
                <nav className="flex text-reg border-b pb-2">
                  <Link href="" className="mr-7">
                    Overview
                  </Link>
                  <Link href="" className="mr-7">
                    Menu
                  </Link>
                </nav>
    
               </div>
               
            </div>
          </main>
        </main>
      );
}

export default loading