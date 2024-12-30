import React from "react";
import { Link } from "react-router-dom";
import styles from "./SearchContact.module.css";

const SearchContact = ({ text, link }) => (
  <section className={styles.searchSection}>
    <input type="text" placeholder="Search" className={styles.searchBar} />
    <button className={styles.searchBlue}>Search</button>
    <button className={styles.contactButton}>
      <Link to={link}>{text}</Link>
    </button>
  </section>
);

export default SearchContact;
