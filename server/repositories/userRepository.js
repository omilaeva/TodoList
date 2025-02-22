import {sql} from "./database.js";

export const registerUser = async (user) => {
    try {
        console.log(user);
        const result = await sql`INSERT INTO users (email, password_hash)
            VALUES (${user.email}, ${user.passwordHash}) RETURNING *`;
        return result[0];
    } catch (e) {
        // TODO implement error handling
        console.log(e);
        return null;
    }
}

export const getUserByEmail = async (email) => {
    try {
        const result = await sql`SELECT * FROM users WHERE email=${email}`;
        return result[0];
    } catch (e) {
        // TODO implement error handling
        return null;
    }
}