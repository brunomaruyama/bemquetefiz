import { produtos } from "../produtos/produtos";
import Image from "next/image";

export default function Card() {
  return produtos.map((produto) => {
    return (
      <div
        key={produto.nome}
        className="overflow-hidden border border-rose-300 ring-rose-300 group hover:ring-2 duration-300 max-w-[240px] rounded-3xl"
      >
        <Image
          className="w-full opacity-85 group-hover:opacity-100 group-hover:scale-105 duration-300 overflow-hidden"
          src={produto.src}
          alt={produto.nome}
          width={200}
          height={200}
        />
        <div className="p-2 space-y-2 text-sm">
          <h3 className="font-bold ">{produto.nome}</h3>
          <p className="font-extralight">{produto.descricao}</p>
          <p className="font-extralight">
            <b>Ingredientes: </b>
            {`${produto.ingredientes.join(", ")}`}
          </p>
          <p className="text-center text-base font-bold">{produto.preco}</p>
        </div>
      </div>
    );
  });
}
