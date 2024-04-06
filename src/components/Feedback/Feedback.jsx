import css from "./Feedback.module.css";

export default function Feedback({ value, total }) {
  const { good, neutral, bad } = value;

  return (
    <div className={css.feedbackBox}>
      {total > 0 && (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive: {Math.round((good / total) * 100)}%</p>
        </>
      )}
    </div>
  );
}
