import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/svgs/logo_hedaer.svg";
import { ButtonBlue, ButtonBlueWhite } from "../Buttons/Buttons";
import medium from "../../assets/svgs/socLinks/medium.svg";
import linkedin from "../../assets/svgs/socLinks/linkedin.svg";
import discord from "../../assets/svgs/socLinks/discord.svg";
import telegram from "../../assets/svgs/socLinks/telegram.svg";
import github from "../../assets/svgs/socLinks/github.svg";
import twitter from "../../assets/svgs/socLinks/twitter.svg";

export const Menu = () => {
  const [scrollPage, setScrollPage] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e) => {
    if (window.scrollY > 50) {
      setScrollPage(true);
    } else if (window.scrollY < 50) {
      setScrollPage(false);
    }
  };

  return (
    <div
      className={
        scrollPage & openMenu
          ? styles.menu_wrapper + " " + styles.scroll + " " + styles.open
          : scrollPage
          ? styles.menu_wrapper + " " + styles.scroll
          : styles.menu_wrapper
      }>
      <div className='container'>
        <div className={styles.menu}>
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
            <NavLink to='/projects' exact>
              Projects
            </NavLink>
            <NavLink to='/ee' exact>
              Blog
            </NavLink>
            <NavLink to='/ee' exact>
              Community
            </NavLink>
          </nav>
          <ButtonBlue text='Litepaper' styleSpan={{ width: "160px" }} />
        </div>
        <div className={styles.mobile_menu}>
          <Link to='/' exact>
            <img src={logo} />
          </Link>
          <div
            className={
              openMenu ? styles.menu_btn + " " + styles.active : styles.menu_btn
            }
            onClick={() => setOpenMenu(!openMenu)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          className={
            openMenu
              ? styles.mobile_menu_content + " " + styles.active
              : styles.mobile_menu_content
          }>
          <div className={styles.mobile_menu_content_header}>
            <ButtonBlueWhite text='Litepaper' />
          </div>
          <div className='container'>
            <nav>
              <NavLink to='/' exact>
                Governance
              </NavLink>
              <NavLink to='/ee' exact>
                Tokenomics
              </NavLink>
              <NavLink to='/projects' exact>
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
      </div>
    </div>
  );
};
