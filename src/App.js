import React, { Component } from "react";
import FeedbackOptions from "./Components/feedBackOptions/FeedbackOptions";
import Statistics from "./Components/statistics/Statistics";
import Section from "./Components/section/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = (event) => {
    const feedbackValue = event.target.name;
    this.setState((prevState) => ({
      [feedbackValue]: prevState[feedbackValue] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
