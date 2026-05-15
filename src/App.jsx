import { Search } from "lucide-react";
import logo from "../src/assets/logo.svg";
import BadgeGenero from "./modules/shared/components/BadgeGenero";
import CarrinhoCompras from "./modules/usuarioResponsavel/components/CarrinhoCompras";
import CardLivros from "./modules/shared/components/CardLivros";
import Footer from "./modules/shared/components/Footer";

function App() {
  const listaGenero = ["Fantasia", "Romance", "Terror", "Ficção", "Drama", "Aventura"];

  const livros = [
    {
      id: 1,
      nome: "O Nome do Vento",
      genero: "Fantasia",
      autor: "Patrick Rothfuss",
      ano: 2007,
      avaliacao: 5,
      capa: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
      descricao:
        "Kvothe relembra sua trajetória desde a infância difícil até se tornar uma figura lendária.",
    },

    {
      id: 2,
      nome: "Orgulho e Preconceito",
      genero: "Romance",
      autor: "Jane Austen",
      ano: 1813,
      avaliacao: 4,
      capa: "https://images-na.ssl-images-amazon.com/images/I/81a4kCNuH+L.jpg",
      descricao:
        "Elizabeth Bennet enfrenta conflitos sociais e emocionais ao conhecer o Sr. Darcy.",
    },

    {
      id: 3,
      nome: "Drácula",
      genero: "Terror",
      autor: "Bram Stoker",
      ano: 1897,
      avaliacao: 5,
      capa: "https://tse4.mm.bing.net/th/id/OIP.zVDg3hkuefg7xPW-0bRnzAHaKW?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
      descricao: "O clássico vampiro Conde Drácula espalha terror enquanto um grupo tenta detê-lo.",
    },

    {
      id: 4,
      nome: "Duna",
      genero: "Ficção",
      autor: "Frank Herbert",
      ano: 1965,
      avaliacao: 5,
      capa: "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL.jpg",
      descricao:
        "Uma disputa política e religiosa em um planeta desértico muda o destino do universo.",
    },

    {
      id: 5,
      nome: "A Culpa é das Estrelas",
      genero: "Drama",
      autor: "John Green",
      ano: 2012,
      avaliacao: 4,
      capa: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
      descricao: "Dois adolescentes enfrentam o câncer enquanto constroem uma relação intensa.",
    },

    {
      id: 6,
      nome: "O Hobbit",
      genero: "Aventura",
      autor: "J.R.R. Tolkien",
      ano: 1937,
      avaliacao: 5,
      capa: "https://images-na.ssl-images-amazon.com/images/I/91M9xPIf10L.jpg",
      descricao: "Bilbo Bolseiro embarca em uma jornada perigosa para enfrentar um dragão.",
    },
  ];

  return (
    <>
      <header className="bg-black grid gap-6 px-6 py-4 mb-6">
        <nav className="flex justify-between items-center">
          <div className="w-58">
            <img src={logo} alt="" />
          </div>
          <CarrinhoCompras />
        </nav>

        <div className="flex items-center px-3 py-1 bg-white rounded-xl">
          <label htmlFor="seach">
            {" "}
            <Search />{" "}
          </label>
          <input
            className="w-full h-full py-2 px-3"
            placeholder="Digite o nome do livro"
            type="text"
            id="seach"
          />
        </div>
      </header>
      <main className="px-6">
        <section className="mb-6">
          <ul className="flex gap-4 overflow-x-auto sm:fle">
            {listaGenero.map((genero) => {
              return (
                <li key={genero}>
                  <BadgeGenero genero={`${genero}`} />
                </li>
              );
            })}
          </ul>
        </section>

        <section className="grid gap-10">
          <div className="grid gap-4">
            <h2 className="text-3xl font-medium">Literatura Infantil</h2>

            <ul className="flex gap-3 overflow-auto sm:flex">
              {livros.map(({ id, nome, capa, genero, autor, ano, descricao, avaliacao }) => {
                return (
                  <li key={id}>
                    <CardLivros
                      nome={nome}
                      genero={genero}
                      autor={autor}
                      ano={ano}
                      descricao={descricao}
                      avaliacao={avaliacao}
                      capa={capa}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="grid gap-4">
            <h2 className="text-3xl font-medium">Fabulas</h2>

            <ul className="flex gap-3 overflow-auto">
              {livros.map(({ id, nome, capa, genero, autor, ano, descricao, avaliacao }) => {
                return (
                  <li key={id}>
                    <CardLivros
                      nome={nome}
                      genero={genero}
                      autor={autor}
                      ano={ano}
                      descricao={descricao}
                      avaliacao={avaliacao}
                      capa={capa}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="grid gap-4 mb-8">
            <h2 className="text-3xl font-medium">Historias para ler antes de dormir</h2>

            <ul className=" flex gap-3 overflow-auto sm:flex">
              {livros.map(({ id, nome, capa, genero, autor, ano, descricao, avaliacao }) => {
                return (
                  <li key={id}>
                    <CardLivros
                      nome={nome}
                      genero={genero}
                      autor={autor}
                      ano={ano}
                      descricao={descricao}
                      avaliacao={avaliacao}
                      capa={capa}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
