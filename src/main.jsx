import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import LivroPagina from "./modules/shared/pages/LivroPagina.jsx";
import Login from "@/pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route index path="/livro" element={<LivroPagina />} />
        <Route index path="/login" element={<Login />} />
        <Route index path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
