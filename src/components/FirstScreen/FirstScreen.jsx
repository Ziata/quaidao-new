import styles from "./FirstScreen.module.css";
import { MainImg } from "./MainImg";
import title from "../../assets/svgs/title.svg";
import { MainImgMobile } from "./MainImgMobile";
import { ButtonBlueWhite } from "../Buttons/Buttons";
import { Parallax } from "react-parallax";

export const FirstScreen = (props) => {
  return (
    <Parallax
      blur={0}
      bgImage='img/main_screen_bg.png'
      strength={400}
      bgImageStyle={{ marginTop: "-200px" }}
      contentClassName={styles.main_screen}>
      <div className='container'>
        <div className={styles.main_screen_info_left}>
          <div className={styles.main_screen_titles}>
            <div className={styles.mobile_btn}>
              <ButtonBlueWhite
                text='Litepaper'
                style={{ width: "220px", margin: "20px auto 50px" }}
              />
            </div>
            <img src={title} />
            <h4>
              <span>DEFI</span> ACCELERATOR <br /> AND GOVERNANCE
            </h4>
          </div>
          <div className={styles.main_screen_info}>
            <div>
              <h5>
                Current projects
                <br />
                <span>4</span>
              </h5>
            </div>
            <div>
              <h5>
                Cohort Rewards Farms
                <br />
                up to
                <span>180.0%</span>
              </h5>
            </div>
            <div>
              <h5>
                Total QUAI in Cohort Farm
                <br />
                <span>4949466.876</span>
              </h5>
            </div>
          </div>
        </div>
        <div className={styles.svg_wrapper}>
          <MainImg setWidthSvg={props.setWidthSvg} />
        </div>
      </div>
      <div className={styles.svg_wrapper_mobile}>
        <MainImgMobile />
      </div>
    </Parallax>
  );
};
