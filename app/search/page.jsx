import { PrismaClient } from "@prisma/client";
import Headersearch from "./components/header";
import Searchinpu from "./components/searchinpu";
import Card from "../search/components/Card";
const prisma = new PrismaClient();
const givesearch = async (city,region) => {
  
  return await prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city,
        },
      },
      region:{
        name:{
          equals:region
        }
      }
    },
    select: {
      id: true,
      name: true,
      location: true,
      region: true,
      main_image: true,
      price:true,
      slug:true,
      location:true
    },
  });
};
const giveeachlocat = async () => {
  return await prisma.location.findMany({
    select: {
      name: true,
    },
  });
};
const giveeachregion = async () => {
  return await prisma.region.findMany({
    select: {
      name: true,
    },
  });
};
export default async function Search({ searchParams }) {
  const val = await givesearch(searchParams.city,searchParams.region);

  const locat = await giveeachlocat();
  const reg = await giveeachregion();
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Headersearch />

        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <Searchinpu locat={locat} searchParams={searchParams} reg={reg} />
          <div className="w-5/6 ml-6">
            {val.length > 0 ? (
              val.map((eachresto) => (
                <Card key={eachresto.id}  eachcard={eachresto} />
              ))
            ) : (
              <p>not found</p>
            )}
          </div>
        </div>
      </main>
    </main>
  );
}
