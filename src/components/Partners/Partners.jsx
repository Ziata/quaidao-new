import styles from "./Partners.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "../Arrows/Arrows";
import { Link } from "react-router-dom";

const partners = [
  {
    link: "",
    img: "img/partners/horizen.png",
  },
  {
    link: "",
    img: "img/partners/asko.png",
  },
  {
    link: "",
    img: "img/partners/bigleap.png",
  },
  {
    link: "",
    img: "img/partners/rasko.png",
  },
  {
    link: "",
    img: "img/partners/nuls.png",
  },
  {
    link: "",
    img: "img/partners/eye.png",
  },
  {
    link: "",
    img: "img/partners/comics.png",
  },
  {
    link: "",
    img: "img/partners/swapz.png",
  },
  {
    link: "",
    img: "img/partners/quai.png",
  },
];

export const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    arrows: true,
    nextArrow: <ArrowRight stylesProps={{ bottom: "-40px" }} />,
    prevArrow: <ArrowLeft stylesProps={{ bottom: "-40px" }} />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className={styles.partners}>
      <div className='container'>
        <h2>Partners</h2>
        <div className={styles.partners_main}>
          <Slider {...settings}>
            {partners.map((partner) => (
              <div className={styles.slide_wrapper}>
                <span></span>
                <div className={styles.slide}>
                  <Link to={partner.link}>
                    <img src={partner.img} />
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
