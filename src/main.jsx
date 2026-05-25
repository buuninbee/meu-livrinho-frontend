import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import LivroPagina from "./modules/shared/pages/LivroPagina.jsx";
import Login from "@/pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import PerfilResponsavel from "./modules/usuarioResponsavel/pages/PerfilResponsavel.jsx";
import PerfilDependente from "./modules/usuarioResponsavel/pages/PerfilDependente.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="/livro/:id" element={<LivroPagina />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        <Route path="/perfil-responsavel" element={<PerfilResponsavel />} />
        <Route path="/perfil-dependente" element={<PerfilDependente />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
