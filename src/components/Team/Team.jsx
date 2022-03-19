import styles from "./Team.module.css";
import Slider from "react-slick";
import IN from "../../assets/svgs/IN.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "../Arrows/Arrows";

const team = [
  {
    name: "Victor Yampolsky",
    description: "Advisor/Contributor, Business Development and Growth",
    img: "img/team/Victor.png",
  },
  {
    name: "Jeffrey Commons",
    description:
      "Contributor,  Senior Solidity Developer and Smart Contracts Architrct",
    img: "img/team/Jeffrey.png",
  },
  {
    name: "Felipe De Anda",
    description: "Contributor, Senior Manager Growth and Development",
    img: "img/team/Felipe.png",
  },
  {
    name: "Davien",
    description: "p2e Specialist",
    img: "img/team/Davien.png",
  },
  {
    name: "Stefan Arsenijevic",
    description: "Web Developer and SEO Expert",
    img: "img/team/Stefan.png",
  },
  {
    name: "Ruslan Gavriljuk",
    description: "Front-end Developer",
    img: "img/team/Ruslan.png",
  },
  {
    name: "Anatolii Shaitanov",
    description: "Senior UI/UX Designer",
    img: "img/team/Anatolii.png",
  },

  {
    name: "Roman Ferlii",
    description: "UI/UX Designer",
    img: "img/team/Roman.png",
  },
];

export const Team = () => {
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
        breakpoint: 991.98,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768.98,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className={styles.team}>
      <div className='container'>
        <h2>Team</h2>
        <div className={styles.team_main}>
          <Slider {...settings}>
            {team.map((member) => (
              <div className={styles.slide}>
                <div className={styles.img}>
                  <img src={member.img} />
                  <a className={styles.link}>
                    <img src={IN} />
                  </a>
                </div>
                <div className={styles.text}>
                  <h6>{member.name}</h6>
                  <span>{member.description}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
