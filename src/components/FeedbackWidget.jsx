import { Component } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification';
import Statistics from './Statistics';

class FeedbackWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    this.setState(prevState => {
      return {
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const feedbackValues = Object.values(this.state);

    return feedbackValues.reduce((acc, feedback) => {
      return acc + feedback;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total !== 0 ? Math.round((this.state['good'] / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handleFeedback} />
        </Section>

        {good === 0 && neutral === 0 && bad === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          </Section>
        )}
      </>
    );
  }
}

export default FeedbackWidget;
