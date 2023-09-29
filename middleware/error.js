import { NextResponse } from 'next/server'


export const errorhandler=(
    statuscode,
    err
    )=>{
  return NextResponse.json({ 
    message:err, 
    success: false},
    {status:statuscode}
  );
}
export const asyncError=(handleerror)=>(req,res)=>{
    return Promise.resolve(handleerror(req,res)).catch((error)=>
    errorhandler(500,error.message)
);
}