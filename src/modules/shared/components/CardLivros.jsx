import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import BadgeGenero from "./BadgeGenero";
import { Star } from "lucide-react";
import { NavLink } from "react-router";
import ImagemPadrao from "@/assets/capaPadrao.png";

function CardLivros({ nome, genero, autor, ano, descricao, avaliacao, capa, id }) {
  return (
    <div className="w-full cursor-pointer min-w-80 max-w-sm bg-gray-50 border border-gray-300 rounded-lg">
      <Collapsible className="rounded-md data-[state=open]:bg-muted">
        <CollapsibleTrigger asChild>
          <div className="grid gap-3 px-3 py-5">
            <div className="grid gap-3 h-xl">
              <div className="w-auto min-h-xl ">
                <img
                  className="w-auto min-h-125"
                  height={300}
                  src={capa ? capa : ImagemPadrao}
                  alt={nome}
                  srcset=""
                />
              </div>

              <BadgeGenero genero={genero} />
            </div>
            <div>
              <h3 className="text-xl font-black">{nome}</h3>
              <p className="text-lg">{autor}</p>
            </div>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="grid items-start gap-2 p-2.5 pt-0 text-sm">
          <h4 className="text-xl font-bold">Sobre a obra:</h4>
          <div className="flex justify-between">
            <p className="text-lg font-medium">Ano: {ano}</p>
            <div className="flex items-center gap-1">
              <span className="text-lg font-medium">Nota: {avaliacao}</span>
              <Star className="w-5 text-amber-400" />
            </div>
          </div>
          <p className="text-xl mb-3">{descricao}</p>

          <NavLink
            to={`/livro/${id}`}
            className="bg-pink-600 text-white text-lg text-center font-medium p-2 rounded-xl"
          >
            Ver mais{" "}
          </NavLink>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

export default CardLivros;
