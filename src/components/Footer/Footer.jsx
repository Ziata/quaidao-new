import { Link, NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import logo from "../../assets/svgs/logo_footer.svg";
import medium from "../../assets/svgs/socLinks/medium.svg";
import linkedin from "../../assets/svgs/socLinks/linkedin.svg";
import discord from "../../assets/svgs/socLinks/discord.svg";
import telegram from "../../assets/svgs/socLinks/telegram.svg";
import github from "../../assets/svgs/socLinks/github.svg";
import twitter from "../../assets/svgs/socLinks/twitter.svg";

export default function () {
  return (
    <footer>
      <div className='container'>
        <div className={styles.footer_main}>
          <nav>
            <Link to='/' exact>
              <img src={logo} />
            </Link>
            <NavLink to='/' exact>
              Governance
            </NavLink>
            <NavLink to='/ee' exact>
              Tokenomics
            </NavLink>
            <NavLink to='/ee' exact>
              Projects
            </NavLink>
            <NavLink to='/ee' exact>
              Blog
            </NavLink>
            <NavLink to='/ee' exact>
              Community
            </NavLink>
          </nav>
          <div className={styles.soc_links}>
            <Link to='/'>
              <img src={medium} />
            </Link>
            <Link to='/'>
              <img src={linkedin} />
            </Link>
            <Link to='/'>
              <img src={discord} />
            </Link>
            <Link to='/'>
              <img src={telegram} />
            </Link>
            <Link to='/'>
              <img src={github} />
            </Link>
            <Link to='/'>
              <img src={twitter} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
