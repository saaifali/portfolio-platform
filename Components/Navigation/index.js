import Link from "next/link";
import React from "react";
import ThemeSwitch from "../Common/ThemeSwitch";
import { useState } from 'react';
import Styles from './Navigation.module.scss';
  
const Navigation = () => {

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <nav className={Styles.navBarMainContainer}>
              <ThemeSwitch/>
            <Link href='/'>
              <a className={Styles.nameDivContainer}>
                <span className={Styles.nameDivContent}>
                  Saif Ali
                </span>
              </a>
            </Link>
            {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
            <div
              className={Styles.navLinkContainer}
            >
              <div className={Styles.navLinkContentContainer}>
                <Link href='/'>
                  <a className={Styles.navLinkData}>
                    Home
                  </a>
                </Link>
                <Link href='/services'>
                    <a className={Styles.navLinkData}>
                    Career
                  </a>
                </Link>
                <Link href='/about-us'>
                    <a className={Styles.navLinkData}>
                    Experiences
                  </a>
                </Link>
                <Link href='/contact'>
                    <a className={Styles.navLinkData}>
                    Contact me
                  </a>
                </Link>
              </div>
            </div>
          </nav>
      );
}

export default Navigation;