import Card from "../components/card/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div id="home" className=" w-full h-[33vh]">
        <h1 className="text-3xl text-center">Bem Que te Fiz</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi tempora
          voluptates possimus qui nobis voluptatem officia velit. Atque fugit
          aliquid incidunt omnis, excepturi mollitia sint, ipsum dicta ex
          molestias cumque!
        </p>
      </div>
      <div className="p-4">
        <Card />
      </div>
    </main>
  );
}
