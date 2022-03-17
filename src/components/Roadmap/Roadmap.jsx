import styles from "./Roadmap.module.css";
import title from "../../assets/svgs/title_roadmap.svg";
import big_title from "../../assets/svgs/title_roadmap_big.svg";
import big_logo from "../../assets/svgs/roadmap_big_logo.svg";
import q1 from "../../assets/img/roadmap/q1.png";
import q2 from "../../assets/img/roadmap/q2.png";
import q3 from "../../assets/img/roadmap/q3.png";

export const Roadmap = () => {
  return (
    <div className={styles.roadmap}>
      <div className='container'>
        <img src={title} className={styles.title} />
        <h3>
          QUAI Invest Roadmap 2022 - Q1 to Q3
          <br />
          <span>(Q4 activities will be added during Q2)</span>
        </h3>
        <div className={styles.roadmap_first_row}>
          <div className={styles.roadmap_column}>
            <div className={styles.roadmap_column_top}>
              <div className={styles.roadmap_number}>
                <img src={q1} />
              </div>
              <div className={styles.roadmap_title}>
                <h4>2022</h4>
                <h5>March - April</h5>
              </div>
            </div>
            <div className={styles.roadmap_main}>
              <ul>
                <li>Complete all back end database work</li>
                <li>
                  Finalize testing of QUANT Invest and LP token farming Zapper
                  Style Contracts BSC and ETH
                </li>
                <li>
                  Updates to User Interface (target date: 2nd week of March)
                </li>
                <li>Final testing of the entire platform and UI</li>
                <li>Set fee distribution to cohort farming</li>
                <li>
                  DeFi Gateway final testing for ETH and BSC (target date: 3rd
                  week of March)
                </li>
                <li>Initiate marketing campaign</li>
              </ul>
              <h6>Beta launch (target date:24 - 28th of March)* </h6>
              <ul>
                <li>
                  QUAI DAO site update release (target date: 3rd week of March)
                </li>
                <li>
                  QUAI DAO Kick off of the DAO Dev work/Colony Type Multi-Chain
                  DAO (target date for launch: Q4 2022)
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.roadmap_big_logo}>
            <div className={styles.roadmap_logo_wrapper}>
              <div className={styles.roadmap_logo}>
                <img src={big_logo} />
              </div>
            </div>
            <div className={styles.roadmap_title_big}>
              <img src={big_title} />
            </div>
          </div>
        </div>
        <div className={styles.roadmap_second_row + " " + styles.rodmap_midle}>
          <div className={styles.roadmap_column}>
            <div className={styles.roadmap_column_top}>
              <div className={styles.roadmap_number}>
                <img src={q2} />
              </div>
              <div className={styles.roadmap_title}>
                <h4>2022</h4>
                <h5>April - May </h5>
              </div>
            </div>
            <div className={styles.roadmap_main}>
              <ul>
                <li>Marketing campaigns to continue through May</li>

                <li>QUAI Invest full public release</li>
                <li>
                  Integration of rASKO’s and MeDIA eYe’s front ends to the QUAI
                  Invest platform/site
                </li>
                <li>
                  Initiate integration with Moralis for back end DB and contract
                  event sensing (estimated duration: 3 weeks)
                </li>
                <li>
                  Prepare for QUAI Invest launch on Fantom/preliminary design in
                  preparation for V2/VC Style investing
                </li>
                <li>Expand tech and marketing teams</li>
                <li>Prepare design for QUAI Invest wallet app for V2 </li>
              </ul>
            </div>
          </div>
          <div className={styles.roadmap_column}>
            <div className={styles.roadmap_column_top}>
              <div className={styles.roadmap_title}>
                <h5>May - June</h5>
              </div>
            </div>
            <div className={styles.roadmap_main}>
              <ul>
                <li>
                  Revise V2 MVP and initiate smart contract development for
                  V2/VC style investing
                </li>
                <li>
                  Revise Litepaper for QUAI DAO and issue new Litepaper for QUAI
                  Invest
                </li>
                <li>
                  Continue Development of the Moralis production server/back end
                </li>
                <li>
                  Proceed with Fantom integration of QUAI Invest V1 services
                </li>
                <li>
                  Continue our work on V2 MVP design for launch on
                  Fantom/BSC/ETH
                </li>
                <li>
                  Burn 25 million QUAI tokens for the creation of QUAI on
                  Fantom*
                </li>
                <li>
                  Private offering: secondary funding round (V2 development
                  funding)
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.roadmap_column}>
            <div className={styles.roadmap_column_top}>
              <div className={styles.roadmap_title}>
                <h5>June - July</h5>
              </div>
            </div>
            <div className={styles.roadmap_main}>
              <ul>
                <li>
                  Public secondary offering for Launch of QUAI V2 IDO
                  (development funding)
                </li>
                <li>Launch QUAI on Fantom liquidity pool, open for trading</li>
                <li>Marketing continues (including Key Opinion Leaders)</li>
                <li>
                  Begin development of Met-Era (NFT) Gateway for BTC coins
                  on-boarding to FTM/ETH/BSC and to support V2/VC style
                  investing
                </li>
                <li>Initiate development of QUAI Invest V2 contracts</li>
                <li>
                  Continue to expand services on the QUAI Invest platform
                  through the aggregation of partners' services
                </li>
                <li>QUAI on Fantom: cohort farm development</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.roadmap_second_row}>
          <div className={styles.roadmap_column}>
            <div className={styles.roadmap_column_top}>
              <div className={styles.roadmap_number}>
                <img src={q3} />
              </div>
              <div className={styles.roadmap_title}>
                <h4>2022</h4>
                <h5>July - August</h5>
              </div>
            </div>
            <div className={styles.roadmap_main}>
              <ul>
                <li>Marketing Continues... </li>
                <li>Initiate UI/UX design and development for V2</li>
                <li>Launch cohort farming on Fantom</li>
                <li>
                  Continue development work on Meta-Era (NFT) Gateway for
                  Fantom/ETH/BSC
                </li>
                <li>Continue development work for V2/VC style investing</li>
                <li>Continue our development work on the DAO</li>
                <li>
                  Initiate development of the wallet app for V2 ((NFT) hold,
                  earn, burn)
                </li>
                <li>V2/VC style test pools launch - Fantom and BSC</li>
              </ul>
            </div>
          </div>
          <div className={styles.roadmap_column}>
            <div className={styles.roadmap_column_top}>
              <div className={styles.roadmap_title}>
                <h5>August - September</h5>
              </div>
            </div>
            <div className={styles.roadmap_main}>
              <ul>
                <li>Complete work on Meta-Era (NFT) Gateway</li>
                <li>
                  Complete UI/UX design and development work on front end V2
                </li>
                <li>Ongoing UI and UX testing</li>
                <li>Wallet app dev for V2 - beta launch</li>
                <li>Ongoing integration of partner services on QUAI Invest</li>
              </ul>
            </div>
          </div>
          <div className={styles.roadmap_column}>
            <div className={styles.roadmap_column_top}>
              <div className={styles.roadmap_title}>
                <h5>September - October</h5>
              </div>
            </div>
            <div className={styles.roadmap_main}>
              <ul>
                <li>
                  Deployment of V2/VC style investing - all contracts on Fantom,
                  BSC and ETH to follow
                </li>
                <li>Finalize UI/UX functionality, testing and integration</li>
                <li>Meta-Era (NFT) Gateway final testing and launch</li>
                <li>Beta release of V2/style investing</li>
                <li>Initiate testing of DAO</li>
                <li>Partner services integration</li>
                <li>Integration and release of wallet app V2</li>
                <li>Full platform launch of QUAI V2 on all chains*</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
