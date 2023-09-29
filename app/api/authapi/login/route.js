import { errorhandler } from "@/middleware/error";
import { cookieSetter, jwttoken } from "@/utils/feature";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"
import { NextResponse } from "next/server";
const prisma=new PrismaClient();

export async function POST(req, res) {
   const body=await req.json();
   console.log(body)
   if(body.password===""|| body.email==""){
    errorhandler(404,"fill all the credentials")
   }
   const user=await prisma.user.findFirst({
    where:{
      email:body.email
    }
})
console.log(user)
   if(!user){
    errorhandler(404,"you are not registered")
   }
   const isMatch=await bcrypt.compare(body.password,user.password);
   console.log(isMatch)
   if(!isMatch){
    return errorhandler(400,"invalid e-mail or password")
   }
   const token=await jwttoken(body.email);
   cookieSetter(token,true)
   
  return NextResponse.json({success:"true"})
}