import { auth } from "@view/nextauth";

export const middleware = async () => {
    const session = await auth();
    console.log(JSON.stringify(session));
};

export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};