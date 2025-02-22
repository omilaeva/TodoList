import { decodeJwt } from "jose";
import {PUBLIC_INTERNAL_API_URL} from "$env/static/public";

const COOKIE_KEY = "auth";

export const handle = async ({ event, resolve }) => {
    const authCookie = event.cookies.get(COOKIE_KEY);
    if (authCookie) {
        const response = await fetch(`${PUBLIC_INTERNAL_API_URL}/api/auth/verify`, {
            method: "POST",
            headers: {
                "cookie": `${COOKIE_KEY}=${authCookie}`,
            },
        });

        // response not ok, clear cookie
        if (!response.ok) {
            event.cookies.delete(COOKIE_KEY, { path: "/" });
            return await resolve(event);
        }

        // get cookies from response headers and set the cookie
        const responseCookies = response.headers.getSetCookie();
        const cookie = responseCookies.find((cookie) =>
            cookie.startsWith(COOKIE_KEY)
        );

        // if no cookie, no need to extract it -- just resolve
        if (!cookie) {
            return await resolve(event);
        }

        const cookieValue = cookie.split("=")[1].split(";")[0];
        event.cookies.set(COOKIE_KEY, cookieValue, { path: "/", secure: false });


        try {
            event.locals.user = decodeJwt(authCookie)
        } catch (e) {
            console.log(e);
        }
    }

    return await resolve(event);
};