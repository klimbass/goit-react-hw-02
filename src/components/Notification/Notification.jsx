import css from "./Notification.module.css";

export default function Notification({ total }) {
  return <>{!total && <p className={css.text}>No feedback yet</p>}</>;
}
