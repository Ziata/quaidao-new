import styles from "./TokenomicsBlock.module.css";
import img_1 from "../../../assets/svgs/metrics/1.svg";
import img_2 from "../../../assets/svgs/metrics/2.svg";
import img_3 from "../../../assets/svgs/metrics/3.svg";
import img_4 from "../../../assets/svgs/metrics/4.svg";
import img_5 from "../../../assets/svgs/metrics/5.svg";
import { useIsVisible } from "react-is-visible";
import { useRef } from "react";
import { Animated } from "react-animated-css";

export const TokenomicsBlock = () => {
  const isVisibleRef = useRef();
  const isVisible = useIsVisible(isVisibleRef);
  return (
    <div className={styles.tokenomics_blocks}>
      <div className='container'>
        <h2>QUAI KEY METRICS</h2>
        <div className={styles.tokenomics_blocks_main} ref={isVisibleRef}>
          <Animated
            animationIn='fadeInRight'
            animationInDuration={1000}
            animationInDelay={500}
            isVisible={isVisible}
            className={styles.tokenomics_block_wrapper}>
            <div className={styles.tokenomics_block}>
              <img src={img_1} />
              <h5>
                Current projects
                <br />
                <span>4</span>
              </h5>
            </div>
          </Animated>
          <Animated
            animationIn='fadeInRight'
            animationInDuration={1000}
            animationInDelay={800}
            isVisible={isVisible}
            className={styles.tokenomics_block_wrapper}>
            <div className={styles.tokenomics_block}>
              <img src={img_2} />
              <h5>
                Cohort Rewards Farms <br />
                up to<span> 180%</span>
              </h5>
            </div>
          </Animated>
          <Animated
            animationIn='fadeInRight'
            animationInDuration={1000}
            animationInDelay={1100}
            isVisible={isVisible}
            className={styles.tokenomics_block_wrapper}>
            <div className={styles.tokenomics_block}>
              <img src={img_3} />
              <h5>
                Total QUAI in Cohort Farm
                <br /> <span>8,453,190</span>
              </h5>
            </div>
          </Animated>
          <Animated
            animationIn='fadeInRight'
            animationInDuration={1000}
            animationInDelay={1400}
            isVisible={isVisible}
            className={styles.tokenomics_block_wrapper}>
            <div className={styles.tokenomics_block}>
              <img src={img_4} />
              <h5>
                Circulating supply
                <br />
                <span>39,809,807</span>
              </h5>
            </div>
          </Animated>
          <Animated
            animationIn='fadeInRight'
            animationInDuration={1000}
            animationInDelay={1900}
            isVisible={isVisible}
            className={styles.tokenomics_block_wrapper}>
            <div className={styles.tokenomics_block}>
              <img src={img_5} />
              <h5>
                Total supply
                <br />
                <span>100,000,000</span>
              </h5>
            </div>
          </Animated>
        </div>
      </div>
    </div>
  );
};
