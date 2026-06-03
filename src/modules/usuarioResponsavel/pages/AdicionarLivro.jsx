import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NavLink } from "react-router";
import { ChevronLeft } from "lucide-react";

const AdicionarLivro = () => {
  return (
    <>
      <main className="px-6">
        <section className="grid">
          <div className="">
            <div className="flex items-center mb-4 gap-2.5">
              <NavLink to="/">
                <ChevronLeft />
              </NavLink>
              <h1 className="text-2xl">Adicione um livro</h1>
            </div>

            <form className="grid gap-5" action="">
              <div className="grid gap-2">
                <label htmlFor="titulo">Título</label>
                <input
                  className="border border-gray-600 px-4 py-2 rounded-lg"
                  type="text"
                  id="titulo"
                />
              </div>
              <div className="grid ">
                <Field className="">
                  <FieldLabel htmlFor="picture">Livro Digital</FieldLabel>
                  <Input className="grid items-center" id="picture" type="file" />
                  <FieldDescription>Selecione um arquivo .epub.</FieldDescription>
                </Field>
                <p className="text-pretty mt-2 text-sm leading-5 text-muted-foreground sm:flex sm:items-center sm:justify-between">
                  <span className="pl-1 sm:pl-0">Tamanho máximo de arquivo: 50MB</span>
                </p>
              </div>
              <div className="grid gap-2">
                <label htmlFor="autor">Autor</label>
                <input
                  className="border border-gray-600 px-4 py-2 rounded-lg"
                  type="text"
                  id="autor"
                />
              </div>
              <div className="grid ">
                <Field className="">
                  <FieldLabel htmlFor="picture">Capa</FieldLabel>
                  <Input className="grid items-center" id="picture" type="file" />
                  <FieldDescription>Selecione um arquivo .png ou .jpg</FieldDescription>
                </Field>
                <p className="text-pretty mt-2 text-sm leading-5 text-muted-foreground sm:flex sm:items-center sm:justify-between">
                  <span className="pl-1 sm:pl-0">Tamanho máximo de arquivo: 50MB</span>
                </p>
              </div>
              <div className="grid gap-2">
                <label htmlFor="sinnopse">Sinopse</label>
                <textarea className="border border-gray-600 px-4 py-2 rounded-lg" id="sinnopse" />
              </div>

              <button className="bg-pink-600 text-white rounded-lg py-4">Salvar livro</button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default AdicionarLivro;
