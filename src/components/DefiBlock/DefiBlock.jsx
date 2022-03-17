import styles from "./DefiBlock.module.css";
import title from "../../assets/svgs/title_defi.svg";
import { DefiImg } from "./DefiImg";
import { ButtonBlue, ButtonBlueWhite, ButtonWhite } from "../Buttons/Buttons";

export const DefiBlock = () => {
  return (
    <div className={styles.defi}>
      <div className='container'>
        <img src={title} className={styles.title} />
        <div className={styles.defi_main}>
          <DefiImg />
        </div>
        <ButtonBlueWhite
          text='Explore'
          style={{ minWidth: "280px", margin: "0 auto", display: "block" }}
        />
      </div>
    </div>
  );
};
