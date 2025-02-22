import { PUBLIC_INTERNAL_API_URL } from "$env/static/public";
import {redirect} from "@sveltejs/kit";

const COOKIE_KEY = "auth";

const apiRequest = async (url, data) => {
    console.log(JSON.stringify(data));

    return await fetch(`${PUBLIC_INTERNAL_API_URL}${url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
};

export const actions = {
    login: async ({ request, cookies }) => {
        const data = await request.formData();
        const response =  await apiRequest(
            "/api/auth/login",
            Object.fromEntries(data),
        );
        if (response.ok) {
            const responseCookies = response.headers.getSetCookie();
            const authCookie = responseCookies.find((cookie) =>
                cookie.startsWith(COOKIE_KEY),
            );
            const cookieValue = authCookie.split("=")[1].split(";")[0];
            cookies.set(COOKIE_KEY, cookieValue, { path: "/", secure: false });
            throw redirect(302, "/");
        }
        const responseBody = await response.json();
        return {success: false, errors: responseBody.error.issues};
    },
    register: async ({ request }) => {
        const data = await request.formData();
        const response = await apiRequest(
            "/api/auth/register",
            Object.fromEntries(data),
        );
        if (response.ok) {
            throw redirect(302, "/auth/login?registered=true");
        }
        const responseBody = await response.json();
        return {success: false, errors: responseBody.error.issues};
    },
};