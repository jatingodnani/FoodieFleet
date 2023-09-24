import React from "react";

function Review({review}) {
  console.log(review)

  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
        What {review.length>0?review.length:null} people are saying
      </h1>

      <div className="border-b pb-7 mb-7">
     {review.length>0?
      review.map((each)=> <div key={each.id} className="flex mt-4">
      <div className="w-1/6 flex flex-col items-center">
        <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
          <h2 className="text-white text-2xl">{each.first_name[0]}{each.last_name[0]}</h2>
        </div>
        <p className="text-center">{each.first_name} {each.last_name}</p>
      </div>
      <div className="ml-10 w-5/6">
        <div className="flex items-center">
          <div className="flex mr-5">{each.rating}</div>
        </div>
        <div className="mt-5">
          <p className="text-lg font-light">
           {each.text}
          </p>
        </div>
      </div>
    </div>):<p>No review</p>
     }
      </div>
    </div>
  );
}

export default Review;
