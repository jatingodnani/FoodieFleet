import Image from 'next/image'
import Header from './components/header'
import Cards from './components/cards'

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen overflow-x-hidden">
  <main className="max-w-screen-2xl m-auto bg-white">
    
    <main>
 
     <Header/>
     {/* CARDS */}
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {/* CARD */}
     <Cards/>
        </div>
      
    </main>
  </main>
</main>

  )
}
