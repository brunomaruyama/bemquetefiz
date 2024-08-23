import Header from "@/components/header/page";
import Card from "../components/card/page";
import Image from "next/image";
import WhatsButton from "@/components/whatsbutton/whatsbutton";
import Footer from "@/components/footer/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div
        id="home"
        className="w-full h-3/4 sm:h-1/2 flex flex-col justify-center items-center p-4"
      >
        <div className="flex flex-shrink object-scale-down">
          <Image
            src="/logo.jpg"
            width={400}
            height={100}
            alt="logo"
            className="mix-blend-multiply h-auto w-auto object-contain"
          />
        </div>
        <div className="w-4/5 lg:w-1/2 rounded-3xl bg-white/75 p-5">
          <p className="font-extralight text-sm leading-snug">
            “Sabonetes, hidratantes, shampoos e condicionadores…e sempre algo
            mais! Aqui você encontra seus produtos para cuidados diários da pele
            e dos cabelos, formulados com ingredientes provenientes da natureza
            e todos aromatizados com óleos essenciais. São feitos por mim,
            artesanalmente, em pequenos lotes, tornando-os únicos e especiais.
            Sinta o BemQueTeFiz à sua pele e ao meio ambiente!”
          </p>
        </div>
      </div>
      <div className="p-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        <Card />
      </div>
      <Footer />
      <WhatsButton />
    </main>
  );
}
