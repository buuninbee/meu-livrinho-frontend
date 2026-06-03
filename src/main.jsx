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
import Index from "./modules/usuarioResponsavel/layout/Index.jsx";
import LayoutSemLogin from "./modules/shared/layout/Index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<App />} />
          <Route path="/livro/:id" element={<LivroPagina />} />
        </Route>

        <Route element={<LayoutSemLogin />}>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Route>

        <Route path="/perfil-responsavel" element={<PerfilResponsavel />} />
        <Route path="/perfil-dependente" element={<PerfilDependente />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
