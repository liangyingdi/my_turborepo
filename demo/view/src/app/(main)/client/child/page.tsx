import styles from "../index.module.css";
import BackButton from "./backButton";
import Link from "next/link";
import { getCookie } from "@view/src/app/utils";

export default async() => {
    const id = await getCookie("user_id");

    return (
        <div>
            <BackButton/>

            <Link href={`/client/child/${id}/${new Date().getSeconds()}`}>
                <button className={styles.button}>
                    TO USER
                </button>
            </Link>
        </div>
    )
}