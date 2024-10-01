"use client"
import React, { useEffect, useState } from "react";
import styles from "../index.module.css";
import { addThemeAction, getThemeByUserIdAction, updateThemeAction } from "../action";
import Modal from "./modal";

export const dynamic = 'force-dynamic';

export const InputForm = () => {
    const [theme, setTheme] = useState<ThemeItem>();
    const [color, setColor] = useState("");
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        getThemeColor();
    }, [])

    //获取颜色
    const getThemeColor = async () => {
        const { data } = await getThemeByUserIdAction();
        setTheme(data[0]);
    }

    useEffect(() => {
        if (typeof navigator !== 'undefined') {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                console.log("latitude longitude ", longitude, latitude)

            }, _ => {
                console.log("没取到地址")
            })
        }
    }, []);


    const onConfirm = async () => {
        if (theme && theme.id) {
            const { code } = await updateThemeAction(theme.id, color);
            if (code === 0) {
                setModalOpen(true);
                setTimeout(() => {
                    window.location.reload();
                    setModalOpen(false);
                }, 2000)
            }
        } else {
            const { code } = await addThemeAction(color);
            if (code === 0) {
                setModalOpen(true);
                setTimeout(() => {
                    window.location.reload();
                    setModalOpen(false);
                }, 2000)
            }
        }
    }
    return <div className={styles.wrapper}>
        <label>theme</label>&nbsp;
        <input className={styles.input} onChange={e => setColor(e.target.value)} /> <br />
        <button className={`${styles.button} ${styles.confirm}`} onClick={() => onConfirm()} disabled={color.length === 0}>确认</button>
        <Modal isOpen={isModalOpen} />
    </div>
}