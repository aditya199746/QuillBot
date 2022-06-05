import React, { useEffect, useRef, useState } from "react";
import "./style.scss";

import { isMobile } from "react-device-detect";

import BurgerContainer from "../../containers/BurgerContainer";
import NavBar from "../../containers/NavBarContainer";
const Index = ({ show }) => {
  return (
    <>
      {isMobile ? <BurgerContainer /> : null} <NavBar />
    </>
  );
};

export default Index;
