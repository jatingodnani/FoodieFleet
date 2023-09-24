import React from 'react'

function Desc({description,review}) {
  const reviewTotal = review.reduce(
    (accumulator, currentValue) => accumulator + currentValue.rating,
    0
  );

  const reviewAverage = reviewTotal / review.length;
  return (
    <>
     <div className="flex items-end">
              <div className="ratings mt-2 flex items-center">
                <p>*****</p>
                <p className="text-reg ml-3">{reviewAverage?reviewAverage:null}</p>
              </div>
              <div>
                <p className="text-reg ml-4">{review.length} Reviews</p>
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