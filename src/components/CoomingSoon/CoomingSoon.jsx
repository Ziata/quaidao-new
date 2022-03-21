import styles from "./CoomingSoon.module.css";
import pixels from "../../assets/img/commingsoon/pixels.png";
import comics from "../../assets/img/commingsoon/comics.png";
import quai from "../../assets/img/commingsoon/quai.png";
import { ButtonWhite } from "../Buttons/Buttons";
import { useIsVisible } from "react-is-visible";
import { useRef } from "react";
import { Animated } from "react-animated-css";

export const CoomingSoon = () => {
  const isVisibleRef = useRef();
  const isVisible = useIsVisible(isVisibleRef);
  return (
    <div className={styles.comming_soon}>
      <div className='container'>
        <h2>Projects Coming Soon</h2>
        <div className={styles.comming_soon_main} ref={isVisibleRef}>
          <Animated
            animationIn='fadeInRight'
            animationInDuration={1000}
            isVisible={isVisible}>
            <div className={styles.comming_soon_block_wrapper}>
              <div className={styles.comming_soon_block}>
                <img src={pixels} />
                <h5>Million Pixels NFT Canvas</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ButtonWhite text='Explore' styleSpan={{ minWidth: "150px" }} />
              </div>
            </div>
          </Animated>
          <Animated
            animationIn='fadeInRight'
            animationInDelay={500}
            animationInDuration={1000}
            isVisible={isVisible}>
            <div className={styles.comming_soon_block_wrapper}>
              <div className={styles.comming_soon_block}>
                <img src={comics} />
                <h5>Metaverse Comics</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ButtonWhite text='Explore' styleSpan={{ minWidth: "150px" }} />
              </div>
            </div>
          </Animated>{" "}
          <Animated
            animationIn='fadeInRight'
            animationInDelay={1000}
            animationInDuration={1000}
            isVisible={isVisible}>
            <div className={styles.comming_soon_block_wrapper}>
              <div className={styles.comming_soon_block}>
                <img src={quai} />
                <h5>QUAI DAO V2</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ButtonWhite text='Explore' styleSpan={{ minWidth: "150px" }} />
              </div>
            </div>
          </Animated>
        </div>
      </div>
    </div>
  );
};
