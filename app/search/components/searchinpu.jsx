"use client";
import React from "react";

import Link from "next/link";
function Searchinpu({ locat, reg }) {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4 flex flex-col justify-between gap-3 items-start ">
        <h1 className="mb-2 font-bold text-3xl">Region</h1>

        {locat.map((res, index) => (
          <Link
            href={{
              pathname: "/search",
              query: { city: res.name },
            }}
            className="cursor-pointer text-reg font-light hover:bg-gray-200 w-3/4 pl-2 pt-2 rounded pb-2"
            key={index}
          >
            {res.name}
          </Link>
        ))}
      </div>
      <div className="border-b pb-4 mt-3 flex flex-col gap-2  ">
        <h1 className="mb-2 tex-3xl font-bold">Cuisine</h1>
        {reg.map((res, index) => (
          <Link
            href={{
              pathname: "/search",
              query: { city: res.name },
            }}
            className="cursor-pointer text-reg font-light hover:bg-gray-200 w-3/4 pl-2 pt-2 rounded pb-2"
            key={index}
          >
            {res.name}
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <button className="border w-full text-reg font-light rounded-l p-2">
            $
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light p-2">
            $$
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r">
            $$$
          </button>
        </div>
      </div>
    </div>
  );
}

export default Searchinpu;
