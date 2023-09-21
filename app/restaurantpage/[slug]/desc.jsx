import React from 'react'

function Desc({description}) {
  return (
    <>
     <div className="flex items-end">
              <div className="ratings mt-2 flex items-center">
                <p>*****</p>
                <p className="text-reg ml-3">4.9</p>
              </div>
              <div>
                <p className="text-reg ml-4">600 Reviews</p>
              </div>
            </div>
            {/* RATING */} {/* DESCRIPTION */}
            <div className="mt-4">
              <p className="text-lg font-light">
               {description}
              </p>
            </div>
    </>
  )
}

export default Desc