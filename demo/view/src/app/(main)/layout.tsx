'use client';

import Link from "next/link";
import styles from "./page.module.css";
import { ReactNode, useState } from "react";
import { deleteCookie } from "../utils";
import LogoutModal from "./components/logoutModal";

export default ({ children }: { children: ReactNode }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const confirmModal = async () => {
        // 调用函数删除登录Token
        closeModal();
        await deleteCookie('token');
    };

    // useEffect(() => {
    //     checkCookie();
    // },[])

    return (
        <div>
            <div className={styles.header}>
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
                    <Link href={`c`}><button className={styles.leftButton}>Client</button></Link><br />
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