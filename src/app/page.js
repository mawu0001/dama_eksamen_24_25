import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ";
import IndexBoxes from "@/components/IndexBoxes";
import TicketCard from "@/components/TicketCard";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
  
      <main className="">
        <div className="relative my-20 flex place-content-center z-1">
          <div className="absolute -inset-36 text-center ">
          
          <h1 className=" text-4xl font-bold ">
            FOOFEST
            </h1> 
            <h3 className="text-3xl">7-DAY FESTIVAL</h3>
          </div>
          <Image src="/hero.png"  
        width={1000}
        height={800}
        alt="abstract image in orange and pink"/></div>
        <IndexBoxes />
        <Banner />
        <FAQ />
        <div className="p-4 flex justify-center text-3xl">
          <Link href="/Tickets">
           <Button background={true}>Tickets.</Button>
           </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-3xl mx-auto px-4 py-12 justify-center items-center md:gap-6">
            <TicketCard 
            type="Regular"
            price="799"
            bgColor="bg-pink"
            link="/Tickets"
          />
            <TicketCard
            type="VIP"
            price="1299"
            bgColor="bg-orange"
            link="/Tickets"
          />
        </div>
      </main>
  );
}
