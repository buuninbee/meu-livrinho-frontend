import { z } from "zod";

export const schemaEditarPerfilResponsavel = z.object({
  nome: z.string().min(3, "Digite seu nome"),
  numeroTelefone: z.string().min(8, "Número inválido"),
});

export const schemaEditarPerfilDependente = z.object({
  nome: z.string().min(3, "Digite seu nome"),
});
