import Link from "next/link";
import styles from "./index.module.css"

export default () => {
    return (
        <div>
            <div>data: {Date.now()}</div>
            <Link href="/client/child"><button className={styles.button}>child</button></Link>
        </div>
    )
}