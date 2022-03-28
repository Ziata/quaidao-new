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
import dropdown_arrow from "../../assets/svgs/dropdown_arrow.svg";
import dropdown_arrow_blue from "../../assets/svgs/dropdown_arrow_blue.svg";
import { createBrowserHistory } from "history";

export const Menu = () => {
  const [scrollPage, setScrollPage] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const history = createBrowserHistory();

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
              Home
            </NavLink>
            <NavLink to='/projects' exact>
              Projects
            </NavLink>
            <NavLink to='/tokenomics' exact>
              Tokenomics
            </NavLink>
            <div
              className={styles.dropdown_wrapper}
              onMouseLeave={() => {
                setShowDropdown(false);
              }}>
              <a
                onMouseEnter={() => {
                  setShowDropdown(true);
                }}
                className={showDropdown && styles.active}>
                Dao <img src={dropdown_arrow} />
              </a>
              {showDropdown && (
                <div className={styles.dropdown}>
                  <NavLink
                    to='governance'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Governance Principles
                  </NavLink>
                  <a>DAO Governance Structure</a>
                </div>
              )}
            </div>
            <a
              href='https://t.me/QuaiDAOCommunity'
              target='_blank'
              rel='noreferrer'>
              Community
            </a>
            <a href='https://quaidao.io/blog/'>Blog</a>
          </nav>
          <ButtonBlue
            text='Litepaper'
            styleSpan={{ width: "160px" }}
            onClick={() => {
              history.push("https://docs.quaidao.io/");
            }}
          />
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
            <ButtonBlueWhite
              text='Litepaper'
              onClick={() => {
                history.push("https://docs.quaidao.io/");
              }}
            />
          </div>
          <div className='container'>
            <nav>
              <NavLink to='/' exact>
                Home
              </NavLink>
              <NavLink to='/projects' exact>
                Projects
              </NavLink>
              <NavLink to='/tokenomics' exact>
                Tokenomics
              </NavLink>
              <div
                className={styles.dropdown_wrapper}
                onMouseLeave={() => {
                  setShowDropdown(false);
                }}>
                <a
                  onMouseEnter={() => {
                    setShowDropdown(true);
                  }}
                  className={showDropdown && styles.active}>
                  Dao <img src={dropdown_arrow_blue} />
                </a>
                {showDropdown && (
                  <div className={styles.dropdown}>
                    <NavLink
                      to='governance'
                      target='_blank'
                      rel='noopener noreferrer'>
                      Governance Principles
                    </NavLink>
                    <a>DAO Governance Structure</a>
                  </div>
                )}
              </div>
              <a
                href='https://t.me/QuaiDAOCommunity'
                target='_blank'
                rel='noreferrer'>
                Community
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
      </div>
    </div>
  );
};
