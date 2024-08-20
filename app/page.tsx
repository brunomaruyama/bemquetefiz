import Header from "@/components/header/page";
import Card from "../components/card/page";
import Image from "next/image";
import WhatsButton from "@/components/whatsbutton/whatsbutton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div
        id="home"
        className="w-full h-[40vh] flex flex-col justify-center items-center p-4 overflow-clip"
      >
        <Image
          src="/logo.jpg"
          width={400}
          height={100}
          alt="logo"
          className="mix-blend-multiply"
        />
        <div className="w-4/5 sm:w-1/2 rounded-3xl relative bottom-0 bg-white/70 p-5">
          <p className="font-extralight">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            tempora voluptates possimus qui nobis voluptatem officia velit.
            Atque fugit aliquid incidunt omnis, excepturi mollitia sint, ipsum
            dicta ex molestias cumque!
          </p>
        </div>
      </div>
      <div className="p-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        <Card />
      </div>
      <WhatsButton />
    </main>
  );
}
