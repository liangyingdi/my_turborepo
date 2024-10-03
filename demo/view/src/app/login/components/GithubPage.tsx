'use client';
import { signIn, useSession } from "next-auth/react";
import styles from "../../page.module.css";
import Link from "next/link";
import { action } from "../../register/action";
import { useState } from "react";

export const GithubPage = () => {
    const { data: githubData, status } = useSession();
    const [data, setData] = useState<resultType>();

    const handleClick = async () => {
        signIn('github', { callbackUrl: 'http://localhost:8080/register' });

        if (githubData?.user?.name) {
            const formData = new FormData();
            formData.append('username', githubData.user.name);
            formData.append('password', '');
            try {
                const data = await action(formData);
                setData(data);
            } catch (error) {
                alert(`catch error: ${(error as Error).message}`);
            }
        }
    }

    return (
        <div>
            <div className={styles.registerText}>AUTH_GITHUB_ID:{process.env.NEXT_PUBLIC_AUTH_GITHUB_ID}</div>
            <div className={styles.registerText}>NEXT_PUBLIC_AUTH_GITHUB_SECRET:{process.env.NEXT_PUBLIC_AUTH_GITHUB_SECRET}</div>
            <div className={styles.error}>{data?.msg}</div>
            <div className={styles.registerGitHubCenter}>
                <img
                    src="https://authjs.dev/img/providers/github.svg"
                    style={{ height: '50px' }}
                    onClick={handleClick}
                />
                <div>github login</div>
            </div>
            <Link href={`/register`} className={styles.registerBtn}>
                注册用户
            </Link>
        </div>
    )
}