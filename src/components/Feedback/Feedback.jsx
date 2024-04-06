import css from "./Feedback.module.css";

export default function Feedback({ value, total, positivePercent }) {
  const { good, neutral, bad } = value;

  return (
    <div className={css.feedbackBox}>
      <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive: {positivePercent}%</p>
      </>
    </div>
  );
}
