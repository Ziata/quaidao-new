import styles from "./GovernanceFooter.module.css";

export const GovernanceFooter = (props) => {
  return (
    <div className={styles.governance_footer}>
      <div className='container'>
        <span>
          Any candidate should be able to register himself in case he fits the
          requirements.
        </span>
      </div>
    </div>
  );
};
