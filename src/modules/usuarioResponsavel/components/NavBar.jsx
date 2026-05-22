import { Search } from "lucide-react";
import CarrinhoCompras from "@/modules/usuarioResponsavel/components/NavBar";
import logo from "@/assets/logo.svg";

const NavBar = () => {
  return (
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
  );
};

export default NavBar;
