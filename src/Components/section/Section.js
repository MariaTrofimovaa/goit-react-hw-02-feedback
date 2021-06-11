import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.title} title={title}>
        {title}
      </h2>
      {children}
    </div>
  );
};

Section.prototypes = {
  title: PropTypes.string,
};

export default Section;
