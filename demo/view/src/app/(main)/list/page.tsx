'use client';

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Modal from "./components/modal";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { addItemAction, getItemsAction } from "./action";

export default () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const path = usePathname();
    const [userItems, setUserItems] = useState<UserItems>([]);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const getList = async () => {
        const { data } = await getItemsAction();
        console.log(data)
        setUserItems(data)
    }

    useEffect(() => {
        getList()
    }, [])

    //add
    const confirmModal = (val: string) => {
        addItemAction(val);
        getList();
        closeModal();
    };

    return (
        <>
            <div className={styles.listWrapper}>
                <div className={styles.toolsWrapper}>
                    <button className={styles.listBtn} onClick={openModal}>添加项目</button>
                </div>
                <div className={styles.listMain}>
                    {userItems.map(item => (
                        <Link href={`${path}/${item.user_id}/item/${item.id}`} key={item.id}>
                            <div key={item.id} className={styles.item}>
                                {item.name}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                onConfirm={confirmModal}
            />
        </>
    )
}