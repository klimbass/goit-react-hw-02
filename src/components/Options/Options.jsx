import css from "./Options.module.css";

export default function Options({ handleClick, total, reset }) {
  return (
    <div className={css.buttonBox}>
      <button
        className={css.btn}
        onClick={() => {
          handleClick("good");
        }}
      >
        Good
      </button>
      <button
        className={css.btn}
        onClick={() => {
          handleClick("neutral");
        }}
      >
        Neutral
      </button>
      <button
        className={css.btn}
        onClick={() => {
          handleClick("bad");
        }}
      >
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
