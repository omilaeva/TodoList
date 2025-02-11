import { z } from "zod";

export const todoValidator = z.object({
    name: z.string().min(3).max(30),
    done: z.coerce.boolean().default(false),
});