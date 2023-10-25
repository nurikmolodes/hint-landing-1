import React from "react";

// @ts-ignore
import logo from "src/assets/logo.svg";

import "./Header.scss";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);
  const percentage =
    location.pathname === "/personalized-horoscope"
      ? 5
      : location.pathname === "/name"
      ? 10
      : location.pathname === "/gender"
      ? 15
      : location.pathname === "/date-of-birth"
      ? 20
      : location.pathname === "/do-you-know-time-of-birth"
      ? 25
      : location.pathname === "/set-your-time-of-birth"
      ? 30
      : location.pathname === "/dont-know-time-of-birth"
      ? 35
      : location.pathname === "/city-of-birth"
      ? 40
      : location.pathname === "/have-you-used-astrology-before"
      ? 45
      : location.pathname === "/hint-is-different"
      ? 50
      : location.pathname === "/hint-intro"
      ? 55
      : location.pathname === "/relationship-status"
      ? 60
      : location.pathname === "/partner-date-of-birth"
      ? 65
      : location.pathname === "/partner-time-of-birth-question"
      ? 70
      : location.pathname === "/partner-time-of-birth"
      ? 75
      : location.pathname === "/partner-place-of-birth"
      ? 80
      : location.pathname === "/scanner"
      ? 85
      : location.pathname === "/email"
      ? 90
      : location.pathname === "/choose-price"
      ? 95
      : location.pathname === "/paywall"
      ? 100
      : 0;

  return (
    <div className={"header__container"}>
      <img src={logo} className={"header__image"} alt={"image"} />
      <div className={"header__progress-bar"}>
        <div className={"header__progress"} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default Header;
