import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import BadgeGenero from "./BadgeGenero";
import { Star } from "lucide-react";
import { NavLink } from "react-router";

function CardLivros({ nome, genero, autor, ano, descricao, avaliacao, capa }) {
  return (
    <div className="mx-auto w-full min-w-2xs max-w-sm bg-gray-50 border border-gray-300 rounded-lg">
      <Collapsible className="rounded-md data-[state=open]:bg-muted">
        <CollapsibleTrigger asChild>
          <div className="grid gap-3 px-3 py-5">
            <div className="grid gap-3">
              <div className="w-auto ">
                <img className="w-auto h-auto " src={capa} alt={nome} srcset="" />
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
            to="/livro"
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
