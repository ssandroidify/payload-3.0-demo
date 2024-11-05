import { z } from "zod";

export const AuthSignUpValidator = z.object({
  name: z.string().min(4),
  phone: z
    .number()
    .min(10, { message: "Phone number must be at leat 10 digit long" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at leat 8 characters long" }),
  srcmId: z
    .string()
    .min(8, { message: "SRCM ID must be at leat 8 characters long" }),
});

export const AuthSignInValidator = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at leat 8 characters long" }),
});

export type TAuthSignUpValidator = z.infer<typeof AuthSignUpValidator>;
export type TAuthSignInValidator = z.infer<typeof AuthSignInValidator>;
