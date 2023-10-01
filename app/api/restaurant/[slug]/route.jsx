import { times } from "@/data/partytime";
import { errorhandler } from "@/middleware/error";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma=new PrismaClient()
export async function GET(req,{params}){
   
    const slug=params.slug;
    const grpsize=req.nextUrl.searchParams.get("grpsize");
    const booktime=req.nextUrl.searchParams.get("booktime");
   const bookdate=req.nextUrl.searchParams.get("bookdate");
    console.log(slug,grpsize,booktime,bookdate)
    if(!bookdate || !grpsize  || !bookdate) return errorhandler(400,"fill all details");
    const val=times.find(t=>{
        return  t.time==booktime
        
    });
   
    return NextResponse.json({status:"passed",respnese:val.searchTimes})
}