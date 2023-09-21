import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma=new PrismaClient();
export async function GET(req,res){
    const slug=req.url.split("restomenu/")[1]
    const resturant=await prisma.restaurant.findUnique({
        where:{
         slug
        },
        select:{
            items:true
        }
    })

    return NextResponse.json({message:"hgjhjhiojh",resto:resturant})
}