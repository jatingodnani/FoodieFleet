import React from "react";

function Card({ eachcard, searchParams }) {
  // console.log(eachcard.review, eachcard.location);
  const reviewTotal = eachcard.review.reduce(
    (accumulator, currentValue) => accumulator + currentValue.rating,
    0
  );

  const reviewAverage = reviewTotal / eachcard.review.length;

  return (
    <div className="border-b flex pb-5 mt-2">
      <img src={eachcard.main_image} alt="" className="w-44 rounded" />
      <div className="pl-5">
        <h2 className="text-3xl">{eachcard.name}</h2>
        <div className="flex items-center">
          <div className="flex mb-2">{reviewAverage ?reviewAverage:null}</div>
          <p className="ml-2 text-xl font-bold capitalize">{ reviewAverage > 4 ? "best" : (reviewAverage > 3 ? "good" : "poor")}</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <p className="mr-4">{eachcard.price}</p>
            <p className="mr-4">{eachcard.region.name}</p>
            <p className="mr-4">{eachcard.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <a href="">View more information</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
