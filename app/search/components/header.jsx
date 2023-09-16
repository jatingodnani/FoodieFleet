"use client";
import { useState } from "react";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function regionspecific(city) {
  const specific = await prisma.location.findUnique({
    where: {
        name:{
          equals:city
        }
    },
    select: {
      restaurant: true,
    },
  });
  return specific;
}
const Headersearch = () => {
  const [searchinpu, setinpu] = useState("");

  const searching = () => {
    // regionspecific()
    //   .then((arr) => console.log(arr))
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
      <div
        className="text-left text-lg py-3 m-auto flex justify-center"
        onClick={searching}
      >
        <input
          className="rounded  mr-3 p-2 w-[450px]"
          type="text"
          value={searchinpu}
          placeholder="State, city or town"
          onChange={(e) => setinpu(e.target.value)}
        />
        <button className="rounded bg-red-600 px-9 py-2 text-white">
          Let's go
        </button>
      </div>
    </div>
  );
};

export default Headersearch;
