import Link from "next/link";
import Desc from "./desc";
import Review from "./review";
import Schedule from "./Schedule";
import Imageresto from "./image";
import { PrismaClient } from "@prisma/client";
import Heading from "./heading"
const prisma=new PrismaClient();
const specificresto=async(slug)=>{
  console.log(slug)
  const resturant=await prisma.restaurant.findUnique({
    where:{
       slug
    },
    select:{
      id:true,
      name:true,
      images:true,
      description:true,
      review:true,

      
    }
})
return resturant
}
async function RestaurantDetail({params}) {
  const resturant=await specificresto(params.slug)
  
 let name=params.slug.split("-");
 name[name.length-1]=`(${name[name.length-1]})`

  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Heading name={name}/>

        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <nav className="flex text-reg border-b pb-2">
              <Link href="{`/resturant/${params.slug}`}" className="mr-7">
                Overview
              </Link>
              <Link href={`/restomenu/${params.slug}`} className="mr-7">
                Menu
              </Link>
            </nav>

            <div className="mt-4 border-b pb-6">
              <h1 className="font-bold text-6xl">{resturant.name}</h1>
            </div>
            <Desc review={resturant.review} description={resturant.description} />
            <Imageresto images={resturant.images}/>
            
            <Review review={resturant.review}/>
           
          </div>
          <Schedule  />
        </div>
      </main>
    </main>
  );
}

export default RestaurantDetail;
