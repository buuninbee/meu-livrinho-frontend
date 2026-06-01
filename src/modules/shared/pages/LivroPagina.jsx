import CarrinhoCompras from "@/modules/usuarioResponsavel/components/CarrinhoCompras";
import logo from "@/assets/logo.svg";
import { Search } from "lucide-react";
import { NavLink, useParams } from "react-router";
import { LivroModel } from "../models/LivroModel";
import { useEffect, useState } from "react";

const LivroPagina = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const buscarLivro = async () => {
      try {
        const { data } = await LivroModel(id);
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    buscarLivro();
  }, [id]);

  if (loading) {
    return <LivroPaginaSkeleton />;
  }

  // ✅ Mostrar erro
  if (error) {
    return <p>Erro ao carregar livro</p>;
  }

  // ✅ Mostrar se não encontrou
  if (!data) {
    return <p>Livro não encontrado</p>;
  }

  const capaImg = `https://vknwqkblxlyaedbnigwc.supabase.co/storage/v1/object/public/biblioteca/${data.cover_path}`;
  const pdfLivro = `https://vknwqkblxlyaedbnigwc.supabase.co/storage/v1/object/public/biblioteca/${data.pdf_path}`;

  return (
    <>
      <header className="bg-black grid gap-6 px-6 py-4 mb-6">
        <nav className="flex justify-between items-center">
          <NavLink to="/" className="w-58">
            <img src={logo} alt="" />
          </NavLink>
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
      <main className="grid px-6">
        <section className="mb-6">
          <div className="flex gap-3 items-center justify-between mb-4">
            <img className="max-w-80 max-h-80" src={capaImg} alt="" srcset="" />
            <ul className="grid gap-6">
              <li className="grid gap-1 px-6 py-4 border border-gray-800 rounded-2xl text-center">
                <span className="text-xl font-medium text-gray-600">Ano</span>
                <p className="text-sm">{data?.publish_year}</p>
              </li>
              <li className="grid gap-1 px-6 py-4 border border-gray-500 rounded-2xl text-center">
                <span className="text-xl font-medium text-gray-600">Avaliação</span>
                <p className="text-sm">{data?.total_reviews}</p>
              </li>
              <li className="grid gap-1 px-6 py-4 border border-gray-500 rounded-2xl text-center">
                <span className="text-xl font-medium text-gray-600">Genero</span>
                <p className="text-sm">Aventura</p>
              </li>
            </ul>
          </div>
          <div className="grid gap-1">
            <h2 className="text-2xl font-medium">{data?.title}</h2>
            <p className="text-sm">Autor: {data?.publisher}</p>
          </div>
        </section>

        <section className="mb-6">
          <div className="grid gap-4">
            <div className="grid gap-1.5">
              <h3 className="text-2xl">Descrição:</h3>
              <p className="text-lg">{data?.description}</p>
            </div>
            <NavLink
              target="_blank"
              to={pdfLivro}
              className="bg-pink-600 text-white text-lg text-center font-medium p-2 rounded-xl"
            >
              Ler o livro
            </NavLink>
          </div>
        </section>
      </main>
    </>
  );
};

export default LivroPagina;
