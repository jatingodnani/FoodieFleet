import { errorhandler } from "@/middleware/error";
import { cookieSetter, jwttoken } from "@/utils/feature";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

import bcrypt from "bcrypt"
const prisma=new PrismaClient();

export async function GET(){
    return NextResponse.json({status:"pass"})
}
export async function POST(req,res){
    const body=await req.json();
  
    const user=await prisma.user.findFirst({
        where:{
          email:body.email
        }
    })
    
     if(user){
        return errorhandler(400,"already you are reg")
     }
     const haspassword=await bcrypt.hash(body.password,10);
     const data=await prisma.user.create({
        data:{
            first_name: body.name,
            last_name: body.lastname,
            email: body.email,
            phone: body.phonenumber,
            password: haspassword,
            city: body.city,
        }
     })
    const token=await jwttoken(body.email);
    cookieSetter(token,true)
    return NextResponse.json({status:"pass",user:data})
}