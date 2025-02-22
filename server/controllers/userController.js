import {zValidator} from "zValidator";
import * as userRepository from "../repositories/userRepository.js";
import {hash, verify} from "jsr:@denorg/scrypt@4.4.4";
import {getCookie, setCookie} from "jsr:@hono/hono@4.6.5/cookie";
import {loginUserValidator, registerUserValidator} from "../validators/userValidator.js";
import * as jwt from "jsr:@hono/hono@4.6.5/jwt";

const COOKIE_KEY = "auth";
const JWT_SECRET = "secret";

export const registerUser = [
    zValidator("json", loginUserValidator),
    async (c) => {
        const user = c.req.valid("json");
        const passwordHash = hash(user.password.trim());
        const result = await userRepository.registerUser({
            email: user.email.trim().toLowerCase(),
            passwordHash: passwordHash
        });
        if (result) {
            return c.json(user);
        }
        c.status(400);
        return c.json({error: {issues: [{message: "User with this email already exists"}]}});
    }
];

export const login = [
    zValidator("json", loginUserValidator),
    async (c) => {
        const user = c.req.valid("json");
        const registeredUser = await userRepository.getUserByEmail(user.email.trim().toLowerCase());
        if (registeredUser) {
            if (verify(user.password.trim(), registeredUser.password_hash)) {
                const payload = {
                    id: registeredUser.id,
                    email: registeredUser.email,
                    exp: Math.floor(Date.now() / 1000) + 60,
                };

                const token = await jwt.sign(payload, JWT_SECRET);

                setCookie(c, COOKIE_KEY, token, {
                    path: "/",
                    domain: "localhost",
                    httpOnly: true,
                    sameSite: "lax"
                });
                return c.json({message: `Loggied in as ${registeredUser.email}`});
            }
        }
        c.status(400);
        return c.json({error: {issues: [{message: "Invalid email or password"}]}});
    }
];

export const verifyToken = async (c) => {
    const token = getCookie(c, COOKIE_KEY);
    if (!token) {
        c.status(401);
        return c.json({
            "message": "No token found!",
        });
    }

    try {
        const payload = await jwt.verify(token, JWT_SECRET);
        payload.exp = Math.floor(Date.now() / 1000) + 60;

        const refreshedToken = await jwt.sign(payload, JWT_SECRET);
        setCookie(c, COOKIE_KEY, refreshedToken, {
            path: "/",
            domain: "localhost",
            httpOnly: true,
            sameSite: "lax",
        });

        return c.json({
            "message": "Valid token!",
        });
    } catch (e) {
        c.status(401);
        return c.json({
            "message": "Invalid token!",
        });
    }
}