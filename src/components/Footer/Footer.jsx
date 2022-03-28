import { Link, NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import logo from "../../assets/svgs/logo_footer.svg";
import medium from "../../assets/svgs/socLinks/medium.svg";
import linkedin from "../../assets/svgs/socLinks/linkedin.svg";
import discord from "../../assets/svgs/socLinks/discord.svg";
import telegram from "../../assets/svgs/socLinks/telegram.svg";
import github from "../../assets/svgs/socLinks/github.svg";
import twitter from "../../assets/svgs/socLinks/twitter.svg";
import { createBrowserHistory } from "history";

export default function () {
  const history = createBrowserHistory();
  return (
    <footer>
      <div className='container'>
        <div className={styles.footer_main}>
          <nav>
            <Link to='/' exact>
              <img src={logo} />
            </Link>
            <a>Become Partner</a>
            <a
              onClick={() => {
                history.push("https://docs.quaidao.io/");
              }}>
              Litepaper
            </a>
            <a
              href='https://t.me/QuaiDAOCommunity'
              target='_blank'
              rel='noreferrer'>
              Join QUAI Community
            </a>
            <a
              href='https://t.me/QuaiDAOCommunity'
              target='_blank'
              rel='noreferrer'>
              Contact Us
            </a>
            <a href='https://quaidao.io/blog/'>Blog</a>
          </nav>
          <div className={styles.soc_links}>
            <a
              href='https://quaidao.medium.com/'
              target='_blank'
              rel='noreferrer'>
              <img src={medium} />
            </a>
            <a
              href='https://www.linkedin.com/company/quai-dao-defi-fueled-accelerator'
              target='_blank'
              rel='noreferrer'>
              <img src={linkedin} />
            </a>
            <a
              href='https://discord.gg/WHUkdJjxxP'
              target='_blank'
              rel='noreferrer'>
              <img src={discord} />
            </a>
            <a
              href='https://t.me/QuaiDAOCommunity'
              target='_blank'
              rel='noreferrer'>
              <img src={telegram} />
            </a>
            <a
              href='https://github.com/QUAI-DAO/QUAI-Smart-Contracts'
              target='_blank'
              rel='noreferrer'>
              <img src={github} />
            </a>
            <a
              href='https://twitter.com/QuaiGlobal'
              target='_blank'
              rel='noreferrer'>
              <img src={twitter} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
