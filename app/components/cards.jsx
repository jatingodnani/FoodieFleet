import Link from "next/link";
import React from "react";
import Price from "./price";

function Cards({ eachresto }) {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href={`/restaurantpage/${eachresto.slug}`}>
        <img src={eachresto.main_image} alt="" className="w-full h-36" />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2">{eachresto.name}</h3>
          <div className="flex items-start">
            <div className="flex mb-2">*****</div>
            <p className="ml-2">77 reviews</p>
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className=" mr-3">{eachresto.region.name}</p>
            <p className="mr-3">
              <Price price={eachresto.price} />
            </p>
            <p>{eachresto.location.name}</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
}

export default Cards;
