// 'use server';
import styles from "./page.module.css";
import Image from "next/image";
import img from "../../../public/next.svg";

export default () => {
    return (
        <div className={styles.page}>
            <Image
                src={img}
                alt="Next.js logo"
                width={580}
                height={358}
                priority
                className={styles.img}
            />
        </div>
    )
}