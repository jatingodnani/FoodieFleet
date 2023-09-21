import React from 'react'

function Card({menu}) {
  return (
    <div className="flex flex-wrap justify-between">
             {
                menu.map((item)=>(
                    <div key={item.id} className=" border rounded p-3 w-[49%] mb-3">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="font-light mt-1 text-sm">
                      {item.description}
                    </p>
                    <p className="mt-7">{item.price}</p>
                  </div>
               
                ))
             }
              
            </div>
  )
}

export default Card