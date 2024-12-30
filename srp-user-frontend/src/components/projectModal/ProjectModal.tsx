import React, { useEffect, useRef, useState } from "react";
import styles from "./projectModal.module.css";
import closeButtonIcon from "../../img/icon/close-btn.svg";
import likeIcon from "../../img/icon/LikeIcon";
import viewIcon from "../../img/icon/ViewIcon";

const ProjectModal = ({ project, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
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

  const IMAGE_BASE_PATH = "/images/";

  return (
    <div
      className={`${styles.modalOverlay} ${isClosing ? styles.fadeOut : ""}`}
    >
      <div
        className={`${styles.modalContainer} ${isClosing ? styles.scaleOut : ""}`}
        ref={modalRef}
      >
        <button
          className={styles.modalCloseButton}
          onClick={() => setIsClosing(true)}
        >
          <img src={closeButtonIcon} alt="close-button" />
        </button>

        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{project.title}</h2>
          <p className={styles.modalPublished}>
            Published {project.formattedDate} days ago
          </p>
        </div>

        <div className={styles.modalContent}>
          <img
            src={process.env.PUBLIC_URL + IMAGE_BASE_PATH + project.image}
            alt={project.title}
            className={styles.modalImage}
          />

          <div className={styles.modalDetails}>
            <div className={styles.modalAuthor}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  IMAGE_BASE_PATH +
                  project.authoravatar
                }
                alt={project.author}
                className={styles.authorAvatar}
              />
              <div>
                <h3 className={styles.authorName}>{project.author}</h3>
                <div className={styles.projectStats}>
                  <span>
                    <img src={likeIcon} alt="likes" />
                    {project.likes}
                  </span>
                  <span>
                    <img src={viewIcon} alt="views" />
                    {project.views}
                  </span>
                </div>
              </div>
              <button className={styles.subscribeButton}>Subscribe</button>
            </div>

            <div className={styles.modalActions}>
              <div>
                <button className={styles.rateButton}>Rate the work</button>
                <button className={styles.shareButton}>Share</button>
              </div>
              <button className={styles.messageButton}>
                Send a message to the author
              </button>
            </div>

            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <button key={tag} className={styles.tag}>
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
