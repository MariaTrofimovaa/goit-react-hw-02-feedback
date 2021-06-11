import React from "react";
import Notification from "../notification/Notification";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css"

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return total ? (
    <>
      <p className={styles.statDescription}>Good: {good}</p>
      <p className={styles.statDescription}>Neutral: {neutral}</p>
      <p className={styles.statDescription}>Bad: {bad}</p>
      <p className={styles.statDescription}>Total: {total}</p>
      <p className={styles.statDescription}>Positive feedback: {positivePercentage}%</p>
    </>
  ) : (
    <Notification message="No feedback given..."></Notification>
  );
};

Statistics.prototypes = {
  good: PropTypes.node.isRequired,
  neutral: PropTypes.node.isRequired,
  bad: PropTypes.node.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
