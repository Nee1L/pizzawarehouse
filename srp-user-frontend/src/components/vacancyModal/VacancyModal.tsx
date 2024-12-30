import React, { useEffect, useRef, useState } from "react";
import styles from "./vacancyModal.module.css";
import closeButtonIcon from "../../img/icon/close-btn.svg";

const VacancyModal = ({ vacancy, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef(null);

  const handleClickOutside = event => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsClosing(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    if (isClosing) {
      const timeout = setTimeout(onClose, 300);
      return () => clearTimeout(timeout);
    }
  }, [isClosing, onClose]);

  return (
    <div
      className={`${styles.modalOverlay} ${isClosing ? styles.fadeOut : ""}`}
    >
      <div
        className={`${styles.modalContainer} ${isClosing ? styles.scaleOut : ""}`}
        ref={modalRef}
      >
        <button className={styles.close} onClick={() => setIsClosing(true)}>
          <img src={closeButtonIcon} alt="close-button" />
        </button>

        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{vacancy.jobTitle}</h2>
          <p>{vacancy.department}</p>
          <div className={styles.actions}>
            <button className={styles.submitBtn}>Submit Application</button>
            <button className={styles.saveBtn}>Save Task</button>
          </div>
        </div>

        <div className={styles.modalContent}>
          <div className={styles.overview}>
            <h3>Job Overview:</h3>
            <p>{vacancy.jobOverview}</p>
          </div>

          <div className={styles.modalDetails}>
            <ul>
              <li className={styles.items}>
                Job type
                <div>{vacancy.jobType}</div>
              </li>
              <li className={styles.items}>
                Job Location
                <div>{vacancy.jobLocation}</div>
              </li>
              <li className={styles.items}>
                Job posted
                <div>{vacancy.jobPostedDate}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacancyModal;
