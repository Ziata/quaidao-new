import styles from "./MainScreenInfo.module.css";
import title from "../../assets/svgs/title_info.svg";
import info_logo from "../../assets/svgs/info_logo.svg";
import { ButtonBlue } from "../Buttons/Buttons";
import { MainScreenInfoImg } from "./MainScreenInfoImg";
import { useIsVisible } from "react-is-visible";
import { useRef } from "react";
import { Animated } from "react-animated-css";

export const MainScreenInfo = (props) => {
  const isVisibleRef = useRef();
  const isVisible = useIsVisible(isVisibleRef);
  return (
    <div className={styles.info}>
      <div className='container'>
        <div className={styles.info_main} ref={isVisibleRef}>
          <Animated
            animationIn='fadeInUp'
            animationInDuration={1000}
            animationInDelay={500}
            isVisible={isVisible}>
            <img className={styles.title} src={title} />
          </Animated>
          <div className={styles.info_text}>
            <img className={styles.info_logo} src={info_logo} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <ButtonBlue text='Buy QUAI' />
          </div>
        </div>
      </div>
      <div className={styles.info_right} style={{ width: props.widthSvg }}>
        <MainScreenInfoImg />
      </div>
    </div>
  );
};
