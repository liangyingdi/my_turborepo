'use client';

import Link from "next/link";
import styles from "./page.module.css";
import { ReactNode, useEffect, useState } from "react";
import { checkCookie, deleteCookie } from "../utils";
import LogoutModal from "./components/logoutModal";
import { getThemeByUserIdAction } from "./setting/action";
import { signOut } from "next-auth/react"
import { usePathname } from "next/navigation";

export default ({ children }: { children: ReactNode }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [theme, setTheme] = useState<ThemeItem>();
    const path = usePathname();

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const confirmModal = async () => {
        // 调用函数删除登录Token
        await deleteCookie('token');
        signOut({ callbackUrl: 'http://localhost:8080/login' })
        closeModal();
    };

    useEffect(() => {
        checkCookie(path);
    },[])

    useEffect(() => {
        getThemeColor();
    }, [])

    //获取颜色
    const getThemeColor = async () => {
        const { data } = await getThemeByUserIdAction();
        setTheme(data[0]);
    }

    return (
        <div>
            <div className={styles.header} style={{ backgroundColor: theme?.theme }}>
                <div className={styles.title}>VIEW DEMO</div>
                <div className={styles.info}>
                    <div>lyd</div>
                    <button onClick={openModal}>logout</button>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className={styles.leftWrapper}>
                    <Link href={`/list`}><button className={styles.leftButton}>List</button></Link><br />
                    <Link href={`/setting`}><button className={styles.leftButton}>Setting </button></Link><br />
                    <Link href={`/client`}><button className={styles.leftButton}>Client</button></Link><br />
                </div>
                <div className={styles.rightWrapper}>
                    {children}
                </div>
            </div>
            <LogoutModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onConfirm={confirmModal}
            />
        </div>
    )

};