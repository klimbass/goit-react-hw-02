import css from "./Options.module.css";

export default function Options({ handleClick, total, reset }) {
  return (
    <div className={css.buttonBox}>
      <button className={css.btn} onClick={handleClick}>
        Good
      </button>
      <button className={css.btn} onClick={handleClick}>
        Neutral
      </button>
      <button className={css.btn} onClick={handleClick}>
        Bad
      </button>
      {total > 0 && (
        <button className={css.btn} onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
}
