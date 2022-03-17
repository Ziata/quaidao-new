import styles from "./Arrows.module.css";
import left from "../../assets/svgs/arrow_left.svg";
import right from "../../assets/svgs/arrow_right.svg";

export const ArrowLeft = (props) => {
  const { onClick, stylesProps } = props;
  return (
    <div
      className={styles.arrow + " " + styles.arrow_left}
      onClick={onClick}
      style={{ ...stylesProps }}>
      <img src={left} />
    </div>
  );
};

export const ArrowRight = (props) => {
  const { onClick, stylesProps } = props;
  return (
    <div
      className={styles.arrow + " " + styles.arrow_right}
      style={{ ...stylesProps }}
      onClick={onClick}>
      <img src={right} />
    </div>
  );
};
