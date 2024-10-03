import NextAuth from "next-auth"
import github from "next-auth/providers/github"
import { action } from "./src/app/register/action";
import { setUserId } from "./src/app/utils";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [github],
    callbacks: {
        async signIn({user}) {
            if (user.name) {
                const formData = new FormData();
                formData.append('username', user.name);
                formData.append('password', '');
                try {
                    const data = await action(formData);
                    if(data.code === 0) {
                        setUserId(data.data?.id || "");
                    }
                } catch (error) {
                    alert(`catch error: ${(error as Error).message}`);
                    throw new Error('123');
                }
            }
            return true;
        }
    }
})