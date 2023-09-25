'use client'

import Image from 'next/image'
import React from 'react'
import error from "../public/icons/error.png";
function Error() {
  return (
    <div className='h-full w-full  flex flex-col bg-slate-100  border p-3   align-center  mt-9'>
        <Image src={error} height={400} alt=""/>
        <h2 className='text-center'>Not found</h2>
    </div>
  )
}

export default Error