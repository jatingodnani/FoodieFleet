import React from "react";

function Card({eachcard}) {
    console.log(eachcard)
  return (
  
      <div className="border-b flex pb-5 mt-2">
        <img
          src={eachcard.main_image}
          alt=""
          className="w-44 rounded"
        />
        <div className="pl-5">
          <h2 className="text-3xl">{eachcard.name}</h2>
          <div className="flex items-start">
            <div className="flex mb-2">*****</div>
            <p className="ml-2 text-sm">Awesome</p>
          </div>
          <div className="mb-9">
            <div className="font-light flex text-reg">
              <p className="mr-4">{eachcard.price}</p>
              <p className="mr-4">{eachcard.region}</p>
              <p className="mr-4">{eachcard.location}</p>
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
