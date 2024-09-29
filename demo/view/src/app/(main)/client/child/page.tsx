import Link from "next/link";
import styles from "../index.module.css";
import { getCookie } from "@view/src/app/utils";

export default async () => {
    const id = await getCookie("user_id");

    return (
        <div>
            <button className={styles.button}>Back And Modify Cache</button><br />
            <Link href={`/client/child/${id}/${new Date().getSeconds()}`}>
                <button className={styles.button}>
                    TO USER
                </button>
            </Link>
        </div>
    )
}