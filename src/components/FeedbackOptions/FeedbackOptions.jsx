import { Component } from 'react';
import s from './FeedbackOptions.module.css'

class FeedbackOptions extends Component {
  render() {
      const { onLeaveFeedback } = this.props
    return (
      <div className={s.feedbacks}>
        <button type="button" className={s.feedBtn} name="good" onClick={onLeaveFeedback}>
          Good
        </button>
        <button type="button" className={s.feedBtn} name="neutral" onClick={onLeaveFeedback}>
          Neutral
        </button>
        <button type="button" className={s.feedBtn} name="bad" onClick={onLeaveFeedback}>
          Bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
