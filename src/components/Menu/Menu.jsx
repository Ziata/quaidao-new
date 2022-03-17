import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/svgs/logo_hedaer.svg";
import { ButtonBlue } from "../Buttons/Buttons";

export const Menu = () => {
  const [scrollPage, setScrollPage] = useState(null);

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
        scrollPage
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
          <ButtonBlue text='Litepaper' styleSpan={{ width: "160px" }} />
        </div>
      </div>
    </div>
  );
};
