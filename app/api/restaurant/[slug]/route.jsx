import { times } from "@/data/partytime";
import { errorhandler } from "@/middleware/error";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function GET(req, { params }) {
  const slug = params.slug;
  const grpsize = req.nextUrl.searchParams.get("grpsize");
  const booktime = req.nextUrl.searchParams.get("time");
  const bookdate = req.nextUrl.searchParams.get("date");
  
  if (!bookdate || !grpsize || !bookdate)
    return errorhandler(400, "fill all details");
  console.log("hii",bookdate)
  const val = times.find((t) => {
    return t.time == booktime;
  })?.searchTimes;
 console.log(val)
  const showdata = await prisma.booking.findMany({
    where: {
      booking_time: {
        gte: new Date(`${bookdate}T${val[0]}`),
        lte: new Date(`${bookdate}T${val[val.length - 1]}`)
      },
    },
    select: {
      id:true,
      booking_time:true,
      number_of_people: true,
      booking_time: true,
      table: true,
    },
  });
  console.log(showdata)
  return NextResponse.json({
    status: "mwdmdwfl,dm,mdl,dlpassed",
    respnese: showdata,
  });
}
