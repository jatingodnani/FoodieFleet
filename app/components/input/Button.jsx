import React from 'react';

export default function Button({ small,outline,icon:Icon,label,onClick}) {



  return (
    <button className={`
    relative 
    opacity-70  
    rounded-lg 
    hover:opacity-80 
    transition 
    w-full
    ${small ? 'py-1' : 'py-3'}
    ${outline ? 'bg-white' : 'bg-rose-500'}
    ${outline ? 'text-black' : 'text-white'}
    ${outline ? 'border-black' : 'border-rose-500'}
    ${small ? 'text-sm' : 'text-lg'}
    ${small ? 'font-light' : 'font-bold'}
    ${small ? 'border-[1px]' : 'border-2'}`

    }
    onClick={onClick}
    >
     {Icon && (
        <Icon
          size={24}
          className="
            absolute
            left-4
            top-3
          "
        />
      )
      }
      {label}
    </button>
  );
}
