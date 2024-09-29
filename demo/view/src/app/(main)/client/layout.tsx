'use client';
import { ReactNode } from "react";
import { SWRConfig } from "swr";
import styles from "./index.module.css"

export default ({ children }: { children: ReactNode }) => {
    return (
        <SWRConfig value={{ revalidateOnFocus: false, refreshInterval: 20 * 1000, loadingTimeout: 3 * 1000, }}>
            <input className={styles.input} />
            {children}
        </SWRConfig>
    )
};