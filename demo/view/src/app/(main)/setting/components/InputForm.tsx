"use client"
import React, { useState } from "react";
import styles from "../index.module.css";

export const dynamic = 'force-dynamic';

export const InputForm = () => {
    const [theme, setTheme] = useState("");

    const onConfirm = () => {

    }
    return <div className={styles.wrapper}>
        <label>theme</label>&nbsp;
        <input className={styles.input} onChange={e => setTheme(e.target.value)}/> <br/>
        <button className={`${styles.button} ${styles.confirm}`} onClick={() => onConfirm()} disabled={theme.length === 0}>添加</button>
    </div>
}