'use client';
import { signIn } from "next-auth/react";
import styles from "../../page.module.css";
import Link from "next/link";
import { useState } from "react";

export const GithubPage = () => {
    const [error, setError] = useState<string>();

    const handleClick = async () => {
        try{
            await signIn('github', { callbackUrl: 'http://localhost:8080/register' });
        } catch(e) {
            setError("Github登录失败，请联系管理")
        }
    }

    return (
        <div>
            <div className={styles.registerText}>AUTH_GITHUB_ID:{process.env.NEXT_PUBLIC_AUTH_GITHUB_ID}</div>
            <div className={styles.registerText}>NEXT_PUBLIC_AUTH_GITHUB_SECRET:{process.env.NEXT_PUBLIC_AUTH_GITHUB_SECRET}</div>
            <div className={styles.error}>{error}</div>
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