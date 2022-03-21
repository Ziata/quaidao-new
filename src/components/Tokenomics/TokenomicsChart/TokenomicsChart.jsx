import styles from "./TokenomicsChart.module.css";
import { TokenomicsChartImg } from "./TokenomicsChartImg";
import { useIsVisible } from "react-is-visible";
import { useRef } from "react";
import { Animated } from "react-animated-css";

export const TokenomicsChart = () => {
  const isVisibleRef = useRef();
  const isVisible = useIsVisible(isVisibleRef);
  return (
    <div className={styles.tokenomics_chart}>
      <div className='container'>
        <h2>TOKENOMICS</h2>
        <h4>
          TOTAL SUPPLY: <span>100 000 000</span>
        </h4>
        <div className={styles.tokenomics_chart_main} ref={isVisibleRef}>
          <Animated
            animationIn='fadeInLeft'
            animationInDuration={1000}
            animationInDelay={500}
            isVisible={isVisible}
            className={styles.tokenomics_left}>
            <div className={styles.tokenomics_block}>
              <h6>5% For IDO On Binance Smartchain</h6>
              <span>5,000,000 QUAI</span>
            </div>
            <div className={styles.tokenomics_block}>
              <h6>15% Of Supply - Staking Pools ERC20 & BEP20 QUAI</h6>
              <span>15,000,000 QUAI</span>
            </div>
            <div className={styles.tokenomics_block}>
              <h6>10% Of Supply - QUAI On BSC</h6>
              <span>10,000,000 QUAI</span>
            </div>
            <div className={styles.tokenomics_block}>
              <h6>10% Of Supply - Marketing And Community Rewards</h6>
              <span>10,000,000 QUAI</span>
            </div>
          </Animated>
          <div className={styles.tokenomics_center}>
            <TokenomicsChartImg />
          </div>
          <Animated
            animationIn='fadeInRight'
            animationInDuration={1000}
            animationInDelay={500}
            isVisible={isVisible}
            className={styles.tokenomics_right}>
            <div className={styles.tokenomics_block}>
              <h6>20% Of Supply - Development QUAI DAO And Investments</h6>
              <span>20,000,000 QUAI</span>
            </div>
            <div className={styles.tokenomics_block}>
              <h6>
                10% Of Supply - For Farming And Liquidity Mining QUAI
                Allocations
              </h6>
              <span>10,000,000 QUAI</span>
            </div>
            <div className={styles.tokenomics_block}>
              <h6>10% Supply - Future Staking Rewards</h6>
              <span>10,000,000 QUAI</span>
            </div>
            <div className={styles.tokenomics_block}>
              <h6>20% Of Supply - QUAI Collective</h6>
              <span>20,000,000 QUAI</span>
            </div>
          </Animated>
        </div>
      </div>
    </div>
  );
};
