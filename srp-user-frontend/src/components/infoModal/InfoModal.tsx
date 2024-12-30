import React from "react";
import styles from "./infoModal.module.css";

const InfoModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <span className={styles.modalClose} onClick={onClose}>
          &times;
        </span>
        <h1>Thank You for Registering!</h1>
        <p>
          We're excited to have you join our project. At the moment, the project
          is still under development. We will contact you via the email you
          provided as soon as the dashboard is ready.
        </p>
        <p>See you soon!</p>
      </div>
    </div>
  );
};

export default InfoModal;
