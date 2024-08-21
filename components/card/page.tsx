import { produtos } from "../produtos/produtos";
import Image from "next/image";

export default function Card() {
  return produtos.map((produto) => {
    return (
      <div
        key={produto.nome}
        className="overflow-hidden shadow-lg group hover:shadow-rose-200 duration-500 max-w-[80vw] sm:max-w-[240px] rounded-3xl"
      >
        <Image
          className="w-full opacity-85 group-hover:opacity-100 group-hover:scale-105 duration-300 overflow-hidden"
          src={produto.src}
          alt={produto.nome}
          width={320}
          height={320}
        />
        <div className="p-2 space-y-2 text-sm leading-tight">
          <h3 className="font-bold ">{produto.nome}</h3>
          <p className="font-extralight overflow-hidden line-clamp-4">
            {produto.descricao}
          </p>
          <p className="font-semibold">
            Ingredientes:
            <span className="font-extralight overflow-hidden line-clamp-3">
              {produto.ingredientes.join(", ")}
            </span>
          </p>
          <p className="font-extralight">
            <span className="font-semibold">Peso: </span>
            {produto.peso}
          </p>
          <p className="text-center font-extralight">
            R$ <span className="font-bold text-base">{produto.preco}</span>
          </p>
        </div>
      </div>
    );
  });
}
