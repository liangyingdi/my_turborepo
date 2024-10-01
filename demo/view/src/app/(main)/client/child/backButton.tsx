'use client'
import { useRouter } from "next/navigation";
import styles from "../index.module.css";
import { useCallback } from "react";
import { mutate } from "swr";

export default function BackButton() {
    const route = useRouter();

    const onBack = useCallback(() => {
        mutate('http://localhost:8080/api/setTime?time=5', 'Modified');
        route.back();
    }, []);

    return (
        <div>
            <button className={styles.button} onClick={onBack}>Back And Modify Cache</button><br />
        </div>
    )
}