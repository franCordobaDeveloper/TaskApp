import { z } from "zod";

export const registerSchema = z.object({
    username: z.string({
        required_error: "El nombre de usuario es requerido.",
    }),
    email: z.string({
        required_error: "El email es requerido"
    }).email({
        message: "El email es invalido"
    }),
    password: z.string({
        required_error: "La contraseña es requerida."
    })
})