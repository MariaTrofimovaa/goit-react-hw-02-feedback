import React from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option, id = uuidv4()) => {
        return (
          <button
            key={id.toString()}
            type="button"
            className={styles.button}
            name={option}
            onClick={onLeaveFeedback}
          >
            {option.toUpperCase()}
          </button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;
