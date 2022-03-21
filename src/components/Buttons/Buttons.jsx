import styles from "./Buttons.module.css";

export const ButtonBlue = (props) => {
  const { text, style, styleSpan, onClick } = props;
  return (
    <button className={styles.blue_btn} style={style} onClick={onClick}>
      <span style={styleSpan}>{text}</span>
    </button>
  );
};

export const ButtonBlueWhite = (props) => {
  const { text, style, styleSpan, onClick } = props;
  return (
    <button
      className={styles.blue_btn + " " + styles.blue_white_btn}
      style={style}
      onClick={onClick}>
      <span style={styleSpan}>{text}</span>
    </button>
  );
};

export const ButtonWhite = (props) => {
  const { text, style, styleSpan, onClick } = props;
  return (
    <button className={styles.white_btn} style={style} onClick={onClick}>
      <span style={styleSpan}>{text}</span>
      <span className={styles.blue_bg}></span>
    </button>
  );
};
