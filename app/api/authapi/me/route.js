
import { asyncError, errorhandler } from "@/middleware/error"
import { headers } from "next/headers"
import * as jose from "jose"
import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { PrismaClient } from "@prisma/client"
const prisma=new PrismaClient()
export const GET=asyncError(async ()=>{
    const headerinstance=headers();
    const bearetoken=headerinstance.get("authorization");
   
 
  const deco=jwt.decode(bearetoken);
  console.log(deco.email)
  const user= await prisma.user.findMany({

    where:{
        email:deco.email
    },

    select:{
        id:true,
        first_name:true,
        last_name:true,
        city:true,
        email:true,
        

    }
})
console.log(user)
    return NextResponse.json({status:"pass",user:user})
})