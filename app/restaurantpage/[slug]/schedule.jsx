"use client"
import { datereservation } from '@/data/data'
import React, { useState } from 'react'
import {times} from "@/data/partytime"

 function Schedule({opening,closing,slug}) {

  const filtertim=times.filter((eachtime)=>eachtime.time>=opening && eachtime.time<=closing);
   const [extradata,setextradata]=useState({
      noofperson:"",
      date:"",
      time:""
   })
   const changedata=(e)=>{
    setextradata((prev)=>{
      return{
         ...prev,
         [e.target.name]:e.target.value
      }
    })
   }
   console.log(extradata)
const findtime=async()=>{
  const res=await fetch(`/api/restaurant/1?time=${extradata.time}`)
   const data=await res.json();


}
  return (
    <div className="w-[27%] relative text-reg shadow-xl">
    <div className="fixed w-[20%] bg-white rounded p-3 shadow">
      <div className="text-center border-b pb-2 font-bold">
        <h4 className="mr-7 text-lg">Make a Reservation89</h4>
      </div>
      <div className="my-3 flex flex-col">
        <label htmlFor="">Party size</label>
        <select className="py-3 border-b font-light" value={extradata.noofperson} name="noofperson"  onChange={changedata}>
        {datereservation?.map((perperson) => (
              <option key={perperson.person} value={perperson.person}>
                {perperson.person} person
              </option>
            ))}
         
          
        </select>
      </div>
      <div className="flex  ">
        <div className="flex flex-col w-[48%]">
          <label htmlFor="">Date</label>
          <input
            type="date"
            className="py-3 border-0 font-light w-28"
            onChange={changedata}
            name='date'
            value={extradata.date}
          />
        </div>
        <div className="flex flex-col w-[48%]">
          <label htmlFor="">Time</label>
          <select  className="py-3 border-b font-light" value={extradata.time} name="time"  onChange={changedata}>
           {filtertim.map((time)=>(
              <option value={time.time}>{time.displayTime}</option>
           ))}
           
          </select>
        </div>
      </div>
      <div className="mt-5">
        <button 
        onClick={findtime}
        className="bg-red-600 rounded w-full px-4 text-white font-bold h-12">
          Find a Time
        </button>
      </div>
    </div>
  </div>
  )
}

export default Schedule