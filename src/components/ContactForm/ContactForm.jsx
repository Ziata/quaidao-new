import { ButtonBlueWhite } from "../Buttons/Buttons";
import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  return (
    <div className={styles.form}>
      <div className='container'>
        <h3>
          Sign up here to receive the latest news and updates of our projects!
        </h3>
        <div className={styles.form_main}>
          <input />
          <ButtonBlueWhite text='Submit' style={{ width: "160px" }} />
        </div>
      </div>
    </div>
  );
};
