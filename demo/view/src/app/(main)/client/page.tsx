"use client"
import Link from "next/link";
import styles from "./index.module.css"
import useSWR from "swr";
import { useState } from "react";
import Modal from "./components/modal";

export default () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const { data, error, isLoading } = useSWR(`http://localhost:8080/api/setTime?time=5`, async (url: string) => {
        return (await fetch(url)).json();
    }, {
        loadingTimeout: 3000,
        onLoadingSlow: () => {
            setModalOpen(true);
        },
        refreshInterval: 6 * 1000
    });

    return (
        <div>
            <div>data:{data || ""}</div>
            <Link href="/client/child"><button className={styles.button}>child</button></Link>
            {isModalOpen && isLoading && <Modal isOpen={isModalOpen} />}
        </div>
    )
}