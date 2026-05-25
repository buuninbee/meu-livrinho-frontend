import BadgeGenero from "@/modules/shared/components/BadgeGenero";
import CardLivros from "@/modules/shared/components/CardLivros";
import Footer from "@/modules/shared/components/Footer";
import NavBar from "@/modules/usuarioResponsavel/components/NavBar";
import { useEffect, useState } from "react";
import { ListaLivrosModel } from "./modules/shared/models/ListaLivrosModel";

function App() {
  const [livros, setLivros] = useState([]);
  const listaGenero = ["Fantasia", "Romance", "Terror", "Ficção", "Drama", "Aventura"];

  useEffect(() => {
    async function carregarLivros() {
      const { data } = await ListaLivrosModel();
      await setLivros(data || []);
    }

    carregarLivros();
  }, []);

  return (
    <>
      <NavBar />
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
              {livros.map(
                ({
                  id,
                  description,
                  cover_path,
                  genero = "Ficção",
                  publisher,
                  publish_year,
                  title,
                  total_reviews,
                }) => {
                  const capaImg = `https://vknwqkblxlyaedbnigwc.supabase.co/storage/v1/object/public/biblioteca/${cover_path}`;

                  return (
                    <li key={id}>
                      <CardLivros
                        nome={title}
                        genero={genero}
                        autor={publisher}
                        ano={publish_year}
                        descricao={description}
                        avaliacao={total_reviews}
                        capa={capaImg}
                        id={id}
                      />
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div className="grid gap-4">
            <h2 className="text-3xl font-medium">Fabulas</h2>

            <ul className="flex gap-3 overflow-auto sm:flex">
              {livros.map(
                ({
                  id,
                  description,
                  cover_path,
                  genero = "Ficção",
                  publisher,
                  publish_year,
                  title,
                  total_reviews,
                }) => {
                  const capaImg = `https://vknwqkblxlyaedbnigwc.supabase.co/storage/v1/object/public/biblioteca/${cover_path}`;

                  return (
                    <li key={id}>
                      <CardLivros
                        nome={title}
                        genero={genero}
                        autor={publisher}
                        ano={publish_year}
                        descricao={description}
                        avaliacao={total_reviews}
                        capa={capaImg}
                        id={id}
                      />
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div className="grid gap-4 mb-8">
            <h2 className="text-3xl font-medium">Historias para ler antes de dormir</h2>

            <ul className="flex gap-3 overflow-auto sm:flex">
              {livros.map(
                ({
                  id,
                  description,
                  cover_path,
                  genero = "Ficção",
                  publisher,
                  publish_year,
                  title,
                  total_reviews,
                }) => {
                  const capaImg = `https://vknwqkblxlyaedbnigwc.supabase.co/storage/v1/object/public/biblioteca/${cover_path}`;

                  return (
                    <li key={id}>
                      <CardLivros
                        nome={title}
                        genero={genero}
                        autor={publisher}
                        ano={publish_year}
                        descricao={description}
                        avaliacao={total_reviews}
                        capa={capaImg}
                        id={id}
                      />
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
