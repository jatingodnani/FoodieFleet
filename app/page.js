import Image from "next/image";
import Header from "./components/header";
import Cards from "./components/cards";
import { PrismaClient } from "@prisma/client";
import handler from "./api/seed";
const prisma = new PrismaClient();

const fetchresto = async () => {
  let res = await prisma.restaurant.findMany({
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
  return res;
};
export default async function Home() {
  const restaurant = await fetchresto();

  return (
    <main className="bg-gray-100 min-h-screen w-screen overflow-x-hidden">
      <main className="max-w-screen-2xl m-auto bg-white">
        <main>
          <Header />

          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            {/* CARD */}
            {restaurant.map((eachresto) => (
              <Cards key={eachresto.id} eachresto={eachresto} />
            ))}
          </div>
        </main>
      </main>
    </main>
  );
}
