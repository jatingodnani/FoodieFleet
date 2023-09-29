import React from 'react'

function Input({type,label,onChange,name,small}) {
  return (
    <div className={`relative ${small?"w-[48%]":"w-full" }`}>
        <input 
        type={type}
        placeholder=''
     onChange={onChange}
     name={name}
        className='peer 
                   w-full
                   p-4
                   
                   relative 
                   z-100
                   border-[1px]
                   font-light 
                   bg-white 
              
                   rounded-md
                   outline-none
                   transition'
                   required/>
        <label className={  `absolute 
          text-md
           left-2
           top-3
           peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
           peer-focus:scale-75
           peer-focus:-translate-y-4
       
          ` }>{label}</label>
    </div>
  )
}

export default Input