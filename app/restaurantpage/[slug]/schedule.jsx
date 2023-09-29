import { datereservation } from '@/data/data'
import React from 'react'
console.log(datereservation)
function Schedule() {
  return (
    <div className="w-[27%] relative text-reg shadow-xl">
    <div className="fixed w-[20%] bg-white rounded p-3 shadow">
      <div className="text-center border-b pb-2 font-bold">
        <h4 className="mr-7 text-lg">Make a Reservation</h4>
      </div>
      <div className="my-3 flex flex-col">
        <label htmlFor="">Party size</label>
        <select name="" className="py-3 border-b font-light" id="">
        {/* {datereservation?.map((perperson) => (
              <option key={perperson.person} value="">
                {perperson.person} person
              </option>
            ))} */}
         
          
        </select>
      </div>
      <div className="flex  ">
        <div className="flex flex-col w-[48%]">
          <label htmlFor="">Date</label>
          <input
            type="date"
            className="py-3 border-0 font-light w-28"
          />
        </div>
        <div className="flex flex-col w-[48%]">
          <label htmlFor="">Time</label>
          <select name="" id="" className="py-3 border-b font-light">
            <option value="">7:30 AM</option>
            <option value="">9:30 AM</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-12">
          Find a Time
        </button>
      </div>
    </div>
  </div>
  )
}

export default Schedule