import {z} from "zod";

export const registerUserValidator = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.coerce.string().min(8),
    isVerified: z.boolean().optional()
}).superRefine(({confirmPassword, password}, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match",
            path: ['confirmPassword']
        });
    }
});

export const loginUserValidator = z.object({
    email: z.string().email(),
    password: z.string().min(8)
});