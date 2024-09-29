import React from 'react';
import styles from "../index.module.css";

const Modal = ({ isOpen }: { isOpen: boolean }) => {
    if (!isOpen) return null;
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                主题更新成功
            </div>
        </div>
    );
};

export default Modal;