"use client"

import { useState,useEffect } from "react"
import { IoMdClose } from "react-icons/io";
export const Modal = ({isOpen,body,footer,label,onClose}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);
  return (<>
  {
    showModal
    &&
    <div
    className="
    justify-center 
    items-center 
    flex 
    overflow-x-hidden 
      overflow-y-auto 
      fixed 
      inset-0 
      z-50 
      outline-none 
      focus:outline-none
       bg-neutral-800/70
    "
  >
    <div className={`
      relative 
      w-full
      md:w-4/6
      lg:w-3/6
      xl:w-2/5
     h-full 
      lg:h-auto
       md:h-auto
      translate
      duration-300
        bg-white 
        border-0 
        rounded-lg 
        shadow-lg 
        outline-none 
        focus:outline-none
        flex 
        flex-col 
        transform ${
          showModal
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }
      `}
    >
      
          <div className="
            flex 
            items-center 
            p-6
            rounded-t
            justify-center
            relative
            border-b-[1px]
            "
          >
            <button
              className="
                p-1
                border-0 
                hover:opacity-70
                transition
                absolute
                left-9
                "
              onClick={onClose}
           
            >
             <IoMdClose size={18}  />

            </button>
            <div className="text-lg font-semibold">
          {label}
            </div>
          </div>
          {/*body*/}
          <div className="relative p-6 flex-auto">
          {body}
          </div>
          {/*footer*/}
          <div className="flex flex-col gap-2 p-6">
            <div 
              className="
                flex 
                flex-row 
                items-center 
                gap-4 
                w-full
              "
            >
             {footer}
            </div>
          
      
        </div>
      </div>
    </div>
 
  }
  </>
  

  
  )
}

