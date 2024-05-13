import * as z from "zod";

export const formSchema = z.object({
  firstName: z
    .string({ required_error: "Veuillez renseigner votre nom" })
    .min(2, {
      message: "Le nom doit être au moins de 2 caractères.",
    }),
  email: z
    .string({ required_error: "Veuillez renseigner votre email" })
    .email({ message: "Veuillez saisir un email valide" }),
});
