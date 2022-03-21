import styles from "./ExploreBlock.module.css";
import icon_1 from "../../assets/img/explore/icons/1.svg";
import icon_2 from "../../assets/img/explore/icons/2.svg";
import icon_3 from "../../assets/img/explore/icons/3.svg";
import rasko from "../../assets/img/explore/rasko.svg";
import quai_invest from "../../assets/img/explore/quai_invest.svg";
import eye from "../../assets/img/explore/eye.svg";
import { ButtonWhite } from "../Buttons/Buttons";
import { useIsVisible } from "react-is-visible";
import { useRef } from "react";
import { Animated } from "react-animated-css";
import { createBrowserHistory } from "history";

export const ExploreBlock = () => {
  const isVisibleRef = useRef();
  const isVisible = useIsVisible(isVisibleRef);
  const history = createBrowserHistory();

  return (
    <div className={styles.explore}>
      <div className='container'>
        <h2>Explore the QUAI DeFi and NFT Ecosystem</h2>
        <div className={styles.explore_main} ref={isVisibleRef}>
          <Animated
            animationIn='fadeInLeft'
            animationInDuration={1000}
            isVisible={isVisible}>
            <div className={styles.explore_block_wrapper}>
              <div className={styles.explore_block}>
                <div className={styles.explore_block_title}>
                  <img src={rasko} />
                </div>
                <div className={styles.explore_block_main}>
                  <img src={icon_1} />
                  <span>
                    Create Borrow and Lend Money Market for Crypto Assets
                  </span>
                  <ButtonWhite
                    text='Explore rASKO'
                    style={{ minWidth: "280px" }}
                    onClick={() => {
                      history.push("https://asko.finance/rasko");
                    }}
                  />
                </div>
              </div>
            </div>
          </Animated>
          <Animated
            animationIn='fadeInLeft'
            animationInDelay={500}
            animationInDuration={1000}
            isVisible={isVisible}>
            <div className={styles.explore_block_wrapper}>
              <div className={styles.explore_block}>
                <div className={styles.explore_block_title}>
                  <img src={quai_invest} />
                </div>
                <div className={styles.explore_block_main}>
                  <img src={icon_2} />
                  <span>
                    Allocate capital with Intelligent and Automated Yield
                    Farming
                  </span>
                  <ButtonWhite
                    text='Explore QUAI Invest'
                    style={{ minWidth: "280px" }}
                    onClick={() => {
                      history.push("https://quai-invest.net/");
                    }}
                  />
                </div>
              </div>
            </div>
          </Animated>
          <Animated
            animationIn='fadeInLeft'
            animationInDuration={1000}
            animationInDelay={1000}
            isVisible={isVisible}>
            <div className={styles.explore_block_wrapper}>
              <div className={styles.explore_block}>
                <div className={styles.explore_block_title}>
                  <img src={eye} />
                </div>
                <div className={styles.explore_block_main}>
                  <img src={icon_3} />
                  <span>
                    Create Borrow and Lend Money Market for Crypto Assets
                  </span>
                  <ButtonWhite
                    text='Explore MeDIA eYe'
                    style={{ minWidth: "280px" }}
                    onClick={() => {
                      history.push("https://mediaeyenft.com/");
                    }}
                  />
                </div>
              </div>
            </div>
          </Animated>
        </div>
      </div>
    </div>
  );
};
