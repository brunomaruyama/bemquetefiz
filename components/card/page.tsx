import { produtos } from "../produtos/produtos";
import Image from "next/image";

export default function Card() {
  return produtos.map((produto) => {
    return (
      <div
        key={produto.nome}
        className="overflow-hidden shadow-lg hover:shadow-rose-200 duration-500 max-w-[80vw] sm:max-w-[240px] rounded-3xl group h-min hover:h-max transition-all card"
      >
        <div className="h-[260px] mb-3">
          <Image
            className={`h-full w-full opacity-85 group-hover:opacity-100 group-hover:scale-105 duration-300 overflow-hidden object-cover`}
            src={produto.src}
            alt={produto.nome}
            width={320}
            height={320}
          />
        </div>
        <div className="p-2 space-y-2 text-sm leading-tight text-left">
          <h3 className="font-bold ">{produto.nome}</h3>
          <p
            className={`line-clamp-4 font-extralight duration-300  group-hover:line-clamp-none transition-all`}
          >
            {produto.descricao}
          </p>
          <p className="font-semibold">
            Ingredientes:{" "}
            <span
              className={` font-extralight line-clamp-3 duration-300 group-hover:line-clamp-none transition-all`}
            >
              {produto.ingredientes.join(", ")}
            </span>
          </p>
          <p className="font-extralight">
            <span className="font-semibold">
              {produto.peso ? "Peso: " : "Conteudo: "}{" "}
            </span>
            {produto.peso ? produto.peso : produto.conteudo}
          </p>
          <p className="text-center font-extralight">
            R$ <span className="font-bold text-base">{produto.preco}</span>
          </p>
        </div>
      </div>
    );
  });
}
