import styles from "./Coins.module.css";
import eth from "../../assets/img/coins/eth.png";
import bsc from "../../assets/img/coins/bsc.png";

const coins = [
  { img: "./img/coins/1.png" },
  { img: "./img/coins/2.png" },
  { img: "./img/coins/3.png" },
  { img: "./img/coins/4.png" },
  { img: "./img/coins/5.png" },
  { img: "./img/coins/6.png" },
  { img: "./img/coins/7.png" },
  { img: "./img/coins/8.png" },
  { img: "./img/coins/9.png" },
  { img: "./img/coins/10.png" },
  { img: "./img/coins/11.png" },
  { img: "./img/coins/12.png" },
  { img: "./img/coins/13.png" },
  { img: "./img/coins/14.png" },
  { img: "./img/coins/15.png" },
  { img: "./img/coins/16.png" },
  { img: "./img/coins/17.png" },
  { img: "./img/coins/18.png" },
  { img: "./img/coins/19.png" },
  { img: "./img/coins/20.png" },
];

export const Coins = () => {
  return (
    <div className={styles.coins}>
      <div className='container'>
        <h2>Yield farming</h2>
        <div className={styles.coins_main}>
          {coins.map((coin) => (
            <div className={styles.coin}>
              <img src={coin.img} />
            </div>
          ))}
        </div>
        <h2>Yield farming</h2>
        <h5>Quai Invest Farming Rates by Token</h5>
        <div className={styles.coins_farm}>
          <div className={styles.coins_block}>
            <h4>
              <img src={eth} />
              ETH
            </h4>
            <div className={styles.block_coins}>
              <img src='./img/coins/quai.png' />
              <img src='./img/coins/eth_1.png' />
              <img src='./img/coins/eth_2.png' />
            </div>
          </div>
          <div className={styles.coins_block}>
            <h4>
              <img src={bsc} />
              ETH
            </h4>
            <div className={styles.block_coins}>
              <img src='./img/coins/quai.png' />
              <img src='./img/coins/bsc_1.png' />
              <img src='./img/coins/bsc_2.png' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
