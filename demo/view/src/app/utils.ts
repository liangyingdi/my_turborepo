'use server'
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function deleteCookie(name: string) {
    cookies().set(name, '', { maxAge: 0 });
    redirect('/login');
}

export const checkCookie = (path: string) => {
    const { value } = cookies().get('token') ?? {};
    if (!!value) {
        redirect(path ? path : '/');
    } else {
        redirect('/login');
    }
}

export const setCookie = (name: {[username: string]: string}) => {
    const token = btoa(JSON.stringify({
        name,
    }));
    cookies().set({
        name: 'token',
        value: token,
        maxAge: 120,
        httpOnly: true,
    });
    redirect('/');
}

export const getCookie = (name: string) => {
    const { value } = cookies().get(name) ?? {};
    return value;
}
